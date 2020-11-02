using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Customer.BusinessLayer.Interfaces
{
    public interface IControlBL
    {
        Task<List<ControlVM>> GetControls();

    }
}
