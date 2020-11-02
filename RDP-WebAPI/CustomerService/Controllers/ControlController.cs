using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using System.Threading.Tasks;
using Customer.BusinessLayer.Interfaces;
using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CustomerService.Controllers
{
    /// <summary>
    /// The class handles cotrol based actions
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ControllerBase" />
    [Route("api/[controller]")]
    [ApiController]
    public class ControlController : ControllerBase
    {

        #region Variables        
        /// <summary>
        /// The control bl
        /// </summary>
        private readonly IControlManager _controlBL;

        #endregion

        #region Constructor        
        /// <summary>
        /// Initializes a new instance of the <see cref="ControlController"/> class.
        /// </summary>
        /// <param name="_controlBL">The control bl.</param>
        public ControlController(IControlManager _controlBL)
        {
            this._controlBL = _controlBL;
        }

        #endregion

        #region Public Methods

        /// <summary>
        /// Gets all the controls with dropdown values asynchronous.
        /// </summary>
        /// <returns>IActionResult</returns>
        [HttpGet]
        [Route("GetControls")]
        public async Task<IActionResult> GetControlsAsync()
        {
            List<ControlVM> controls = await _controlBL.GetControls();
            if(controls == null)
            {
                return NotFound("No Records Found");
            }
            return Ok(controls);
        }

        #endregion

    }
}
