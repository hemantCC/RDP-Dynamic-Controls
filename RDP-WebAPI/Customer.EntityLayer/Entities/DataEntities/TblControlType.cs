using System;
using System.Collections.Generic;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class TblControlType
    {
        public TblControlType()
        {
            TblControls = new HashSet<TblControls>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<TblControls> TblControls { get; set; }
    }
}
