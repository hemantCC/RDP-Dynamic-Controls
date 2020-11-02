using System;
using System.Collections.Generic;
using System.Text;

namespace Customer.EntityLayer.Entities.BusinessEntities
{
    public class CustomerVM
    {
        public int Id { get; set; }
        #region Master1 Properties
        public string Salutation { get; set; }
        public string Ta { get; set; }
        public string Tb { get; set; }
        public string SalutationInLetters { get; set; }
        public string FirstName { get; set; }
        public string CustomerName { get; set; }
        public string AdditionalAddress { get; set; }
        public string AdditionalAddress2 { get; set; }
        public string AdditionalAddress3 { get; set; }
        public string MatchCode { get; set; }
        public string Street { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string City { get; set; }
        public DateTime BirthDate { get; set; }
        public string AddressOrigin { get; set; }
        public string CustomerState { get; set; }
        #endregion

        #region Master 2 Properties
        public string CustomerInformation { get; set; }
        public string CustomerCategory { get; set; }
        public string LegalForm { get; set; }
        public string Email { get; set; }
        public string ReferenceText { get; set; }
        public string CustomerType { get; set; }
        public string Vat { get; set; }

        #endregion

        #region FA Information Properties

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

        #endregion

        #region Consultant properties
        public string SalesConsultant { get; set; }
        public string AfterSalesConsultant { get; set; }
        public string PartsSalesAssistance { get; set; }

        #endregion

    }
}
