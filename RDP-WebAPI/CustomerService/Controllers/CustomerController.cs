using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Customer.BusinessLayer.Interfaces;
using Customer.EntityLayer.Entities.BusinessEntities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerService.Controllers
{
    /// <summary>
    /// This class deals with Customer related actions
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {

        #region Variables        
        /// <summary>
        /// The customer bl
        /// </summary>
        private readonly ICustomerManager _customerBL;

        #endregion

        #region Constructor        
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomerController"/> class.
        /// </summary>
        /// <param name="_customerBL">The customer bl.</param>
        public CustomerController(ICustomerManager _customerBL)
        {
            this._customerBL = _customerBL;
        }

        #endregion

        #region Public Methods


        /// <summary>
        /// returns all the customer details from the database
        /// </summary>
        /// <returns> IActionResult </returns>
        [HttpGet]
        [Route("GetCustomerDetails")]
        public async Task<IActionResult> GetCustomerDetails()
        {
            IEnumerable<CustomerDetailsVM> customers = await _customerBL.GetCustomerDetailsAsync();
            return Ok(customers);
        }

        [HttpGet]
        [Route("GetCustomerById/{id}")]
        public async Task<IActionResult> GetCustomerById(int id)
        {
            CustomerVM customer = await _customerBL.GetCustomerDetailsById(id);
            if(customer == null)
            {
                return BadRequest();
            }
            return Ok(customer);
        }


        [HttpPost]
        [Route("AddCustomer")]
        public async Task<IActionResult> AddCustomerAsync(CustomerVM customer)
        {
            bool result = await _customerBL.AddCustomerAsync(customer);
            if (result)
            {
                return Ok();
            }
            return BadRequest();
        }

        #endregion
    }
}
