using System;
using System.Collections.Generic;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class TblMaster1
    {
        public int Id { get; set; }
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
        public DateTime DateOfBirth { get; set; }
        public string AddressOrigin { get; set; }
        public string CustomerState { get; set; }
        public int? Customer { get; set; }

        public virtual TblCustomer CustomerNavigation { get; set; }
    }
}
