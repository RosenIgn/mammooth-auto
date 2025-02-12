using Mammooth.Common.Requests.Auth;
using Mammooth.Common.Requests.Car;
using Mammooth.Data.Context;
using Mammooth.Data.Entities;
using Mammooth.Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Mammooth.Domain.Services
{
    public class AdminService(AppDbContext dbContext) : IAdminService
    {
        private readonly AppDbContext _dbContext = dbContext;

        public async Task<(bool Success, string Message, List<CarSellEnquery> dataRetrieved)> GetAllCarSellEnqueries()
        {
            var enqueries = await _dbContext.CarSellEnqueries
                                    .Include(e => e.Car)
                                    .ToListAsync();

            if (enqueries == null || enqueries.Count == 0)
            {
                return (false, "No car sell inquiries found.", null);
            }

            return (true, "Car sell inquiries retrieved successfully.", enqueries);
        }

        public async Task<(bool Success, string Message)> ApproveEnquery(string enqueryId, double sellingPrice)
        {
            var request = await _dbContext.CarSellEnqueries
                                .Include(e => e.Car)
                                .FirstOrDefaultAsync(e => e.Id == enqueryId);

            if (request == null)
            {
                return (false, "Car sale request not found.");
            }

            if (request.Status != "Pending")
            {
                return (false, "This request has already been processed.");
            }

            if (request.Car == null)
            {
                return (false, "Associated car not found.");
            }

            request.Car.SellingPrice = sellingPrice;

            request.Status = "Approved";

            await _dbContext.SaveChangesAsync();
            return (true, "Car sale request approved successfully. Selling price updated.");
        }

        public async Task<(bool Success, string Message)> RejectEnquery(string enqueryId, string feedback)
        {
            var request = await _dbContext.CarSellEnqueries.FindAsync(enqueryId);
            if (request == null)
            {
                return (false, "Car sale request not found.");
            }

            if (request.Status != "Pending")
            {
                return (false, "This request has already been processed.");
            }

            request.Status = "Rejected";
            request.AdminFeedback = feedback;

            await _dbContext.SaveChangesAsync();
            return (true, "Car sale request rejected successfully.");
        }
    }
}