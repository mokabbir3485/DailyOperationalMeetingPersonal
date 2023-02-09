app.controller("MyTaskController", function ($scope, $http, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    Clear();
    function Clear() {
        $scope.MyTaskList = [];
        $scope.ddlDepartment = null;
        GetMyTaskByDeptId($scope.ddlDepartment);
        
    }
    //$scope.MyTaskList = [
    //    { MyTaskId: 1, TaskDetail: 'Work 2', PriorityName: 'High', Topic: 'Topic 2', StatusName: 'Complete', Status: { StatusId: 1 }, Design: 'btnComplete' },
    //    { MyTaskId: 2, TaskDetail: 'Work 1', PriorityName: 'Low', Topic: 'Topic 1', StatusName: 'Ongoing', Status: { StatusId: 2 }, Design: 'btnOngoing' },
    //    { MyTaskId: 3, TaskDetail: 'Work 3', PriorityName: 'High', Topic: 'Topic 3', StatusName: 'Pending', Status: { StatusId: 3 }, Design: 'btnPending' },
    //]
    function GetMyTaskByDeptId(dept_id) {
        
        $http({
            url: '/MyTask/GetMyTaskByDeptId?dept_id=' + dept_id,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.MyTaskList = data;
            angular.forEach($scope.MyTaskList, function (aData) {
                if (aData.StatusId == 1) {
                    aData.StatusName = 'Pending';
                    aData.Design = 'btnPending';
                } else if (aData.StatusId == 2) {
                    aData.StatusName = 'Ongoing';
                    aData.Design = 'btnOngoing';
                } else if (aData.StatusId == 3) {
                    aData.StatusName = 'Complete';
                    aData.Design = 'btnComplete';
                }
                aData.Status = { StatusId: aData.StatusId};
            })
            //var inputField = document.getElementById("agenda_item");

            //inputField[0].addEventListener("keydown", function (event) {
            //    event.preventDefault();
            //});

            //inputField[0].addEventListener("contextmenu", function (event) {
            //    event.preventDefault();
            //});
        });
    }
    $scope.StatusList = [
        { StatusId: 1, StatusName: "Pending" },
        { StatusId: 2, StatusName: "Ongoing" },
        { StatusId: 3, StatusName: "Complete" }
    ];
    $scope.PriorityList = [
        { PriorityId: 1, PriorityName: "High" },
        { PriorityId: 2, PriorityName: "Moderate" },
        { PriorityId: 3, PriorityName: "Low" }
    ];

    //LoadDdlStatus();
    //function LoadDdlStatus() {
    //    angular.forEach($scope.MyTaskList, function (aData) {

    //    })
    //}
    
    $scope.MyTaskIsComplete = function (aMyTask, StatusId) {
        //if (StatusId == 1) {
            angular.forEach($scope.MyTaskList, function (aData) {
                
                if (aData.task_id == aMyTask.task_id) {
                    if (StatusId == 1) {
                        aData.StatusName = 'Pending';
                        aData.Design = 'btnPending';
                        aData.StatusId = StatusId;

                    } else if (StatusId == 2) {
                        aData.StatusName = 'Ongoing';
                        aData.Design = 'btnOngoing';
                        aData.StatusId = StatusId;
                    } else if (StatusId == 3) {
                        aData.StatusName = 'Complete';
                        aData.Design = 'btnComplete';
                        aData.StatusId = StatusId;
                    }
                    
                }
            })
        //} else if (StatusId == 2){
            //angular.forEach($scope.MyTaskList, function (aData) {
            //    if (aData.task_id == aMyTask.task_id) {
            //        aData.StatusName = 'Ongoing';
            //        aData.Design = 'btnOngoing';
            //    }
            //})
        //}else if (StatusId == 3){
            //angular.forEach($scope.MyTaskList, function (aData) {
            //    if (aData.task_id == aMyTask.task_id) {
            //        aData.StatusName = 'Complete';
            //        aData.Design = 'btnComplete';
            //    }
            //})
        //}
        
    }
    $scope.UpdateMyTask = function (aMyTask) {
        var e = confirm("Are you sure to Update?");
        if (e) {
            var params = JSON.stringify({ MyTask: aMyTask});
            $http.post('/MyTask/UpdateMyTask', params).success(function (data) {
                if (data > 0) {

                    toastr.success('My Task Updated Successfully!');
                    Clear();
                }
            }).error(function (msg) {
                toastr.error('Save failed, refresh page and try again');
            });
        }
    }
    $scope.test = function () {
        var inputField = document.getElementById("agenda_item");

        inputField.addEventListener("keydown", function (event) {
            event.preventDefault();
        });

        inputField.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        });

        var inputField = document.getElementById("discussion_point");

        inputField.addEventListener("keydown", function (event) {
            event.preventDefault();
        });

        inputField.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        });

        var inputField = document.getElementById("actions");

        inputField.addEventListener("keydown", function (event) {
            event.preventDefault();
        });

        inputField.addEventListener("contextmenu", function (event) {
            event.preventDefault();
        });


    }

    
});