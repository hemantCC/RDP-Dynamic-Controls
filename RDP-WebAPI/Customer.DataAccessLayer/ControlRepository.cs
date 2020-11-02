using Customer.DataAccessLayer.Interfaces;
using Customer.EntityLayer.Entities.BusinessEntities;
using Customer.EntityLayer.Entities.DataEntities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Customer.DataAccessLayer
{
    public class ControlRepository : IControlRepository
    {

        #region Variables

        private readonly DbRDPContext _context;

        #endregion


        #region Constructor

        public ControlRepository(DbRDPContext _context)
        {
            this._context = _context;
        }

        #endregion

        #region Public Methods


        /// <summary>
        /// This method returns  all the controls 
        /// with dropdown values if any
        /// </summary>
        /// <returns></returns>
        public async Task<List<TblControls>> GetControls()
        {
            List<TblControls> controls = await _context.TblControls.Where(x => x.IsVisible == true).Include(x => x.ControlTypeNavigation).Include(x => x.ModuleNavigation).ToListAsync();
            return controls;
        }
        #endregion


    }
}
