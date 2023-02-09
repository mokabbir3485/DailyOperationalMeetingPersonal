using SecurityBLL;
using SecurityEntity;
using System;
using System.Web.Mvc;
using DbExecutor;
using System.Collections.Generic;

namespace DailyOperationalMeeting.UI.Controllers
{
    public class InboxController : Controller
    {
        [HttpGet]
        public JsonResult GetInboxMessage(Int32? dept_id = null)
        {
            try
            {
                var InboxMessageList = Facade.InboxBLL.GetInboxMessage(dept_id);
                return Json(InboxMessageList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "InboxController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
    }
}