using Customer.DataAccessLayer.Interfaces;
using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customer.DataAccessLayer
{
    /// <summary>
    /// This class deals with customer repository
    /// </summary>
    /// <seealso cref="Customer.DataAccessLayer.Interfaces.ICustomerRepository" />
    public class CustomerRepository : ICustomerRepository
    {
        /// <summary>
        /// The context
        /// </summary>
        private readonly DbRDPContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="CustomerRepository"/> class.
        /// </summary>
        /// <param name="_context">The context.</param>
        public CustomerRepository(DbRDPContext _context)
        {
            this._context = _context;
        }

        /// <summary>
        /// Gets the customer details asynchronous.
        /// </summary>
        /// <returns></returns>
        public async Task<List<CustomerDetailsVM>> GetCustomerDetailsAsync()
        {
            List<CustomerDetailsVM> customerDTOs = new List<CustomerDetailsVM>();
            IEnumerable<TblCustomer> customers = await _context.TblCustomer.ToListAsync();
            foreach (var customer in customers)
            {
                TblMaster1 currentMaster1 = await _context.TblMaster1.Where(x => x.Customer == customer.Id).FirstOrDefaultAsync();
                TblMaster2 currentMaster2 = await _context.TblMaster2.Where(x => x.Customer == customer.Id).FirstOrDefaultAsync();
                TblConsultant currentConsultant = await _context.TblConsultant.Where(x => x.Customer == customer.Id).FirstOrDefaultAsync();
                CustomerDetailsVM customerDTO = new CustomerDetailsVM()
                {
                    Id = customer.Id,
                    CustomerNumber = customer.CustomerNumber,
                    Name = currentMaster1.FirstName,
                    LastVisit = customer.LastVisit,
                    MatchCode = currentMaster1.MatchCode,
                    Type = currentMaster2.CustomerType,
                    SalesConsultant = currentConsultant.SalesConsultant,
                    VAT = currentMaster2.Vat
                };
                customerDTOs.Add(customerDTO);
            }
            return customerDTOs;
        }

        /// <summary>
        /// Gets the customer details by identifier.
        /// </summary>
        /// <returns> CustomerVM </returns>
        public async Task<CustomerVM> GetCustomerDetailsById(int id)
        {
            TblMaster1 master1 = await _context.TblMaster1.Where(x => x.Customer == id).FirstOrDefaultAsync();
            TblMaster2 master2 = await _context.TblMaster2.Where(x => x.Customer == id).FirstOrDefaultAsync();
            TblFainformation fainformation = await _context.TblFainformation.Where(x => x.Customer == id).FirstOrDefaultAsync();
            TblConsultant consultant = await _context.TblConsultant.Where(x => x.Customer == id).FirstOrDefaultAsync();
            CustomerVM customerVM = new CustomerVM()
            {
                Id = id,
                Salutation = master1.Salutation,
                Ta = master1.Ta,
                Tb = master1.Tb,
                SalutationInLetters = master1.SalutationInLetters,
                FirstName = master1.FirstName,
                CustomerName = master1.CustomerName,
                AdditionalAddress = master1.AdditionalAddress,
                AdditionalAddress2 = master1.AdditionalAddress2,
                AdditionalAddress3 = master1.AdditionalAddress3,
                MatchCode = master1.MatchCode,
                Street = master1.Street,
                Country = master1.Country,
                Zip = master1.Zip,
                City = master1.City,
                BirthDate = master1.DateOfBirth,
                AddressOrigin = master1.AddressOrigin,
                CustomerState = master1.CustomerState,

                CustomerInformation = master2.CustomerInformation,
                CustomerCategory = master2.CustomerCategory,
                LegalForm = master2.LegalForm,
                Email = master2.Email,
                ReferenceText = master2.ReferenceText,
                CustomerType = master2.CustomerType,
                Vat = master2.Vat,

                MethodOfGeneralPayment = fainformation.MethodOfGeneralPayment,
                CreditLimit = fainformation.CreditLimit,
                MethodOfVehiclePayment = fainformation.MethodOfVehiclePayment,
                CreditBlocking = fainformation.CreditBlocking,
                TermsOfGeneralPayment = fainformation.TermsOfGeneralPayment,
                OpenBalance = fainformation.OpenBalance,
                TermsOfVehiclePayment = fainformation.TermsOfVehiclePayment,
                Solvency = fainformation.Solvency,
                DebtorNumber = fainformation.DebtorNumber,
                BankInstitute = fainformation.BankInstitute,
                BankCode = fainformation.BankCode,
                AccountNumber = fainformation.AccountNumber,
                BankCollection = fainformation.BankCollection,

                SalesConsultant = consultant.SalesConsultant,
                AfterSalesConsultant = consultant.AfterSalesConsultant,
                PartsSalesAssistance = consultant.PartsSalesAssistance,

            };
            return customerVM;
        }


        /// <summary>
        /// Adds the consultant.
        /// </summary>
        /// <param name="values">The values.</param>
        /// <returns></returns>
        public async Task<bool> AddConsultant(TblConsultant consultant)
        {
            await _context.TblConsultant.AddAsync(consultant);
            await _context.SaveChangesAsync();
            return true;
        }


        /// <summary>
        /// Adds the fa information.
        /// </summary>
        /// <param name="values">The values.</param>
        /// <returns></returns>
        public async Task<bool> AddFAInformation(TblFainformation fainformation)
        {
            await _context.TblFainformation.AddAsync(fainformation);
            await _context.SaveChangesAsync();
            return true;
        }

        /// <summary>
        /// Adds the master1.
        /// </summary>
        /// <param name="values">The values.</param>
        /// <returns></returns>
        public async Task<bool> AddMaster1(TblMaster1 master1)
        {
            await _context.TblMaster1.AddAsync(master1);
            await _context.SaveChangesAsync();
            return true;
        }

        /// <summary>
        /// Adds the master2.
        /// </summary>
        /// <param name="values">The values.</param>
        /// <returns></returns>
        public async Task<bool> AddMaster2(TblMaster2 master2)
        {
            await _context.TblMaster2.AddAsync(master2);
            await _context.SaveChangesAsync();
            return true;

        }

        /// <summary>
        /// Adds the customer.
        /// </summary>
        /// <param name="customer">The customer.</param>
        /// <returns></returns>
        public TblCustomer AddCustomer(TblCustomer customer)
        {
            _context.TblCustomer.Add(customer);
            _context.SaveChanges();
            return customer;
        }
    }
}
