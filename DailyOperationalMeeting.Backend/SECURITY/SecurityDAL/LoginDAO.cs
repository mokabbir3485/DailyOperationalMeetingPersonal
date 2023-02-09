using System;
using System.Collections.Generic;
using System.Data;
using DbExecutor;
using SecurityEntity;

namespace SecurityDAL
{
    public class LoginDAO
    {
        private static volatile LoginDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public LoginDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static LoginDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new LoginDAO();
                    }

                return instance;
            }
        }

        public static LoginDAO GetInstance()
        {
            if (instance == null) instance = new LoginDAO();
            return instance;
        }

        public List<Login> GetLoginStatus(string user_name, string password)
        {
            try
            {
                var LoginList = new List<Login>();
                var colparameters = new Parameters[2]
                {
                    new Parameters("@user_name", user_name, DbType.String, ParameterDirection.Input),
                    new Parameters("@password", password, DbType.String, ParameterDirection.Input),
                };
                LoginList = dbExecutor.FetchData<Login>(CommandType.StoredProcedure,
                    "UserLogin", colparameters);

                return LoginList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
