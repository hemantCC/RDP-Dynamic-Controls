using Customer.EntityLayer.Entities.BusinessEntities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Customer.BusinessLayer.Interfaces
{
    public interface ICustomerManager
    {
        Task<bool> AddCustomerAsync(CustomerVM customer);
        Task<CustomerVM> GetCustomerDetailsById(int id);

        Task<List<CustomerDetailsVM>> GetCustomerDetailsAsync();

    }
}
