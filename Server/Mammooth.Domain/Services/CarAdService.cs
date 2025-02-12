using Mammooth.Common.Requests.Auth;
using Mammooth.Common.Requests.Car;
using Mammooth.Data.Context;
using Mammooth.Data.Entities;
using Mammooth.Domain.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Mammooth.Domain.Services
{
    public class CarAdService(AppDbContext dbContext) : ICarAdService
    {
        private readonly AppDbContext _dbContext = dbContext;

        public async Task<(bool Success, string Message)> CarAdAsync(CreateCarAdRequest request)
        {
            Console.WriteLine($"Received car listing: {request.Brand}, {request.Model}, {request.VIN}");
            bool vinExists = await _dbContext.Cars.AnyAsync(c => c.VIN == request.VIN);
            if (vinExists)
            {
                return (false, "A car with this VIN is already listed.");
            }
            var car = new Car()
            {
                Brand = request.Brand,
                Model = request.Model,
                Year = request.Year,
                Mileage = request.Mileage,
                GearboxType = request.GearboxType,
                Color = request.Color,
                VIN = request.VIN,
                Description = request.Description,
                PriceFromUser = request.PriceFromUser
            };
            var carSellEnquery = new CarSellEnquery()
            {
                Car = car,
                Status = "Pending",
                AdminFeedback = "Not reviewed yet"
            };

            _dbContext.Cars.Add(car);
            _dbContext.CarSellEnqueries.Add(carSellEnquery);
            await _dbContext.SaveChangesAsync();

            return (true, "Car ad created successfully");
        }
    }
}