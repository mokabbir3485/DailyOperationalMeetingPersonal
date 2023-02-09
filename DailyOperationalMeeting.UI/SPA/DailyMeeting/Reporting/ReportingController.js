app.controller("ReportingController", function ($scope, $window) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    $scope.Title = 'Reporting Page';


    $scope.MeetingMinutesList = [
        { MeetingMinutesId: 1, MeetingReference: "Meeting Reference 1", DiscussionPoints: "Discussion Points 1", Venue: "Venue 1", PriorityName: "High", SecretaryName: "Abir", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 2, MeetingReference: "Meeting Reference 2", DiscussionPoints: "Discussion Points 2", Venue: "Venue 2", PriorityName: "Low", SecretaryName: "Shuvo", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 3, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 4, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 5, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 6, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 7, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 8, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 9, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 10, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
        { MeetingMinutesId: 11, MeetingReference: "Meeting Reference 3", DiscussionPoints: "Discussion Points 3", Venue: "Venue 3", PriorityName: "High", SecretaryName: "Bellal", MeetingDate: "May 30, 2022" },
    ];

    $scope.MeetingMinutesDetailsList = [
        { MeetingMinutesId: 1, AgendaItem: "Agenda Item 1", DiscussionPoints: "Discussion Points 1", Action: "Action 1", PriorityName: "High", EmployeeName: "Abir", DueDate: "May 30, 2022", Department: "Software" },
        { MeetingMinutesId: 2, AgendaItem: "Agenda Item 2", DiscussionPoints: "Discussion Points 2", Action: "Action 2", PriorityName: "Low", EmployeeName: "Shuvo", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 3, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 4, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 5, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 6, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 7, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 8, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 9, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 10, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
        { MeetingMinutesId: 11, AgendaItem: "Agenda Item 3", DiscussionPoints: "Discussion Points 3", Action: "Action 3", PriorityName: "High", EmployeeName: "Bellal", DueDate: "May 30, 2022", Department: "IT" },
    ];
    $scope.EmployeeList = [
        { EmployeeId: 1, EmployeeName: "Abir" },
        { EmployeeId: 2, EmployeeName: "Shuvo" },
        { EmployeeId: 3, EmployeeName: "Bellal" },
        { EmployeeId: 4, EmployeeName: "Akash" },
        { EmployeeId: 5, EmployeeName: "Hemal" },
        { EmployeeId: 6, EmployeeName: "Maya" }
    ];
    $scope.StatusList = [
        { StatusId: 1, StatusName: "Complete" },
        { StatusId: 2, StatusName: "Ongoing" },
        { StatusId: 3, StatusName: "Pending" }
    ];
    $scope.MeetingTypeList = [
        { MeetingTypeId: 1, MeetingTypeName: "Info" },
        { MeetingTypeId: 2, MeetingTypeName: "Task" }
    ];
    $scope.PriorityList = [
        { PriorityId: 1, PriorityName: "High" },
        { PriorityId: 2, PriorityName: "Moderate" },
        { PriorityId: 3, PriorityName: "Low" }
    ];

    function OpenReport(SOId) {
        $window.open("#/MeetingMinutesReport", "popup", "width=800,height=550,left=280,top=80");
        
        /*$cookieStore.put("SalesOrderId", SOId);*/
        event.stopPropagation();
    }
    $scope.OpenReport = function (SOId) {
        OpenReport(SOId);
    };

    var label = $('#row_callback_filter > label').html();
        //document.getSelection('#row_callback_filter > label');
        //$('#row_callback_filter label').html();
    
    console.log(label);
});