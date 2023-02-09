using System;
using System.Collections.Generic;
using SecurityDAL;
using SecurityEntity;


namespace SecurityBLL
{
    public class MeetingMinutesBLL
    {
        public MeetingMinutesBLL()
        {
            //MeetingMinutesDAO = ad_Employee.GetInstanceThreadSafe;
            MeetingMinutesDAO = new MeetingMinutesDAO();
        }

        public MeetingMinutesDAO MeetingMinutesDAO { get; set; }

        public Int64 AddMeetingMinutes(MeetingMinutes MeetingMinutes)
        {
            try
            {
                return MeetingMinutesDAO.AddMeetingMinutes(MeetingMinutes);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Int64 AddDepartment(Department Department)
        {
            try
            {
                return MeetingMinutesDAO.AddDepartment(Department);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Int64 AddApologies(MeetingMinutes MeetingMinutes)
        {
            try
            {
                return MeetingMinutesDAO.AddApologies(MeetingMinutes);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public Int64 AddAttendees(MeetingMinutes MeetingMinutes)
        {
            try
            {
                return MeetingMinutesDAO.AddAttendees(MeetingMinutes);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        public List<MeetingMinutes> GetCurrentTask(DateTime MeetingDate)
        {
            try
            {
                return MeetingMinutesDAO.GetCurrentTask(MeetingDate);
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
                return MeetingMinutesDAO.GetApologiesByTaskId(task_id);
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
                return MeetingMinutesDAO.GetAttendeesByTaskId(task_id);
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
                return MeetingMinutesDAO.GetAllEmployee();
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
                return MeetingMinutesDAO.GetAllDepartment();
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
                return MeetingMinutesDAO.GetAllPriority();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
