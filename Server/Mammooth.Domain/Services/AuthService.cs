using Mammooth.Common.Requests.Auth;
using Mammooth.Data.Entities;
using Mammooth.Domain.Interfaces;
using Microsoft.AspNetCore.Identity;

namespace Mammooth.Domain.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IPasswordHasher<User> _passwordHasher;
        // private readonly JwtService _jwtService;

        public AuthService(UserManager<User> userManager, SignInManager<User> signInManager, IPasswordHasher<User> passwordHasher /*, JwtService jwtService */)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _passwordHasher = passwordHasher;
            // _jwtService = jwtService;
        }

        public async Task<(bool Success, string Message)> LoginAsync(CreateLoginRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Password))
                return (false, "You have not entered a username or password.");

            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null)
                return (false, $"No account found with username {request.Username}.");

            var result = await _signInManager.PasswordSignInAsync(user, request.Password, false, false);
            if (!result.Succeeded)
                return (false, "The password you entered is incorrect, please try again.");

            var userId = await _userManager.GetUserIdAsync(user);
            // var jwt = _jwtService.Generate(userId);

            return (true, "Login successful");
        }

        public async Task<(bool Success, string Message)> RegisterAsync(CreateRegisterRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Username) || string.IsNullOrWhiteSpace(request.Email) || string.IsNullOrWhiteSpace(request.Password))
                return (false, "Invalid registration details.");

            User user = new()
            {
                UserName = request.Username,
                NormalizedUserName = request.Username.ToUpper(),
                Email = request.Email,
                NormalizedEmail = request.Email.ToUpper()
            };

            user.PasswordHash = _passwordHasher.HashPassword(user, request.Password);
            var result = await _userManager.CreateAsync(user);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description).ToList();
                return (false, string.Join(", ", errors));
            }

            return (true, "Registration successful");
        }
    }
}