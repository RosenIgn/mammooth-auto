using Mammooth.Common.DTOs;
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

        public async Task<(bool Success, string Message, List<CarAdminPreviewModel> dataRetrieved)> GetAllCarSellEnqueries()
        {
            var enqueries = await _dbContext.Cars
                                    .Select(c => new CarAdminPreviewModel(c))
                                    .ToListAsync();

            if (enqueries == null || enqueries.Count == 0)
            {
                return (false, "No car sell inquiries found.", null);
            }

            return (true, "Car sell inquiries retrieved successfully.", enqueries);
        }

        public async Task<(bool Success, string Message)> ApproveEnquery(string carId, double sellingPrice)
        {
            var request = await _dbContext.Cars
                                .FirstOrDefaultAsync(c => c.Id == carId);

            if (request == null)
            {
                return (false, "Car sale request not found.");
            }

            if (request.Status != "В процес...")
            {
                return (false, "This request has already been processed.");
            }

            request.SellingPrice = sellingPrice;
            request.Status = "Одобрен";
            request.AdminFeedback = "Без забележки";

            await _dbContext.SaveChangesAsync();
            return (true, "Car sale request approved successfully. Selling price updated.");
        }

        public async Task<(bool Success, string Message)> RejectEnquery(string carId, string feedback)
        {
            var request = await _dbContext.Cars
                                .FirstOrDefaultAsync(c => c.Id == carId);
            if (request == null)
            {
                return (false, "Car sale request not found.");
            }

            if (request.Status != "В процес...")
            {
                return (false, "This request has already been processed.");
            }

            request.Status = "Rejected";
            request.AdminFeedback = feedback;

            await _dbContext.SaveChangesAsync();
            return (true, "Car sale request rejected successfully.");
        }

        public async Task<(bool Success, string Message, Car dataRetrieved)> GetCarById(string id)
        {
            var car = await _dbContext.Cars
                    .FirstOrDefaultAsync(c => c.Id == id);

            if (car == null)
            {
                return (false, "Car not found.", null);
            }

            return (true, "Car found successfully.", car);
        }
    }
}