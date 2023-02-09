using SecurityBLL;
using SecurityEntity;
using System;
using System.Web.Mvc;
using DbExecutor;
using System.Collections.Generic;

namespace DailyOperationalMeeting.UI.Controllers
{

    public class LoginController : Controller
    {
        [HttpGet]
        public JsonResult GetLoginStatus(string user_name, string password)
        {
            try
            {
                var LoginStatusList = Facade.LoginBLL.GetLoginStatus(user_name, password);
                return Json(LoginStatusList, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {

                error_Log error = new error_Log();
                error.ErrorMessage = ex.Message;
                error.ErrorType = ex.GetType().ToString();
                error.FileName = "LoginController";
                new ErrorLogController().CreateErrorLog(error);
                return Json(null, JsonRequestBehavior.AllowGet);
            }

        }
    }
}