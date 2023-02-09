using System;
using System.Collections.Generic;
using SecurityDAL;
using SecurityEntity;

namespace SecurityBLL
{
    public class InboxBLL
    {
        public InboxBLL()
        {
            //LoginDAO = ad_Employee.GetInstanceThreadSafe;
            InboxDAO = new InboxDAO();
        }

        public InboxDAO InboxDAO { get; set; }
        public List<Inbox> GetInboxMessage(Int32? dept_id = null)
        {
            try
            {
                return InboxDAO.GetInboxMessage(dept_id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
