using Mammooth.Common.Requests.Auth;
using Mammooth.Domain.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Mammooth.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Auth(IAuthService authService) : Controller
    {
        private readonly IAuthService _authService = authService;
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] CreateLoginRequest request)
        {
            var result = await _authService.LoginAsync(request);
            if (result.Success)
                return Ok(new { success = true, message = result.Message });

            return BadRequest(new { success = false, message = result.Message });
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] CreateRegisterRequest request)
        {
            var result = await _authService.RegisterAsync(request);
            if (result.Success)
                return Ok(new { success = true, message = result.Message });

            return BadRequest(new { success = false, message = result.Message });
        }

    }
}