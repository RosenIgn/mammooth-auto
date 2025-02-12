using Mammooth.Common.Requests.Auth;
using Mammooth.Data.Entities;

namespace Mammooth.Domain.Interfaces
{
    public interface IAdminService
    {

        Task<(bool Success, string Message, List<CarSellEnquery> dataRetrieved)> GetAllCarSellEnqueries();
        Task<(bool Success, string Message)> ApproveEnquery(string enqueryId, double sellingPrice);
        Task<(bool Success, string Message)> RejectEnquery(string enqueryId, string feedback);
        //Task<(bool Success, string Message)> RegisterAsync(CreateRegisterRequest request);
    }
}