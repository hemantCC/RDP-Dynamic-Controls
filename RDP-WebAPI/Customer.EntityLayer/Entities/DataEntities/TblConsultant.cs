using System;
using System.Collections.Generic;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class TblConsultant
    {
        public int Id { get; set; }
        public string SalesConsultant { get; set; }
        public string AfterSalesConsultant { get; set; }
        public string PartsSalesAssistance { get; set; }
        public int? Customer { get; set; }

        public virtual TblCustomer CustomerNavigation { get; set; }
    }
}
