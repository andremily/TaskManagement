using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Contracts.Requests;
using TaskManagement.Contracts.Response;

namespace TaskManagement.Service.Interfaces
{
    public interface IUserService
    {
        Task<Response> AddUserServiceAsync(UserRequest taskRequest);
    }
}
