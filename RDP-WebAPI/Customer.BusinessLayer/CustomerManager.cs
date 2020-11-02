using Customer.BusinessLayer.Interfaces;
using Customer.DataAccessLayer.Interfaces;
using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Customer.BusinessLayer
{
    public class CustomerManager : ICustomerManager
    {
        private readonly ICustomerRepository _customerRepository;
       

        public CustomerManager(ICustomerRepository _customerRepository)
        {
            this._customerRepository = _customerRepository;
        }

        /// <summary>
        /// Adds the customer asynchronous to database.
        /// </summary>
        /// <param name="customer">The customer.</param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public async Task<bool> AddCustomerAsync(CustomerVM customer)
        {
            if (customer.Id == 0)
            {
                Random _random = new Random();
                TblCustomer customerNew = new TblCustomer()
                {
                    CustomerNumber = _random.Next(0, 1000000).ToString(),
                    LastVisit = DateTime.Now
                };
                TblCustomer currentCustomer = _customerRepository.AddCustomer(customerNew);
                TblMaster1 master1 = new TblMaster1()
                {
                    Salutation = customer.Salutation,
                    Ta = customer.Ta,
                    Tb = customer.Tb,
                    SalutationInLetters = customer.SalutationInLetters,
                    FirstName = customer.FirstName,
                    AdditionalAddress = customer.AdditionalAddress,
                    AdditionalAddress2 = customer.AdditionalAddress2,
                    AdditionalAddress3 = customer.AdditionalAddress3,
                    MatchCode = customer.MatchCode,
                    Street = customer.Street,
                    Country = customer.Country,
                    Zip = customer.Zip,
                    City = customer.City,
                    DateOfBirth = customer.BirthDate,
                    AddressOrigin = customer.AddressOrigin,
                    CustomerState = customer.CustomerState,
                    CustomerName = customer.CustomerName,
                    CustomerNavigation = currentCustomer
                };
                TblMaster2 master2 = new TblMaster2()
                {
                    CustomerInformation = customer.CustomerInformation,
                    CustomerCategory = customer.CustomerCategory,
                    LegalForm = customer.LegalForm,
                    Email = customer.Email,
                    Vat = customer.Vat,
                    ReferenceText = customer.ReferenceText,
                    CustomerNavigation = currentCustomer,
                    CustomerType = customer.CustomerType
                };
                TblFainformation fainformation = new TblFainformation()
                {
                    MethodOfGeneralPayment = customer.MethodOfGeneralPayment,
                    CreditLimit = customer.CreditLimit,
                    MethodOfVehiclePayment = customer.MethodOfVehiclePayment,
                    CreditBlocking = customer.CreditBlocking,
                    TermsOfGeneralPayment = customer.TermsOfGeneralPayment,
                    OpenBalance = customer.OpenBalance,
                    TermsOfVehiclePayment = customer.TermsOfVehiclePayment,
                    Solvency = customer.Solvency,
                    DebtorNumber = customer.DebtorNumber,
                    BankInstitute = customer.BankInstitute,
                    BankCode = customer.BankCode,
                    AccountNumber = customer.AccountNumber,
                    BankCollection = customer.BankCollection,
                    CustomerNavigation = currentCustomer
                };
                TblConsultant consultant = new TblConsultant()
                {
                    SalesConsultant = customer.SalesConsultant,
                    AfterSalesConsultant = customer.AfterSalesConsultant,
                    PartsSalesAssistance = customer.PartsSalesAssistance,
                    CustomerNavigation = currentCustomer
                };
                var result1 = await _customerRepository.AddMaster1(master1);
                var result2 = await _customerRepository.AddMaster2(master2);
                var result3 = await _customerRepository.AddFAInformation(fainformation);
                var result4 = await _customerRepository.AddConsultant(consultant);
                return (result1 && result2 && result3 && result4);
            }
            else
            {
                //Edit logic here
                return false;
            }
        }

        public async Task<CustomerVM> GetCustomerDetailsById(int id)
        {
            return await _customerRepository.GetCustomerDetailsById(id);
        }


        public async Task<List<CustomerDetailsVM>> GetCustomerDetailsAsync()
        {
            return await _customerRepository.GetCustomerDetailsAsync();
        }
    }
}
