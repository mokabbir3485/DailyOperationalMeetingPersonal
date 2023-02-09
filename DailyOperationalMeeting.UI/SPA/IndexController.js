app.controller("IndexController", function ($scope, $cookieStore, $route, $templateCache, $window, MyService, $http, $filter) {
    load();
    //$scope.LoginUser = $cookieStore.get('LoginUser');
    //var UserData = sessionStorage.getItem("UserDataSession");
    //if (UserData != null) {
    //    $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    //}
    function load() {
        $('.note-popover').css("display", "none");
        //$scope.LoginUser = [];
        $scope.NoticeList = [];
        $scope.addToCartData = [];
        $scope.UnreadMessageNo = 0;
        //All menu control hidden default ----Start
        $('.note-popover').css("display", "none");
       
        $scope.LoginView = "menuViewHide";
        $scope.RegisterView = "menuViewHide";
      

        ///======= Admin==================

        $scope.TaskAssignerView = "menuViewHide";
        $scope.MyTaskView = "menuViewHide";
        $scope.ReportingView = "menuViewHide";
        $scope.InboxView = "menuViewHide";
        $scope.MeetingMinutesView = "menuViewHide";


        $("#DashboardView").attr("hidden", true);
        $("#MyTaskView").attr("hidden", true);
        $("#ReportingView").attr("hidden", true);
        $("#InboxView").attr("hidden", true);
        $("#MeetingMinutesView").attr("hidden", true);



        
        $scope.ApproveRegView = "menuViewHide";


        $scope.UserRoleView = "menuViewHide";

        $scope.UserManageView = "menuViewHide";


        //All menu control hidden default ----End
       
    }
    //$scope.profile = function () {
    //    $("#Profile").addClass("show");
    //}
    GetUser(); //Get logged in user Info from cookies
    
    function ViewRole() {
        if ($scope.LoginUser != undefined) {
            if ($scope.LoginUser.username == 'duser') {
                //$("#User").attr("hidden", true);
                //$("#Care").attr("hidden", true);
                $(".left-sidenav").show();


            } else if ($scope.LoginUser.username == 'sadmin') {
                $(".left-sidenav").show();
            } else {
                $("#DailyMeeting").attr("hidden", true);
                $("#User").attr("hidden", true);
                $("#Care").attr("hidden", true);

            }
        }
        

    }
    $scope.Home = function () {
        window.location = '/Home/LandingPage#/LandingPage';
    }
    $scope.ReloadPage = function () {
        //$templateCache.removeAll();
        var currentPageTemplate = $route.current.templateUrl;
        console.log(currentPageTemplate);
        $templateCache.remove(currentPageTemplate);
        $window.location.reload();
    }
    function GetUser() {
        //$scope.LoginUser = $cookieStore.get('UserData');
        var login = sessionStorage.getItem("UserDataSession");
        if (login != null) {
            $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
        }
        //ViewRole();
        //$scope.UserId = $scope.LoginUser.UserId;
        //$scope.UserName = $scope.LoginUser.Username;
        //$scope.RoleId = $scope.LoginUser.RoleId;
        //$scope.RoleName = $scope.LoginUser.RoleName;
        if ($scope.LoginUser != undefined) {
            GetPermissionByRoleId($scope.RoleId);
        }
        
    }

    function GetPermissionByRoleId(roleId) {
        
        if ($scope.LoginUser.username == 'sadmin') {
            var data = [
                { ScreenName: 'Dashboard' },
                { ScreenName: 'My Task' },
                { ScreenName: 'Inbox' },
                { ScreenName: 'Reporting' },
                { ScreenName: 'Meeting Minutes' }
            ]
        } else {
            var data = [
                { ScreenName: 'Dashboard' },
                { ScreenName: 'My Task' },
                { ScreenName: 'Inbox' }
            ]
        }

        angular.forEach(data, function (aPermission) {
            $scope.LoginScreenName = 'Login'
            if ($scope.LoginScreenName == "Login" && true) {
                $scope.LoginView = "menuViewShow";
                sessionStorage.setItem("LoginPermission", 'true');

            }

            $scope.RegisterScreenName = 'Register'
            if ($scope.RegisterScreenName == "Register" && true) {
                $scope.RegisterView = "menuViewShow";
                sessionStorage.setItem("RegisterPermission", 'true');

            }

            if (aPermission.ScreenName == "TaskAssigner" && true) {
                $scope.TaskAssigner = "menuViewShow";
                sessionStorage.setItem("TaskAssignerPermission", 'true');

            }
            if (aPermission.ScreenName == "Dashboard" && true) {
                $("#DashboardView").attr("hidden", false);
                sessionStorage.setItem("DashboardPermission", 'true');

            }
            if (aPermission.ScreenName == "My Task" && true) {
                $("#MyTaskView").attr("hidden", false);
                sessionStorage.setItem("MyTaskPermission", 'true');

            }
            if (aPermission.ScreenName == "Inbox" && true) {
                $("#InboxView").attr("hidden", false);
                sessionStorage.setItem("InboxPermission", 'true');

            }
            if (aPermission.ScreenName == "Reporting" && true) {
                $("#ReportingView").attr("hidden", false);
                sessionStorage.setItem("ReportingPermission", 'true');

            }
            if (aPermission.ScreenName == "Meeting Minutes" && true) {
                $("#MeetingMinutesView").attr("hidden", false);
                sessionStorage.setItem("MeetingMinutesPermission", 'true');

            }
        })
        

        

    }



    $scope.SignOut = function () {
        //$scope.User = $cookieStore.get('UserData');
        var login = sessionStorage.getItem("UserDataSession");
        if (login != null) {
            $scope.User = JSON.parse(sessionStorage.UserDataSession);
        }
        //sessionStorage.setItem('UserData', null);
        sessionStorage.setItem("UserDataSession", null);


        window.location = '/Home/Login#/';
    }
});
