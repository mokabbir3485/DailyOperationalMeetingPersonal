using DbExecutor;
using SecurityDAL;
using SecurityBLL;

namespace SecurityBLL
{
    public static class Facade
    {
        public static s_RoleBLL Role { get { return new s_RoleBLL(); } }

        public static s_ScreenBLL Screen { get { return new s_ScreenBLL(); } }
        public static s_PermissionBLL Permission { get { return new s_PermissionBLL(); } }
        public static s_PermissionDetailBLL PermissionDetail { get { return new s_PermissionDetailBLL(); } }

        public static ad_EmployeeBLL Employee { get { return new ad_EmployeeBLL(); } }
        public static ad_Task_typeBLL ad_Task_typeBLL { get { return new ad_Task_typeBLL(); } }
        public static MeetingMinutesBLL MeetingMinutesBLL { get { return new MeetingMinutesBLL(); } }
        public static MyTaskBLL MyTaskBLL { get { return new MyTaskBLL(); } }
        public static LoginBLL LoginBLL { get { return new LoginBLL(); } }
        public static InboxBLL InboxBLL { get { return new InboxBLL(); } }

        public static s_ScreenLockBLL ScreenLock { get { return new s_ScreenLockBLL(); } }

        public static error_LogBLL ErrorLog { get { return new error_LogBLL(); } }

        public static s_ScreenDetailBLL ScreenDetail { get { return new s_ScreenDetailBLL(); } }

    }
}