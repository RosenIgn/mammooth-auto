using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mammooth.Common.Requests.Auth;
using Mammooth.Common.Requests.Car;
using Mammooth.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Mammooth.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CarAd(ICarAdService carAdService) : Controller
    {
        private readonly ICarAdService _carAdService = carAdService;

        [HttpPost("Create")]
        public async Task<IActionResult> CreateCarAd([FromBody] CreateCarAdRequest request)
        {
            var result = await _carAdService.CarAdAsync(request);
            if (result.Success)
                return Ok(new { success = true, message = result.Message });

            return BadRequest(new { success = false, message = result.Message });
        }

        [HttpGet("GetCarInfoById/{id}")]
        public async Task<IActionResult> GetCarInfoById(string id)
        {
            var (success, message, data) = await _carAdService.GetCarInfoById(id);
            
            if (!success)
            {
                return BadRequest(new { success = false, message });
            }

            return Ok(new { success = true, message, data });
        }

        [HttpGet("GetAllCarPreviews")]
        public async Task<IActionResult> GetAllCarPreviewsAsync()
        {
            var (success, message, data) = await _carAdService.GetAllCarPreviewsAsync();

            if (!success)
            {
                return BadRequest(new { success = false, message });
            }

            return Ok(new { success = true, message, data });
        }

    }
}