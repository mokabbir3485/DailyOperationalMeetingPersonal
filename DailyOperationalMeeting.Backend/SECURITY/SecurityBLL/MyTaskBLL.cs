using System;
using System.Collections.Generic;
using SecurityDAL;
using SecurityEntity;


namespace SecurityBLL
{
    public class MyTaskBLL
    {
        public MyTaskBLL()
        {
            MyTaskDAO = new MyTaskDAO();
        }

        public MyTaskDAO MyTaskDAO { get; set; }
        public List<MyTask> GetMyTaskByDeptId(Int32? dept_id = null)
        {
            try
            {
                return MyTaskDAO.GetMyTaskByDeptId(dept_id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Int64 UpdateMyTask(MyTask MyTask)
        {
            try
            {
                return MyTaskDAO.UpdateMyTask(MyTask);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
