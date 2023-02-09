using System;
using System.Collections.Generic;
using System.Data;
using DbExecutor;
using SecurityEntity;

namespace SecurityDAL
{
    public class ad_Task_typeDAO
    {
        private static volatile ad_Task_typeDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public ad_Task_typeDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static ad_Task_typeDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new ad_Task_typeDAO();
                    }

                return instance;
            }
        }

        public static ad_Task_typeDAO GetInstance()
        {
            if (instance == null) instance = new ad_Task_typeDAO();
            return instance;
        }
        public List<ad_Task_type> GetAll()
        {
            try
            {
                var ad_task_typeLst = new List<ad_Task_type>();
                //var colparameters = new Parameters[1]
                //{
                //    new Parameters("@EmployeeId", EmployeeId, DbType.Int32, ParameterDirection.Input)
                //};
                ad_task_typeLst =
                    dbExecutor.FetchData<ad_Task_type>(CommandType.StoredProcedure, "task_type_Get", null);
                return ad_task_typeLst;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
