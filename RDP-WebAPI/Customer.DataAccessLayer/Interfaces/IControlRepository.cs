using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Customer.DataAccessLayer.Interfaces
{
    public interface IControlRepository 
    {
        Task<List<TblControls>> GetControls();
    }
}
