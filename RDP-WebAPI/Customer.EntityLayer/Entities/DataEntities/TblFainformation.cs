using System;
using System.Collections.Generic;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class TblFainformation
    {
        public int Id { get; set; }
        public string MethodOfGeneralPayment { get; set; }
        public int CreditLimit { get; set; }
        public string MethodOfVehiclePayment { get; set; }
        public string CreditBlocking { get; set; }
        public string TermsOfGeneralPayment { get; set; }
        public int OpenBalance { get; set; }
        public string TermsOfVehiclePayment { get; set; }
        public string Solvency { get; set; }
        public int DebtorNumber { get; set; }
        public string BankInstitute { get; set; }
        public string BankCode { get; set; }
        public string AccountNumber { get; set; }
        public string BankCollection { get; set; }
        public int? Customer { get; set; }

        public virtual TblCustomer CustomerNavigation { get; set; }
    }
}
