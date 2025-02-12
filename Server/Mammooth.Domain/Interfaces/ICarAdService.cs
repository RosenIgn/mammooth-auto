using Mammooth.Common.DTOs;
using Mammooth.Common.Requests.Car;

namespace Mammooth.Domain.Interfaces
{
    public interface ICarAdService
    {
        Task<(bool Success, string Message)> CarAdAsync(CreateCarAdRequest request);

        Task<(bool Success, string Message, List<CarPreviewModel> data)> GetAllCarPreviewsAsync();
    }
}