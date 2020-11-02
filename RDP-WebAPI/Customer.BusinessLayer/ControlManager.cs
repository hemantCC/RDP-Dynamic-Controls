using Customer.BusinessLayer.Interfaces;
using Customer.DataAccessLayer.Interfaces;
using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customer.BusinessLayer
{
    public class ControlManager : IControlManager
    {

        private readonly IControlRepository _controlRepository;

        public ControlManager(IControlRepository _controlRepository)
        {
            this._controlRepository = _controlRepository;
        }


        public async Task<List<ControlVM>> GetControls()
        {

            List<TblControls> controls = await _controlRepository.GetControls();
            List<ControlVM> controlVMs = new List<ControlVM>();
            foreach(var control in controls)
            {
                string[] dropdownValues = (control.DropdownValues == null) ? new[] {""} : control.DropdownValues.Split(',').ToArray(); 

                ControlVM controlVM = new ControlVM()
                {
                    Name = control.Name,
                    EntityName = control.EntityName,
                    IsRequired = control.IsRequired,
                    ControlType = control.ControlTypeNavigation.Name,
                    Module = control.ModuleNavigation.Name,
                    DropdownValues = dropdownValues
                };
                controlVMs.Add(controlVM);
            }
            return controlVMs;
        }
    }
}
