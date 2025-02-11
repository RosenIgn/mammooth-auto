using Mammooth.Common.Requests.Auth;

namespace Mammooth.Domain.Interfaces
{
    public interface IAuthService
    {
        Task<(bool Success, string Message)> LoginAsync(CreateLoginRequest request);
        Task<(bool Success, string Message)> RegisterAsync(CreateRegisterRequest request);
    }
}