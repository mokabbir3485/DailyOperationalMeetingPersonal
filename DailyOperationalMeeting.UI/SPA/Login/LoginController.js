app.controller("LoginController", function ($scope, $cookieStore, $http) {
    //var UserData = sessionStorage.getItem("UserDataSession");
    //if (UserData != null) {
    //    $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    //}
    $scope.LoginUser = {};
    
    $scope.name = "Abir";
    $scope.Login = function () {
        $scope.LoginUser.username = $scope.username;
        $scope.LoginUser.UserPassword = $scope.UserPassword;
        //$cookieStore.put('LoginUser', $scope.username);
        sessionStorage.setItem("UserDataSession", JSON.stringify($scope.LoginUser));
        //if ($scope.username == 'Admin') {
        //    window.location = '/Home/Index#/AdminDashboard';
        //}else if ($scope.username == 'User') {
        //    window.location = '/Home/Index#/UserDashboard';
        //}else if ($scope.username == 'duser') {
        //    window.location = '/Home/Index#/MyTask';
        //} else if ($scope.username == 'sadmin') {
        //    window.location = '/Home/Index#/MeetingMinutes';
        //}


        $http({
            url: '/Login/GetLoginStatus?user_name=' + $scope.username + '&password=' + $scope.UserPassword,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.LoginStatusList = data;
            if ($scope.LoginStatusList.length > 0) {
                if ($scope.LoginStatusList[0].status == true) {
                    //toastr.success('Login Successfull.');
                    window.location = '/Home/Index#/Dashboard';
                } 
            } else {
                toastr.error('Invalid Login Information!!!');
            }
            
        });
       
    }


    $scope.PasswordIcon = "fa fa-eye-slash";
    $scope.InputType = "password";
    $scope.PasswordHideAndShow = function () {

        if ($scope.UserPassword != null) {
            if ($scope.InputType == 'password') {
                $scope.InputType = "text";
                $scope.PasswordIcon = 'fa fa-eye';
                //$scope.isShowIconPassword = false;
            } else {
                $scope.InputType = 'password';
                $scope.PasswordIcon = "fa fa-eye-slash";
                // $scope.isShowIconPassword = false;
                //$scope.showHideClass = 'glyphicon glyphicon-eye-open';

            }
        }
    }

    //$scope.PasswordConfrimValidate = function () {
    //    if ($scope.UserConfrimPassword != $scope.UserPassword) {
    //        $scope.UserConfrimPassword = "";
    //        $scope.PasswordIcon = "fa fa-eye-slash";
    //        toastr.error("Password are not Matched");
    //    }
    //}
})