using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Customer.EntityLayer.Entities.DataEntities
{
    public partial class DbRDPContext : DbContext
    {
        public DbRDPContext()
        {
        }

        public DbRDPContext(DbContextOptions<DbRDPContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblConsultant> TblConsultant { get; set; }
        public virtual DbSet<TblControlType> TblControlType { get; set; }
        public virtual DbSet<TblControls> TblControls { get; set; }
        public virtual DbSet<TblCustomer> TblCustomer { get; set; }
        public virtual DbSet<TblFainformation> TblFainformation { get; set; }
        public virtual DbSet<TblMaster1> TblMaster1 { get; set; }
        public virtual DbSet<TblMaster2> TblMaster2 { get; set; }
        public virtual DbSet<TblModule> TblModule { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=(LocalDb)\\MSSQLLocalDB;Database=DbRDP;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblConsultant>(entity =>
            {
                entity.HasIndex(e => e.AfterSalesConsultant)
                    .HasName("IX_TblConsultant_AfterSalesConsultantId");

                entity.HasIndex(e => e.PartsSalesAssistance)
                    .HasName("IX_TblConsultant_PartsSalesAssistanceId");

                entity.HasIndex(e => e.SalesConsultant)
                    .HasName("IX_TblConsultant_SalesConsultantId");

                entity.Property(e => e.AfterSalesConsultant).HasMaxLength(50);

                entity.Property(e => e.PartsSalesAssistance).HasMaxLength(50);

                entity.Property(e => e.SalesConsultant).HasMaxLength(50);

                entity.HasOne(d => d.CustomerNavigation)
                    .WithMany(p => p.TblConsultant)
                    .HasForeignKey(d => d.Customer)
                    .HasConstraintName("FK_TblConsultant_TblCustomer");
            });

            modelBuilder.Entity<TblControlType>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20);
            });

            modelBuilder.Entity<TblControls>(entity =>
            {
                entity.Property(e => e.EntityName).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.HasOne(d => d.ControlTypeNavigation)
                    .WithMany(p => p.TblControls)
                    .HasForeignKey(d => d.ControlType)
                    .HasConstraintName("FK_TblControls_TblControlType");

                entity.HasOne(d => d.ModuleNavigation)
                    .WithMany(p => p.TblControls)
                    .HasForeignKey(d => d.Module)
                    .HasConstraintName("FK_TblControls_TblModule");
            });

            modelBuilder.Entity<TblCustomer>(entity =>
            {
                entity.Property(e => e.CustomerNumber).HasMaxLength(20);

                entity.Property(e => e.LastVisit).HasColumnType("date");
            });

            modelBuilder.Entity<TblFainformation>(entity =>
            {
                entity.ToTable("TblFAInformation");

                entity.HasIndex(e => e.BankCollection)
                    .HasName("IX_TblFAInformation_BankCollectionId");

                entity.HasIndex(e => e.CreditBlocking)
                    .HasName("IX_TblFAInformation_CreditBlockingId");

                entity.HasIndex(e => e.MethodOfGeneralPayment)
                    .HasName("IX_TblFAInformation_MethodOfGeneralPaymentId");

                entity.HasIndex(e => e.MethodOfVehiclePayment)
                    .HasName("IX_TblFAInformation_MethodOfVehiclePaymentId");

                entity.HasIndex(e => e.Solvency)
                    .HasName("IX_TblFAInformation_SolvencyId");

                entity.HasIndex(e => e.TermsOfGeneralPayment)
                    .HasName("IX_TblFAInformation_TermsOfGeneralPaymentId");

                entity.HasIndex(e => e.TermsOfVehiclePayment)
                    .HasName("IX_TblFAInformation_TermsOfVehiclePaymentId");

                entity.Property(e => e.BankCollection).HasMaxLength(50);

                entity.Property(e => e.CreditBlocking).HasMaxLength(50);

                entity.Property(e => e.MethodOfGeneralPayment).HasMaxLength(50);

                entity.Property(e => e.MethodOfVehiclePayment).HasMaxLength(50);

                entity.Property(e => e.Solvency).HasMaxLength(50);

                entity.Property(e => e.TermsOfGeneralPayment).HasMaxLength(50);

                entity.Property(e => e.TermsOfVehiclePayment).HasMaxLength(50);

                entity.HasOne(d => d.CustomerNavigation)
                    .WithMany(p => p.TblFainformation)
                    .HasForeignKey(d => d.Customer)
                    .HasConstraintName("FK_TblFAInformation_TblCustomer");
            });

            modelBuilder.Entity<TblMaster1>(entity =>
            {
                entity.HasIndex(e => e.AddressOrigin)
                    .HasName("IX_TblMaster1_AddressOriginId");

                entity.HasIndex(e => e.Country)
                    .HasName("IX_TblMaster1_CountryId");

                entity.HasIndex(e => e.CustomerState)
                    .HasName("IX_TblMaster1_CustomerStateId");

                entity.HasIndex(e => e.Salutation)
                    .HasName("IX_TblMaster1_SalutationId");

                entity.HasIndex(e => e.Ta)
                    .HasName("IX_TblMaster1_TaId");

                entity.HasIndex(e => e.Tb)
                    .HasName("IX_TblMaster1_TbId");

                entity.Property(e => e.AddressOrigin).HasMaxLength(50);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.CustomerState).HasMaxLength(50);

                entity.Property(e => e.Salutation).HasMaxLength(50);

                entity.Property(e => e.Ta).HasMaxLength(50);

                entity.Property(e => e.Tb).HasMaxLength(50);

                entity.HasOne(d => d.CustomerNavigation)
                    .WithMany(p => p.TblMaster1)
                    .HasForeignKey(d => d.Customer)
                    .HasConstraintName("FK_TblMaster1_TblCustomer");
            });

            modelBuilder.Entity<TblMaster2>(entity =>
            {
                entity.HasIndex(e => e.CustomerCategory)
                    .HasName("IX_TblMaster2_CustomerCategoryId");

                entity.HasIndex(e => e.LegalForm)
                    .HasName("IX_TblMaster2_LegalFormId");

                entity.Property(e => e.CustomerCategory).HasMaxLength(50);

                entity.Property(e => e.CustomerType).HasMaxLength(50);

                entity.Property(e => e.LegalForm).HasMaxLength(50);

                entity.Property(e => e.Vat)
                    .HasColumnName("VAT")
                    .HasMaxLength(50);

                entity.HasOne(d => d.CustomerNavigation)
                    .WithMany(p => p.TblMaster2)
                    .HasForeignKey(d => d.Customer)
                    .HasConstraintName("FK_TblMaster2_TblCustomer");
            });

            modelBuilder.Entity<TblModule>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
