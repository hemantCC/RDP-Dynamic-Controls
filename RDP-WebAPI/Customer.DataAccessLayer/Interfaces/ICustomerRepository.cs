using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Customer.DataAccessLayer.Interfaces
{
    /// <summary>
    ///  Performs Customer related data operations
    /// </summary>
    public interface ICustomerRepository
    {
        TblCustomer AddCustomer(TblCustomer customer);
        Task<bool> AddMaster1(TblMaster1 master1);
        Task<bool> AddMaster2(TblMaster2 master2);
        Task<bool> AddFAInformation(TblFainformation fainformation);
        Task<bool> AddConsultant(TblConsultant consultant);
        Task<CustomerVM> GetCustomerDetailsById(int id);
        Task<List<CustomerDetailsVM>> GetCustomerDetailsAsync();
    }
}
