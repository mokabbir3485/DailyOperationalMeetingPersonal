app.controller("MeetingMinutesController", function ($scope, $http, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }

    Clear();
    function Clear() {
        $scope.MeetingMinutes = {};
        $scope.utc = new Date().toJSON().slice(0, 10);
        $scope.MeetingMinutes.meeting_date = new Date().toJSON().slice(0, 10);
        $scope.MeetingMinutes.meeting_date = new Date();
        /*GetCurrentTask(utc);*/
        //$scope.MeetingMinutes.start_time = '13:05:00';
        $scope.MeetingMinutesList = [];
        $scope.CurrentMeetingTask = [];
        $scope.EmployeeList = [];
        $scope.SecretaryList = [];
        $scope.ApologiesList = [];
        $scope.AttendeesList = [];
        $scope.DepartmentList = [];
        $scope.PriorityList = [];

        GetAllEmployee();
        GetAllDepartment();
        GetAllPriority();
        //$scope.AttendeesList = [
        //    { employee_pin: 1, AttendeesName: "Abir" },
        //    { employee_pin: 2, AttendeesName: "Shuvo" },
        //    { employee_pin: 3, AttendeesName: "Bellal" },
        //    { employee_pin: 4, AttendeesName: "Akash" },
        //    { employee_pin: 5, AttendeesName: "Hemal" },
        //    { employee_pin: 6, AttendeesName: "Maya" }
        //];
        //$scope.SecretaryList = [
        //    { secretary_pin: 1, SecretaryName: "Abir" },
        //    { secretary_pin: 2, SecretaryName: "Shuvo" },
        //    { secretary_pin: 3, SecretaryName: "Bellal" },
        //    { secretary_pin: 4, SecretaryName: "Akash" },
        //    { secretary_pin: 5, SecretaryName: "Hemal" },
        //    { secretary_pin: 6, SecretaryName: "Maya" }
        //];
        //$scope.EmployeeList = [
        //    { employeeId: 1, EmployeeName: "Abir" },
        //    { employeeId: 2, EmployeeName: "Shuvo" },
        //    { employeeId: 3, EmployeeName: "Bellal" },
        //    { employeeId: 4, EmployeeName: "Akash" },
        //    { employeeId: 5, EmployeeName: "Hemal" },
        //    { employeeId: 6, EmployeeName: "Maya" }
        //];
        //$scope.ApologiesList = [
        //    { employee_pin: 1, ApologiesName: "Abir" },
        //    { employee_pin: 2, ApologiesName: "Shuvo" },
        //    { employee_pin: 3, ApologiesName: "Bellal" },
        //    { employee_pin: 4, ApologiesName: "Akash" },
        //    { employee_pin: 5, ApologiesName: "Hemal" },
        //    { employee_pin: 6, ApologiesName: "Maya" }
        //];
        $scope.TypeList = [
            { task_type_id: 1, TypeName: "Info" },
            { task_type_id: 2, TypeName: "Task" }
        ];
        //$scope.DepartmentList = [
        //    { dept_id: 1, DepartmentName: "Software" },
        //    { dept_id: 2, DepartmentName: "IT" }
        //];


        //$scope.MeetingMinutesList = [
        //    { MeetingMinutesId: 1, agenda_item: "Agenda Item 1", discussion_point: "Discussion Points 1", actions: "actions 1", PriorityName: "High", EmployeeName: "Abir", duedate: "May 30, 2022", DepartmentName: "Software", TypeName: "Info" },
        //    { MeetingMinutesId: 2, agenda_item: "Agenda Item 2", discussion_point: "Discussion Points 2", actions: "actions 2", PriorityName: "Low", EmployeeName: "Shuvo", duedate: "May 30, 2022", DepartmentName: "IT", TypeName: "Task" },
        //    { MeetingMinutesId: 3, agenda_item: "Agenda Item 3", discussion_point: "Discussion Points 3", actions: "actions 3", PriorityName: "High", EmployeeName: "Bellal", duedate: "May 30, 2022", DepartmentName: "IT", TypeName: "Info" }
        //];

        //$scope.PriorityList = [
        //    { priorityId: 1, PriorityName: "High" },
        //    { priorityId: 2, PriorityName: "Moderate" },
        //    { priorityId: 3, PriorityName: "Low" }
        //];

    }
    $scope.AddMeetingMinutes = function () {
        var obj = {};
        $scope.DepartmentNames = '';
        obj.agenda_item = $scope.agenda_item;
        obj.discussion_point = $scope.discussion_point;
        obj.actions = $scope.actions;
        obj.meeting_date = $scope.MeetingMinutes.meeting_date;
        obj.start_time = $scope.MeetingMinutes.start_time;
        obj.end_time = $scope.MeetingMinutes.end_time;
        obj.meeting_reference = $scope.MeetingMinutes.meeting_reference;
        obj.venue = $scope.MeetingMinutes.venue;
        obj.actions = $scope.actions;

        obj.PriorityName = $scope.ddlPriority.task_priority;
        obj.priority_id = $scope.ddlPriority.priority_id;
        obj.EmployeeName = $scope.ddlEmployee.employee_name;
        obj.employee_pin = $scope.ddlEmployee.employee_id;
        obj.task_type_id = $scope.ddlType.task_type_id;
        obj.secretary_pin = $scope.ddlSecretary.secretary_pin;
        obj.TypeName = $scope.ddlType.TypeName;

        angular.forEach($scope.ddlDepartment, function (aDate) {
            $scope.DepartmentNames += $scope.DepartmentNames == '' ? aDate.department_name : (',' + aDate.department_name)
        })
        obj.DepartmentName = $scope.DepartmentNames;
        obj.Department = $scope.ddlDepartment;
        obj.duedate = $scope.duedate;

        $scope.MeetingMinutesList.push(obj);

        //$scope.ddlEmployee = null;
        //$scope.agenda_item = null;
        //$scope.discussion_point = null;
        //$scope.actions = null;
        //$scope.ddlType = null;
        //$scope.ddlPriority = null;
        //$scope.ddlDepartment = null;
        //$scope.duedate = null;
        $('#ddlDepartment').select2('destroy');
        $('#ddlDepartment').val('').select2({
            placeholder: "-- Select Concern Department  --",
        });
    }
    $scope.RemoveMeetingMinutes = function (aMeetingMinutes) {
        var index = $scope.MeetingMinutesList.indexOf(aMeetingMinutes);
        $scope.MeetingMinutesList.splice(index, 1);
    }


    $scope.test = function () {
        //console.log($scope.MeetingDateTime);
        //console.log($scope.ddlAttendees);
        //console.log($scope.ddlSecretary);
        //var d = new Date($scope.MeetingMinutes.StartTime);
        //var StartTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        console.log($scope.MeetingMinutes.start_time);

        //var d = new Date($scope.MeetingMinutes.EndTime);
        //var EndTime = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
        //console.log(EndTime);
        //$scope.DurationHour = (new Date("1970-1-1 " + EndTime) - new Date("1970-1-1 " + StartTime)) / 1000 / 60 / 60;

        //$scope.DurationMinite = (new Date("1970-1-1 " + EndTime) - new Date("1970-1-1 " + StartTime)) / 1000 / 60;
        //$scope.Duration = Math.abs(parseInt($scope.DurationHour)) + ':' + Math.abs($scope.DurationMinite);
        //console.log($scope.Duration);
        //console.log($scope.MeetingMinutes.StartTime);
        //console.log($scope.MeetingMinutes.EndTime);



    }

    $scope.FillData = function () {
        $scope.TaskAssign = {};
        $scope.TaskAssign.TaskDetail = 'Work 4';
        $scope.TaskAssign.Topic = 'Topic 4';
        $scope.ddlAssignBy = { AssignById: 2 };
        $scope.ddlAssignFor = { AssignForId: 3 };
        $scope.ddlPriority = { priorityId: 1 };
        toastr.info('Fillup All Data');
    }

    $scope.SaveMeetingMinutes = function () {
        var e = confirm("Are you sure to save?");
        if (e) {
            var params = JSON.stringify({ MeetingMinutes: $scope.MeetingMinutesList, Attendees: $scope.ddlAttendees, Apologies: $scope.ddlApologies, DepartmentName: $scope.ddlDepartment });
            $http.post('/MeetingMinutes/Save', params).success(function (data) {
                if (data > 0) {
                    //if ($scope.ad_SubMainGroup.IsUpdate == true) {
                        //alertify.log('Sub Main Group Updated Successfully!', 'success', '5000');
                        //toastr.success('Meeting Minutes Updated Successfully!');
                    //} else {
                        //alertify.log('Sub Main Group Saved Successfully!', 'success', '5000');
                        toastr.success('Meeting Minutes Saved Successfully!');
                    //}

                    Clear();
                    $scope.ddlSecretary = null;
                    $scope.ddlAttendees = null;
                    $scope.ddlApologies = null;
                    $('#ddlSecretary').select2('destroy');
                    $('#ddlSecretary').val('').select2({
                        placeholder: "-- Select Secretary --",
                    });
                    $('#ddlAttendees').select2('destroy');
                    $('#ddlAttendees').val('').select2({
                        placeholder: "-- Select Attendees --",
                    });
                    $('#ddlApologies').select2('destroy');
                    $('#ddlApologies').val('').select2({
                        placeholder: "-- Select Apologies --",
                    });
                    $scope.MeetingMinutesForm.$setPristine();
                    $scope.MeetingMinutesForm.$setUntouched();
                }
            }).error(function (msg) {
                //alertify.log('Save failed, refresh page and try again', 'error', '5000');
                toastr.error('Save failed, refresh page and try again');
            });
        }

    }
    function GetCurrentTask(CurrentDate) {
        $http({
            url: '/MeetingMinutes/GetCurrentTask?MeetingDate=' + CurrentDate,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.CurrentMeetingTask = data;
            angular.forEach($scope.CurrentMeetingTask, function (aData) {
                if (aData.duedate) {
                    var res1 = aData.duedate.substring(0, 5);
                    if (res1 == "/Date") {
                        var parsedDate1 = new Date(parseInt(aData.duedate.substr(6)));
                        var date1 = ($filter('date')(parsedDate1, 'MMM dd, yyyy')).toString();
                        aData.duedate = date1;
                    }
                }
            })
            if ($scope.CurrentMeetingTask.length > 0) {
                GetApologiesByTaskId($scope.CurrentMeetingTask[0].task_id);
                GetAttendeesByTaskId($scope.CurrentMeetingTask[0].task_id);

                //$scope.CurrentMeetingTask[0].start_time = $scope.CurrentMeetingTask[0].start_timeStr;
                //$scope.CurrentMeetingTask[0].start_time = $scope.CurrentMeetingTask[0].start_timeStr.split('.')[0];
                //$scope.CurrentMeetingTask[0].end_time = $scope.CurrentMeetingTask[0].end_timeStr;

                $scope.MeetingMinutes = $scope.CurrentMeetingTask[0];
                $scope.MeetingMinutesList = $scope.CurrentMeetingTask;

                $scope.ddlSecretary = { secretary_pin: $scope.MeetingMinutes.secretary_pin };
                $('#ddlSecretary').select2('destroy');
                $('#ddlSecretary').val($scope.MeetingMinutes.secretary_pin).select2();
            } else {
                toastr.error('No Data Found!!!');
            }
        });
    }
    function GetApologiesByTaskId(task_id) {
        $scope.ApologiesIdList = [];
        $http({
            url: '/MeetingMinutes/GetApologiesByTaskId?task_id=' + task_id,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.Apologies = data;
            angular.forEach($scope.Apologies, function (aData) {
                $scope.ApologiesIdList.push(aData.apology_pin);
            })

            $('#ddlApologies').select2('destroy');
            $('#ddlApologies').val($scope.ApologiesIdList).select2();

            
        });
    }
    function GetAttendeesByTaskId(task_id) {
        $scope.AttendeesIdList = [];
        $http({
            url: '/MeetingMinutes/GetAttendeesByTaskId?task_id=' + task_id,
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.Attendees = data;
            angular.forEach($scope.Attendees, function (aData) {
                $scope.AttendeesIdList.push(aData.attendee_pin);
            })

            $('#ddlAttendees').select2('destroy');
            $('#ddlAttendees').val($scope.AttendeesIdList).select2(); //[1,2,5]


        });
    }
    
    function GetAllEmployee() {
        $http({
            url: '/MeetingMinutes/GetAllEmployee',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.$EmployeeMainList = data;
            angular.forEach(data, function (aData) {
                aData.employee_pin = aData.employee_id;
                aData.secretary_pin = aData.employee_id;
                aData.apology_pin = aData.employee_id;
                aData.attendee_pin = aData.employee_id;

                aData.apologie_name = aData.employee_name;
                aData.attendee_name = aData.employee_name;
                aData.secretary_name = aData.employee_name;



                $scope.EmployeeList.push(aData);
                $scope.AttendeesList.push(aData);
                $scope.ApologiesList.push(aData);
                $scope.SecretaryList.push(aData);

                //angular.forEach($scope.Apologies, function (aData) {
                //    var obj = {};
                //    obj.apology_pin = aData.apology_pin;
                //    $scope.ddlApologies.push(obj);
                //})
            })
            GetCurrentTask($scope.utc);
        });
    }
    function GetAllDepartment() {
        $http({
            url: '/MeetingMinutes/GetAllDepartment',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.DepartmentList = data;
        });
    }
    function GetAllPriority() {
        $http({
            url: '/MeetingMinutes/GetAllPriority',
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).success(function (data) {
            $scope.PriorityList = data;
        });
    }
    $scope.SaveTest = function () {
        // for success - green box
        //toastr.success('Task Assign Successfully.');

        //// for errors - red box
        //toastr.error('errors messages');

        //// for warning - orange box
        //toastr.warning('warning messages');

        //// for info - blue box
        //toastr.info('info messages');
        toastr.warning("<button type='button' id='confirmationButtonYes' class='btn btn-success'>Confirm</button>", 'Are you sure you want to save?',
            {
                onShown: function (toast) {
                    $("#confirmationButtonYes").click(function () {
                        console.log('clicked yes');
                    });
                }
            });
    }

    $scope.Reset = function () {
        //Clear();
        //$scope.ddlSecretary = null;
        //$scope.ddlAttendees = null;
        //$scope.ddlApologies = null;
        //$('#ddlSecretary').select2('destroy');
        //$('#ddlSecretary').val('').select2({
        //    placeholder: "-- Select Secretary --",
        //});
        //$('#ddlAttendees').select2('destroy');
        //$('#ddlAttendees').val('').select2({
        //    placeholder: "-- Select Attendees --",
        //});
        //$('#ddlApologies').select2('destroy');
        //$('#ddlApologies').val('').select2({
        //    placeholder: "-- Select Apologies --",
        //});

        //toastr.error('All Data Reset');



        var d = '/Date(-62135596800000)/';
        var r = moment(d).format("DD MM YYYY");
        console.log(r);
    }
});
