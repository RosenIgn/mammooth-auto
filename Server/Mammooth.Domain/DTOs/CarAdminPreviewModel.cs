using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using Mammooth.Common.Requests.Auth;
using Mammooth.Common.Requests.Car;
using Mammooth.Data.Context;
using Mammooth.Domain.Interfaces;
using Mammooth.Data.Entities;
//using Microsoft.AspNetCore.Http

namespace Mammooth.Common.DTOs
{
    public class CarAdminPreviewModel
    {
        public string CarId { get; set; }

        public string CarName { get; set; }

        public int Year { get; set; }

        public int Mileage { get; set; }

        public string GearboxType { get; set; }

        public double PriceFromUser { get; set; }

        public double SellingPrice { get; set; }

        public string Status { get; set; }

        public string? AdminFeedback { get; set; }

        public DateTime CreatedAt { get; set; }

        public string ImageUrls { get; set; }

        public CarAdminPreviewModel(Car car)
        {
            this.CarId = car.Id;
            this.CarName = car.Brand + " " + car.Model;
            this.Year = car.Year;
            this.Mileage = car.Mileage;
            this.GearboxType = car.GearboxType;
            this.PriceFromUser = car.PriceFromUser;
            this.SellingPrice = car.SellingPrice;
            this.Status = car.Status;
            this.AdminFeedback = car.AdminFeedback;
            this.CreatedAt = car.CreatedAt;
            this.ImageUrls = car.ImageUrls[0];
        }
    }
}