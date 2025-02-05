using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mammooth.Common.Requests.Auth;
using Mammooth.Data.Context;
using Mammooth.Data.Entities;
using Mammooth.Data.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Mammooth.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Auth(AppDbContext dbContext, UserManager<User> userManager, SignInManager<User> signInManager, IPasswordHasher<User> passwordHasher, /*JwtService jwtService */ UserRepository userRepository) : Controller
    {
        private readonly AppDbContext _dbContext = dbContext;
        private readonly UserManager<User> _userManager = userManager;
        private readonly SignInManager<User> _signInManager = signInManager;
        private readonly IPasswordHasher<User> _passwordHasher = passwordHasher;
        // private readonly JwtService _jwtService;
        private readonly UserRepository _userRepository = userRepository;

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] CreateLoginRequest userData)
        {
            if (userData.Username == "" || userData.Password == "")
            {
                return Ok(new { message = $"You have not entered a username or password." });
            }
            var user = await _userManager.FindByNameAsync(userData.Username);
            if (user != null)
            {
                var result = await _signInManager.PasswordSignInAsync(user, userData.Password, false, false);
                if (result.Succeeded)
                {
                    var userId = await _userManager.GetUserIdAsync(user);
                    // var jwt = _jwtService.Generate(userId);

                    return Ok(new { /*Jwt = jwt*/ Success = true });
                }
                return Ok(new { message = "The password you entered is incorrect, please try again." });
            }
            else
            {
                return Ok(new { message = $"No account found with username {userData.Username}." });
            }
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] CreateRegisterRequest registerData)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Values.SelectMany(v => v.Errors)
                                              .Select(e => e.ErrorMessage)
                                              .ToList();
                return BadRequest(errors);
            }

            User user = new()
            {
                UserName = registerData.Username,
                NormalizedUserName = registerData.Username.ToUpper(),
                Email = registerData.Email,
                NormalizedEmail = registerData.Email.ToUpper()
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, registerData.Password);

            var result = await _userManager.CreateAsync(user);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description).ToList();
                return BadRequest(errors);
            }

            return Ok(new { success = true, message = $"Registration successful" });
        }

    }
}