using System;
using System.Collections.Generic;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class TblControls
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsRequired { get; set; }
        public int? ControlType { get; set; }
        public int? Module { get; set; }
        public bool? IsVisible { get; set; }
        public string EntityName { get; set; }
        public string DropdownValues { get; set; }

        public virtual TblControlType ControlTypeNavigation { get; set; }
        public virtual TblModule ModuleNavigation { get; set; }
    }
}
