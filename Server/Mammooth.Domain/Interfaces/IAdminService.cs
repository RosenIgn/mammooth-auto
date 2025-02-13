using Mammooth.Common.DTOs;
using Mammooth.Common.Requests.Auth;
using Mammooth.Data.Entities;

namespace Mammooth.Domain.Interfaces
{
    public interface IAdminService
    {

        Task<(bool Success, string Message, List<CarAdminPreviewModel> dataRetrieved)> GetAllCarSellEnqueries();
        Task<(bool Success, string Message, Car dataRetrieved)> GetCarById(string id);
        Task<(bool Success, string Message)> ApproveEnquery(string carId, double sellingPrice);
        Task<(bool Success, string Message)> RejectEnquery(string carId, string feedback);
    }
}