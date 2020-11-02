using System;
using System.Collections.Generic;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class TblCustomer
    {
        public TblCustomer()
        {
            TblConsultant = new HashSet<TblConsultant>();
            TblFainformation = new HashSet<TblFainformation>();
            TblMaster1 = new HashSet<TblMaster1>();
            TblMaster2 = new HashSet<TblMaster2>();
        }

        public int Id { get; set; }
        public string CustomerNumber { get; set; }
        public DateTime? LastVisit { get; set; }

        public virtual ICollection<TblConsultant> TblConsultant { get; set; }
        public virtual ICollection<TblFainformation> TblFainformation { get; set; }
        public virtual ICollection<TblMaster1> TblMaster1 { get; set; }
        public virtual ICollection<TblMaster2> TblMaster2 { get; set; }
    }
}
