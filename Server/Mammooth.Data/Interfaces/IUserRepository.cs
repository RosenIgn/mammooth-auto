using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Mammooth.Data.Entities;

namespace Mammooth.Data.Interfaces
{
    public interface IUserRepository
    {
        User GetById(string id);
    }
}