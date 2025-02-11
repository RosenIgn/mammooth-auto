using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mammooth.Data.Entities
{
    public class CarSellEnquery
    {
        [Required]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        [Required]
        public Car Car { get; set; }

        [Required]
        public string Status { get; set; } // "Pending", "Approved", "Rejected"

        [Required]
        public string? AdminFeedback { get; set; } // Feedback when rejected

        [Required]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    }
}