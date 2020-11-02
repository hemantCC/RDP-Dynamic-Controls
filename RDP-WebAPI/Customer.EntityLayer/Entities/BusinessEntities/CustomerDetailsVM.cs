using System;
using System.Collections.Generic;
using System.Text;

namespace Customer.EntityLayer.Entities.BusinessEntities
{
    public class CustomerDetailsVM
    {
        public int Id { get; set; }
        public string CustomerNumber { get; set; }
        public string Name { get; set; }
        public string VAT { get; set; }
        public DateTime? LastVisit { get; set; }
        public string SalesConsultant { get; set; }
        public string MatchCode { get; set; }
        public string Type { get; set; }

    }
}
