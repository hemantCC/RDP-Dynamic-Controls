using Customer.DataAccessLayer.Interfaces;
using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Customer.DataAccessLayer
{
    public class MockCustomerRepository : ICustomerRepository
    {
        /// <summary>
        /// Gets the customer details by identifier.
        /// </summary>
        /// <returns> CustomerVM </returns>
        public async Task<CustomerVM> GetCustomerDetailsById(int id)
        {
            CustomerVM customerVM = new CustomerVM()
            {
                Id = 1,
                Salutation = "Mr.",
                SalesConsultant = "DDR",
                AfterSalesConsultant = "PQP",
                PartsSalesAssistance = "OMR",

            };
            return customerVM;
        }

        public Task<bool> AddConsultant(TblConsultant consultant)
        {
            throw new NotImplementedException();
        }

        public TblCustomer AddCustomer(TblCustomer customer)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddFAInformation(TblFainformation fainformation)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddMaster1(TblMaster1 master1)
        {
            throw new NotImplementedException();
        }

        public Task<bool> AddMaster2(TblMaster2 master2)
        {
            throw new NotImplementedException();
        }

        public async Task<List<CustomerDetailsVM>> GetCustomerDetailsAsync()
        {
            List<CustomerDetailsVM> customerVM = new List<CustomerDetailsVM>();
            customerVM.Add(new CustomerDetailsVM
            {
                Id = 1,
                SalesConsultant = "DDR"
            });
            return customerVM;
        }

    }
}
