using System;
using System.Collections.Generic;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class TblMaster2
    {
        public int Id { get; set; }
        public string CustomerInformation { get; set; }
        public string CustomerCategory { get; set; }
        public string LegalForm { get; set; }
        public string Email { get; set; }
        public string ReferenceText { get; set; }
        public string CustomerType { get; set; }
        public string Vat { get; set; }
        public int? Customer { get; set; }

        public virtual TblCustomer CustomerNavigation { get; set; }
    }
}
