using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mammooth.Data.Entities
{
    public class Car
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public int Mileage { get; set; }

        [Required]
        public string GearboxType { get; set; }

        [Required]
        public string Color { get; set; }

        [Required]
        public string VIN { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public List<string> ImageUrls { get; set; }

        [Required]
        public double PriceFromUser { get; set; }

        [Required]
        public double SellingPrice { get; set; }

        [Required]
        public User User { get; set; } 
        
    }

}