app.controller("TaskAssignerController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        //AssignerForList

        $scope.AssignByList = [
            { AssignById: 1, AssignByName: "Abir" },
            { AssignById: 2, AssignByName: "Shuvo" },
            { AssignById: 3, AssignByName: "Bellal" }
        ];
        $scope.AssignForList = [
            { AssignForId: 1, AssignForName: "Anwar" },
            { AssignForId: 2, AssignForName: "Mokabbir" },
            { AssignForId: 3, AssignForName: "Bellal Mia" }
        ];
        $scope.TaskDetailList = [
            { TaskDetailId: 1, TaskDetail: "Work 1", AssignByName: "Abir", AssignForName: "Anwar", PriorityName: "Moderate", Topic: "Topic 1" },
            { TaskDetailId: 2, TaskDetail: "Work 2", AssignByName: "Shuvo", AssignForName: "Mokabbir", PriorityName: "High", Topic: "Topic 2" },
            { TaskDetailId: 3, TaskDetail: "Work 3", AssignByName: "Work 3", AssignForName: "Bellal Mia", PriorityName: "Low", Topic: "Topic 3" }
        ];

        $scope.PriorityList = [
            { PriorityId: 1, PriorityName: "High" },
            { PriorityId: 2, PriorityName: "Moderate" },
            { PriorityId: 3, PriorityName: "Low" }
        ];
    }
    $scope.FillData = function () {
        $scope.TaskAssign = {};
        $scope.TaskAssign.TaskDetail = 'Work 4';
        $scope.TaskAssign.Topic = 'Topic 4';
        $scope.ddlAssignBy = { AssignById: 2 };
        $scope.ddlAssignFor = { AssignForId: 3 };
        $scope.ddlPriority = { PriorityId: 1 };
        toastr.info('Fillup All Data');
    }


    $scope.Save = function () {
        // for success - green box
        toastr.success('Task Assign Successfully.');

        //// for errors - red box
        //toastr.error('errors messages');

        //// for warning - orange box
        //toastr.warning('warning messages');

        //// for info - blue box
        //toastr.info('info messages');
    }

    $scope.batteryReset = function () {
        $scope.TaskAssign = {};
        $scope.ddlAssignBy = null;
        $scope.ddlAssignFor = null;
        $scope.ddlPriority = null;
        toastr.error('All Data Reset');
    }
});
