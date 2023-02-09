using System;
using System.Collections.Generic;
using System.Data;
using DbExecutor;
using SecurityEntity;


namespace SecurityDAL
{
    public class MyTaskDAO
    {
        private static volatile MyTaskDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public MyTaskDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static MyTaskDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new MyTaskDAO();
                    }

                return instance;
            }
        }

        public static MyTaskDAO GetInstance()
        {
            if (instance == null) instance = new MyTaskDAO();
            return instance;
        }
        public List<MyTask> GetMyTaskByDeptId(Int32? dept_id = null)
        {
            try
            {
                var MyTaskList = new List<MyTask>();
                var colparameters = new Parameters[1]
                {
                    new Parameters("@dept_id", dept_id, DbType.Int32, ParameterDirection.Input)
                };
                MyTaskList = dbExecutor.FetchData<MyTask>(CommandType.StoredProcedure,
                    "task_status_GetByDeptId", colparameters);

                return MyTaskList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Int64 UpdateMyTask(MyTask MyTask)
        {
            Int64 ret = 0;
            try
            {
                var colparameters = new Parameters[3]
                {
                    new Parameters("@task_id", MyTask.task_id, DbType.Int64,
                        ParameterDirection.Input),
                    new Parameters("@completion_status_id", MyTask.StatusId, DbType.Int32,
                        ParameterDirection.Input),
                    new Parameters("@task_remarks", MyTask.task_remarks, DbType.String,
                        ParameterDirection.Input)


                };
                dbExecutor.ManageTransaction(TransactionType.Open);
                ret = dbExecutor.ExecuteScalar32(true, CommandType.StoredProcedure, "task_status_Update",
                    colparameters, true);
                dbExecutor.ManageTransaction(TransactionType.Commit);
            }
            catch (DBConcurrencyException except)
            {
                dbExecutor.ManageTransaction(TransactionType.Rollback);
                throw except;
            }
            catch (Exception ex)
            {
                dbExecutor.ManageTransaction(TransactionType.Rollback);
                throw ex;
            }

            return ret;
        }
    }
}
