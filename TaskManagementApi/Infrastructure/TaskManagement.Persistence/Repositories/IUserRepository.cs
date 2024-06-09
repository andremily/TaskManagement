using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TaskManagement.Domain.Models;

namespace TaskManagement.Persistence.Repositories
{
    public interface IUserRepository :IRepository<UserModel>
    {
        UserModel LoginUser(UserModel userModel);
       
    }
}
