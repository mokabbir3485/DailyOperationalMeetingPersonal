using System;
using System.Collections.Generic;
using System.Data;
using DbExecutor;
using SecurityEntity;

namespace SecurityDAL
{
    public class MeetingMinutesDAO
    {
        private static volatile MeetingMinutesDAO instance;
        private static readonly object lockObj = new object();

        private readonly DBExecutor dbExecutor;

        public MeetingMinutesDAO()
        {
            //dbExecutor = DBExecutor.GetInstanceThreadSafe;
            dbExecutor = new DBExecutor();
        }

        public static MeetingMinutesDAO GetInstanceThreadSafe
        {
            get
            {
                if (instance == null)
                    lock (lockObj)
                    {
                        if (instance == null) instance = new MeetingMinutesDAO();
                    }

                return instance;
            }
        }

        public static MeetingMinutesDAO GetInstance()
        {
            if (instance == null) instance = new MeetingMinutesDAO();
            return instance;
        }

        public Int64 AddMeetingMinutes(MeetingMinutes MeetingMinutes)
        {
            Int64 ret = 0;
            try
            {
                var colparameters = new Parameters[13]
                {
                    new Parameters("@task_type_id", MeetingMinutes.task_type_id, DbType.Int64,
                        ParameterDirection.Input),
                    new Parameters("@secretary_pin", MeetingMinutes.secretary_pin, DbType.Int64,
                        ParameterDirection.Input),
                    new Parameters("@employee_pin", MeetingMinutes.employee_pin, DbType.Int64,
                        ParameterDirection.Input),
                    new Parameters("@priority_id", MeetingMinutes.priority_id, DbType.Int64,
                        ParameterDirection.Input),
                     new Parameters("@meeting_reference", MeetingMinutes.meeting_reference, DbType.String,
                        ParameterDirection.Input),
                     new Parameters("@agenda_item", MeetingMinutes.agenda_item, DbType.String,
                        ParameterDirection.Input),
                     new Parameters("@discussion_point", MeetingMinutes.discussion_point, DbType.String,
                        ParameterDirection.Input),
                     new Parameters("@venue", MeetingMinutes.venue, DbType.String,
                        ParameterDirection.Input),
                     new Parameters("@actions", MeetingMinutes.actions, DbType.String,
                        ParameterDirection.Input),
                     new Parameters("@meeting_date", MeetingMinutes.meeting_date, DbType.DateTime,
                        ParameterDirection.Input),
                     new Parameters("@duedate", MeetingMinutes.duedate, DbType.DateTime,
                        ParameterDirection.Input),
                     new Parameters("@start_timeStr", MeetingMinutes.start_timeStr, DbType.String,
                        ParameterDirection.Input),
                     new Parameters("@end_timeStr", MeetingMinutes.end_timeStr, DbType.String,
                        ParameterDirection.Input)

                    
                };
                dbExecutor.ManageTransaction(TransactionType.Open);
                ret = dbExecutor.ExecuteScalar64(true, CommandType.StoredProcedure, "task_Create",
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
        public Int64 AddDepartment(Department Department)
        {
            Int64 ret = 0;
            try
            {
                var colparameters = new Parameters[2]
                {
                    new Parameters("@dept_id", Department.dept_id, DbType.Int32,
                        ParameterDirection.Input),
                    new Parameters("@task_id", Department.task_id, DbType.Int64,
                        ParameterDirection.Input)

                    
                };
                dbExecutor.ManageTransaction(TransactionType.Open);
                ret = dbExecutor.ExecuteScalar32(true, CommandType.StoredProcedure, "task_department_Create",
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
        public Int64 AddApologies(MeetingMinutes MeetingMinutes)
        {
            Int64 ret = 0;
            try
            {
                var colparameters = new Parameters[2]
                {
                    new Parameters("@apology_pin", MeetingMinutes.apology_pin, DbType.Int32,
                        ParameterDirection.Input),
                    new Parameters("@task_id", MeetingMinutes.task_id, DbType.Int64,
                        ParameterDirection.Input)

                    
                };
                dbExecutor.ManageTransaction(TransactionType.Open);
                ret = dbExecutor.ExecuteScalar32(true, CommandType.StoredProcedure, "task_apologies_Create",
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
        public Int64 AddAttendees(MeetingMinutes MeetingMinutes)
        {
            Int64 ret = 0;
            try
            {
                var colparameters = new Parameters[2]
                {
                    new Parameters("@attendee_pin", MeetingMinutes.attendee_pin, DbType.Int32,
                        ParameterDirection.Input),
                    new Parameters("@task_id", MeetingMinutes.task_id, DbType.Int64,
                        ParameterDirection.Input)

                    
                };
                dbExecutor.ManageTransaction(TransactionType.Open);
                ret = dbExecutor.ExecuteScalar32(true, CommandType.StoredProcedure, "task_attendee_Create",
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

        public List<MeetingMinutes> GetCurrentTask(DateTime MeetingDate)
        {
            try
            {
                var CurrentTaskList = new List<MeetingMinutes>();
                var colparameters = new Parameters[1]
                {
                    new Parameters("@MeetingDate", MeetingDate, DbType.DateTime, ParameterDirection.Input)
                };
                CurrentTaskList = dbExecutor.FetchData<MeetingMinutes>(CommandType.StoredProcedure,
                    "task_GetByDate", colparameters);

                return CurrentTaskList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<MeetingMinutes> GetApologiesByTaskId(Int64 task_id)
        {
            try
            {
                var ApologiesList = new List<MeetingMinutes>();
                var colparameters = new Parameters[1]
                {
                    new Parameters("@task_id", task_id, DbType.Int64, ParameterDirection.Input)
                };
                ApologiesList = dbExecutor.FetchData<MeetingMinutes>(CommandType.StoredProcedure,
                    "apology_employees_GetByTaskId", colparameters);

                return ApologiesList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<MeetingMinutes> GetAttendeesByTaskId(Int64 task_id)
        {
            try
            {
                var AttendeesList = new List<MeetingMinutes>();
                var colparameters = new Parameters[1]
                {
                    new Parameters("@task_id", task_id, DbType.Int64, ParameterDirection.Input)
                };
                AttendeesList = dbExecutor.FetchData<MeetingMinutes>(CommandType.StoredProcedure,
                    "attendee_employees_GetByTaskId", colparameters);

                return AttendeesList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<MeetingMinutes> GetAllEmployee()
        {
            try
            {
                var CurrentTaskList = new List<MeetingMinutes>();
                //var colparameters = new Parameters[1]
                //{
                //    new Parameters("@MeetingDate", MeetingDate, DbType.Int64, ParameterDirection.Input)
                //};
                CurrentTaskList = dbExecutor.FetchData<MeetingMinutes>(CommandType.StoredProcedure,
                    "employee_Get", null);

                return CurrentTaskList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<MeetingMinutes> GetAllDepartment()
        {
            try
            {
                var DepartmentList = new List<MeetingMinutes>();
                //var colparameters = new Parameters[1]
                //{
                //    new Parameters("@MeetingDate", MeetingDate, DbType.Int64, ParameterDirection.Input)
                //};
                DepartmentList = dbExecutor.FetchData<MeetingMinutes>(CommandType.StoredProcedure,
                    "department_Get", null);

                return DepartmentList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<MeetingMinutes> GetAllPriority()
        {
            try
            {
                var PriorityList = new List<MeetingMinutes>();
                //var colparameters = new Parameters[1]
                //{
                //    new Parameters("@MeetingDate", MeetingDate, DbType.Int64, ParameterDirection.Input)
                //};
                PriorityList = dbExecutor.FetchData<MeetingMinutes>(CommandType.StoredProcedure,
                    "task_priority_Get", null);

                return PriorityList;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
