app.controller("InboxController", function ($scope, $http) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    Clear();
    function Clear() {
        $scope.dept_id = null;
        GetInboxMessage();
    }
    function GetInboxMessage() {
        $http({
            url: '/Inbox/GetInboxMessage?dept_id=' + $scope.dept_id,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.MessageList = data;

        });
    }
    //$scope.MessageList = [
    //    { MessageId: 1, Message: 'Belal Hossain moved this task from "Changes In Dev Database" to "Released in Production" in Database Changes Tracking.', UserName: 'Abir', Topic: 'Topic 2', Status: true, IsRead: false },
    //    { MessageId: 2, Message: 'Belal Hossain marked this task complete.', UserName: 'Bellal', Topic: 'Topic 1', Status: false, IsRead: false },
    //    { MessageId: 3, Message: 'Abir added new tasks', UserName: 'Mokabbir', Topic: 'Topic 3', Status: true, IsRead: false },
    //]
    $scope.PriorityList = [
        { PriorityId: 1, PriorityName: "High" },
        { PriorityId: 2, PriorityName: "Moderate" },
        { PriorityId: 3, PriorityName: "Low" }
    ];



});