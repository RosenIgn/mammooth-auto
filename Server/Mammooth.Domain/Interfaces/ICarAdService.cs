using Mammooth.Common.Requests.Car;

namespace Mammooth.Domain.Interfaces
{
    public interface ICarAdService
    {
        Task<(bool Success, string Message)> CarAdAsync(CreateCarAdRequest request);
    }
}