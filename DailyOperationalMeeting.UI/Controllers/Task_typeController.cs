using SecurityBLL;
using SecurityEntity;
using System;
using System.Web.Mvc;
using DbExecutor;

namespace DailyOperationalMeeting.UI.Controllers
{
    public class Task_typeController : Controller
    {
        // GET: Task_type
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllTask_type()
        {
            try
            {
                var list = Facade.ad_Task_typeBLL.GetAll();
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "Task_typeController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
    }
}