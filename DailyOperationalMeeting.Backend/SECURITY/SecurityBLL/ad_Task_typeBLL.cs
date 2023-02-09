using System;
using System.Collections.Generic;
using SecurityDAL;
using SecurityEntity;

namespace SecurityBLL
{
    public class ad_Task_typeBLL
    {
        public ad_Task_typeBLL()
        {
            //ad_EmployeeDAO = ad_Employee.GetInstanceThreadSafe;
            ad_Task_typeDAO = new ad_Task_typeDAO();
        }

        public ad_Task_typeDAO ad_Task_typeDAO { get; set; }

        public List<ad_Task_type> GetAll()
        {
            try
            {
                return ad_Task_typeDAO.GetAll();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
