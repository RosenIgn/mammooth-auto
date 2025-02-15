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
    public class CarInfoModel
    {
        public string CarId { get; set; }

        public string CarName { get; set; }

        public int Year { get; set; }

        public int Mileage { get; set; }

        public string GearboxType { get; set; }

        public string Color { get; set; }

        public string VIN { get; set; }

        public string Description { get; set; }

        public double SellingPrice { get; set; }

        public string ImageUrls { get; set; }

        public DateTime CreatedAt { get; set; }

        // public User User { get; set; }

        public CarInfoModel(Car car)
        {
            this.CarId = car.Id;
            this.CarName = car.Brand + " " + car.Model;
            this.Year = car.Year;
            this.Mileage = car.Mileage;
            this.GearboxType = car.GearboxType;
            this.Color = car.Color;
            this.VIN = car.VIN;
            this.Description = car.Description;
            this.SellingPrice = car.SellingPrice;
            this.ImageUrls = car.ImageUrls[0];
            this.CreatedAt = car.CreatedAt;
        }
    }
}