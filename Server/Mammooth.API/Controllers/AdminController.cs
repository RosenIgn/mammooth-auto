using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Mammooth.Common.Requests.Auth;
using Mammooth.Common.Requests.Car;
using Mammooth.Domain.Interfaces;

//TO DO: Authorize to work with roles
using Microsoft.AspNetCore.Authorization;
//TO DO: Authorize to work with roles

using Microsoft.AspNetCore.Mvc;

namespace Mammooth.API.Controllers
{
    //TO DO: Authorize to work with roles
    //[Authorize(Roles = "Admin")]

    [ApiController]
    [Route("api/[controller]")]
    public class Admin(IAdminService adminService) : Controller
    {
        private readonly IAdminService _adminService = adminService;

        [HttpGet("GetAllEnquieries")]
        public async Task<IActionResult> GetAllCarSellEnqueries()
        {
            var (success, message, data) = await _adminService.GetAllCarSellEnqueries();

            if (!success)
            {
                return BadRequest(new { success = false, message });
            }

            return Ok(new { success = true, message, data });
        }

        [HttpGet("GetCarById/{id}")]
        public async Task<IActionResult> GetCarById(string id)
        {
            var (success, message, data) = await _adminService.GetCarById(id);

            if (!success)
            {
                return BadRequest(new { success = false, message });
            }

            return Ok(new { success = true, message, data });
        }


        [HttpPost("ApproveRequest/{id}")]
        public async Task<IActionResult> ApproveRequest(string id, [FromBody] JsonElement body)
        {
            if (!body.TryGetProperty("sellingPrice", out JsonElement priceElement) || !priceElement.TryGetDouble(out double sellingPrice) || sellingPrice <= 0)
            {
                return BadRequest(new { success = false, message = "Invalid selling price." });
            }

            var result = await _adminService.ApproveEnquery(id, sellingPrice);
            if (!result.Success)
            {
                return BadRequest(new { success = false, message = result.Message });
            }

            return Ok(new { success = true, message = result.Message });
        }

        [HttpPost("RejectRequest/{id}")]
        public async Task<IActionResult> RejectRequest(string id, [FromBody] JsonElement body)
        {
            if (!body.TryGetProperty("feedback", out JsonElement feedbackElement) || string.IsNullOrWhiteSpace(feedbackElement.GetString()))
            {
                return BadRequest(new { success = false, message = "Feedback is required." });
            }

            var feedback = feedbackElement.GetString();

            var result = await _adminService.RejectEnquery(id, feedback);
            if (!result.Success)
            {
                return BadRequest(new { success = false, message = result.Message });
            }

            return Ok(new { success = true, message = result.Message });
        }
    }
}