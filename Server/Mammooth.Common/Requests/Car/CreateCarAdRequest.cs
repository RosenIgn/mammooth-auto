using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
//using Microsoft.AspNetCore.Http

namespace Mammooth.Common.Requests.Car
{
    public class CreateCarAdRequest
    {
        [Required(ErrorMessage = "Brand is required.")]
        [MinLength(2, ErrorMessage = "Brand must be at least 2 characters.")]
        [MaxLength(50, ErrorMessage = "Brand cannot be longer than 50 characters.")]
        public required string Brand { get; set; }

        [Required(ErrorMessage = "Model is required.")]
        [MinLength(2, ErrorMessage = "Model must be at least 2 characters.")]
        [MaxLength(50, ErrorMessage = "Model cannot be longer than 50 characters.")]
        public required string Model { get; set; }

        [Required(ErrorMessage = "Year is required.")]
        [Range(1886, 2025, ErrorMessage = "Year must be between 1886 and 2050.")]
        public int Year { get; set; }

        [Required(ErrorMessage = "Mileage is required.")]
        [Range(0, 1000000, ErrorMessage = "Mileage must be between 0 and 1,000,000 km.")]
        public int Mileage { get; set; }

        [Required(ErrorMessage = "Gearbox type is required.")]
        [MinLength(3, ErrorMessage = "Gearbox type must be at least 3 characters.")]
        [MaxLength(25, ErrorMessage = "Gearbox type cannot be longer than 20 characters.")]
        public required string GearboxType { get; set; }

        [Required(ErrorMessage = "Color is required.")]
        [MinLength(3, ErrorMessage = "Color must be at least 3 characters.")]
        [MaxLength(20, ErrorMessage = "Color cannot be longer than 20 characters.")]
        public required string Color { get; set; }

        [Required(ErrorMessage = "VIN is required.")]
        [StringLength(17, MinimumLength = 17, ErrorMessage = "VIN must be exactly 17 characters.")]
        public required string VIN { get; set; }

        [Required(ErrorMessage = "Description is required.")]
        [MinLength(5, ErrorMessage = "Description must be at least 5 characters.")]
        [MaxLength(10000, ErrorMessage = "Description cannot be longer than 10000 characters.")]
        public required string Description { get; set; }

        [Required(ErrorMessage = "Price is required.")]
        [Range(100, 1000000, ErrorMessage = "Price must be between 100 and 1,000,000")]
        public double PriceFromUser { get; set; }

        [Required(ErrorMessage = "Image is required.")]
        public required List<string> ImageUrls { get; set; }

    }
}