using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManagement.Contracts.Response
{
    public class UserLoginResponse : Response
    {
        public int IdUser { get; set; }
        public string Email { get; set; } = String.Empty;
        public string Token { get; set; } = String.Empty;
    }
}
