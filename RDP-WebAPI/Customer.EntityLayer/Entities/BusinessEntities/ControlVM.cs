using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Customer.EntityLayer.Entities.BusinessEntities
{
    public class ControlVM
    {
        public string Name { get; set; }
        public string EntityName { get; set; }
        public bool? IsRequired { get; set; }
        public string ControlType { get; set; }
        public string Module { get; set; }
        public string[] DropdownValues { get; set; }
    }
    
}
