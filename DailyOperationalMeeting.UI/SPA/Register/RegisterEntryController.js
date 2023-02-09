

app.controller("RegisterEntryController", function ($scope) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.name = "Abir";

    $scope.Register = function () {
       // toastr.success('Your application has been recorded, you will get a response soon.');

       // window.location = '/';


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

    $scope.PasswordConfrimValidate = function () {
        if ($scope.UserConfrimPassword != $scope.UserPassword) {
            $scope.UserConfrimPassword = "";
            $scope.PasswordIcon = "fa fa-eye-slash";
            toastr.error("Password are not Matched");
        }
    }


    

    $('#sa-warning2').click(function () {
        swal.fire({
            title: 'Your application has been recorded, you will get a response soon.',
            type: 'warning',
            confirmButtonText: 'OK',
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                window.location = '/'
            }
        })
    });

        
  

});