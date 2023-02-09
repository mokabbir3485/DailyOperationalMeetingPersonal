using SecurityBLL;
using SecurityEntity;
using System;
using System.Web.Mvc;
using DbExecutor;
using System.Collections.Generic;


namespace DailyOperationalMeeting.UI.Controllers
{
    public class MyTaskController : Controller
    {
        // GET: MyTask
        [HttpGet]
        public JsonResult GetMyTaskByDeptId(Int32? dept_id = null)
        {
            try
            {
                var MyTaskList = Facade.MyTaskBLL.GetMyTaskByDeptId(dept_id);
                return Json(MyTaskList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "MyTaskController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }

        public Int64 UpdateMyTask(MyTask MyTask)
        {


            Int64 ret = 0;
            try
            {
                using (System.Transactions.TransactionScope ts = new System.Transactions.TransactionScope())
                {

                    //foreach (var aMyTask in MyTask)
                    //{
                        if (MyTask.task_remarks == null) { MyTask.task_remarks = ""; }
                        ret = Facade.MyTaskBLL.UpdateMyTask(MyTask);
                    //}
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
                error.FileName = "MyTaskController";
                new ErrorLogController().CreateErrorLog(error);
            }

            return ret;
        }

    }
}