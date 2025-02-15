using Mammooth.Common.DTOs;
using Mammooth.Common.Requests.Auth;
using Mammooth.Common.Requests.Car;
using Mammooth.Data.Context;
using Mammooth.Data.Entities;
using Mammooth.Domain.Interfaces;
using Microsoft.AspNetCore.Http;
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
                PriceFromUser = request.PriceFromUser,
                Status = "В процес...",
                AdminFeedback = "Няма",
                ImageUrls = request.ImageUrls,
            };


            _dbContext.Cars.Add(car);
            await _dbContext.SaveChangesAsync();

            return (true, "Car ad created successfully");
        }

        public async Task<(bool Success, string Message, List<CarPreviewModel> data)> GetAllCarPreviewsAsync()
        {
            try
            {
                List<Car> carsForSale = _dbContext.Cars
                    .Where(e => e.Status == "Одобрен")
                    .ToList();

                if (carsForSale == null)
                {
                    return (false, "No car sale enquiries found.", new List<CarPreviewModel>());
                }

                if (carsForSale.Count == 0)
                {
                    return (false, "No approved car ads found.", new List<CarPreviewModel>());
                }

                List<CarPreviewModel> carPreviews = carsForSale
                    .Select(car => new CarPreviewModel(car))
                    .ToList();

                return (true, "Car ads retrieved successfully", carPreviews);
            }
            catch (Exception ex)
            {
                return (false, $"Error: {ex.Message}", new List<CarPreviewModel>());
            }
        }

        public async Task<(bool Success, string Message, CarInfoModel? data)> GetCarInfoById(string id)
        {
            try
            {
                Car? car = await _dbContext.Cars.FirstOrDefaultAsync(c => c.Id == id);


                if (car == null)
                {
                    return (false, "Car not found", null);
                }

                CarInfoModel carInfo = new CarInfoModel(car);

                return (true, "Car found successfully", carInfo);
            }
            catch (Exception ex)
            {
                return (false, $"Error: {ex.Message}", null);
            }
        }
    }
}