using SecurityBLL;
using SecurityEntity;
using System;
using System.Web.Mvc;
using DbExecutor;
using System.Collections.Generic;

namespace DailyOperationalMeeting.UI.Controllers
{
    public class MeetingMinutesController : Controller
    {
        // GET: MeetingMinutes
        [HttpPost]
        public Int64 Save( List<MeetingMinutes> MeetingMinutes, List<MeetingMinutes> Attendees, List<MeetingMinutes> Apologies)
        {
           
            
            Int64 ret = 0;
            try
            {
                using (System.Transactions.TransactionScope ts = new System.Transactions.TransactionScope())
                {

                    foreach (var aMeetingMinutes in MeetingMinutes)
                    {
                        if (aMeetingMinutes.meeting_reference == null) { aMeetingMinutes.meeting_reference = ""; }
                        if (aMeetingMinutes.agenda_item == null) { aMeetingMinutes.agenda_item = ""; }
                        if (aMeetingMinutes.discussion_point == null) { aMeetingMinutes.discussion_point = ""; }
                        if (aMeetingMinutes.venue == null) { aMeetingMinutes.venue = ""; }
                        if (aMeetingMinutes.actions == null) { aMeetingMinutes.actions = ""; }
                        if (aMeetingMinutes.start_timeStr == null) { 
                            aMeetingMinutes.start_timeStr = aMeetingMinutes.start_time.ToString("HH:mm:ss"); 
                        }
                        if (aMeetingMinutes.end_timeStr == null) { 
                            aMeetingMinutes.end_timeStr = aMeetingMinutes.end_time.ToString("HH:mm:ss"); 
                        }

                        ret = Facade.MeetingMinutesBLL.AddMeetingMinutes(aMeetingMinutes);
                        

                        foreach (var aDepartment in aMeetingMinutes.Department)
                        {
                            aDepartment.task_id = ret;
                            Facade.MeetingMinutesBLL.AddDepartment(aDepartment);
                        }

                        foreach (var aApologies in Apologies)
                        {
                            aApologies.task_id = ret;
                            Facade.MeetingMinutesBLL.AddApologies(aApologies);
                        }

                        foreach (var aAttendees in Attendees)
                        {
                            aAttendees.task_id = ret;
                            Facade.MeetingMinutesBLL.AddAttendees(aAttendees);
                        }

                    }
                    if (ret > 0)
                        ts.Complete();
                }
                return ret;
            }
            catch (Exception ex)
            {
                ret = 0;
                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MeetingMinutesController";
                new ErrorLogController().CreateErrorLog(error);
            }

            return ret;
        }

        [HttpGet]
        public JsonResult GetCurrentTask(DateTime MeetingDate)
        {
            try
            { 
                //string date = "";
                //date = MeetingDate.ToString("yyyy-MM-dd");
                var CurrentTaskList = Facade.MeetingMinutesBLL.GetCurrentTask(MeetingDate);
                return Json(CurrentTaskList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MeetingMinutesController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
        [HttpGet]
        public JsonResult GetApologiesByTaskId(Int64 task_id)
        {
            try
            {
                var ApologiesList = Facade.MeetingMinutesBLL.GetApologiesByTaskId(task_id);
                return Json(ApologiesList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MeetingMinutesController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
        [HttpGet]
        public JsonResult GetAttendeesByTaskId(Int64 task_id)
        {
            try
            {
                var AttendeesList = Facade.MeetingMinutesBLL.GetAttendeesByTaskId(task_id);
                return Json(AttendeesList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MeetingMinutesController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }

        [HttpGet]
        public JsonResult GetAllEmployee()
        {
            try
            {
                var EmployeeList = Facade.MeetingMinutesBLL.GetAllEmployee();
                return Json(EmployeeList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MeetingMinutesController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
        [HttpGet]
        public JsonResult GetAllDepartment()
        {
            try
            {
                var DepartmentList = Facade.MeetingMinutesBLL.GetAllDepartment();
                return Json(DepartmentList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MeetingMinutesController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
        [HttpGet]
        public JsonResult GetAllPriority()
        {
            try
            {
                var PriorityList = Facade.MeetingMinutesBLL.GetAllPriority();
                return Json(PriorityList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MeetingMinutesController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }


    }
}