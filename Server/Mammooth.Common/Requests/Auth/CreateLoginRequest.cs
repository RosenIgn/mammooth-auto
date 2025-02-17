using System.ComponentModel.DataAnnotations;

namespace Mammooth.Common.Requests.Auth
{
    public class CreateLoginRequest
    {
        [Required(ErrorMessage = "Username is required.")]
        public string Username { get; set; } = null!;

        [Required(ErrorMessage = "Password is required.")]
        public string Password { get; set; } = null!;
    }
}