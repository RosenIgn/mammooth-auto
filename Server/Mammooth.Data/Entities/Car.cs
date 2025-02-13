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
        public required string Brand { get; set; }

        [Required]
        public required string Model { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public int Mileage { get; set; }

        [Required]
        public required string GearboxType { get; set; }

        [Required]
        public required string Color { get; set; }

        [Required]
        public required string VIN { get; set; }

        [Required]
        public required string Description { get; set; }

        // [Required]
        // public List<string> ImageUrls { get; set; }

        [Required]
        public double PriceFromUser { get; set; }

        [Required]
        public double SellingPrice { get; set; } = 0;

        [Required]
        public string? Status { get; set; } // "Pending", "Approved", "Rejected"

        [Required]
        public string? AdminFeedback { get; set; } // Feedback when rejected

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // [Required]
        // public User User { get; set; }
    }

}