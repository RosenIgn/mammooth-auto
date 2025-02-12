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
    public class CarPreviewModel
    {
        public string CarName { get; set; }

        public int Year { get; set; }

        public int Mileage { get; set; }

        public string GearboxType { get; set; }

        public  double SellingPrice { get; set; }

        // [Required]
        // public List<string> ImageUrls { get; set; }

        public CarPreviewModel(Car car)
        {
            this.CarName = car.Brand + " " + car.Model;
            this.Year = car.Year;
            this.Mileage = car.Mileage;
            this.GearboxType = car.GearboxType;
            this.SellingPrice = car.SellingPrice;
            //this.ImageUrls = car.ImageUrls;
        }
    }
}