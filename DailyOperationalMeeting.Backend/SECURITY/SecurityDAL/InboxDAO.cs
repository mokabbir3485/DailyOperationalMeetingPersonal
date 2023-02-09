using System;
using System.Collections.Generic;
using System.Data;
using DbExecutor;
using SecurityEntity;


namespace SecurityDAL
{
    public class InboxDAO
    {
        private static volatile InboxDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public InboxDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static InboxDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new InboxDAO();
                    }

                return instance;
            }
        }

        public static InboxDAO GetInstance()
        {
            if (instance == null) instance = new InboxDAO();
            return instance;
        }

        public List<Inbox> GetInboxMessage(Int32? dept_id = null)
        {
            try
            {
                var InboxMessageList = new List<Inbox>();
                var colparameters = new Parameters[1]
                {
                    new Parameters("@dept_id", dept_id, DbType.Int32, ParameterDirection.Input)
                };
                InboxMessageList = dbExecutor.FetchData<Inbox>(CommandType.StoredProcedure,
                    "sp_department_inbox", colparameters);

                return InboxMessageList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
