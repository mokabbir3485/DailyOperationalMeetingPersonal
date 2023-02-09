
app.controller("MeetingMinituesReportController", function ($scope, $filter) {
    var UserData = sessionStorage.getItem("UserDataSession");
    if (UserData != null) {
        $scope.LoginUser = JSON.parse(sessionStorage.UserDataSession);
    }
    Clear();
  

    function Clear() {
        $scope.MeetingMinituesReport = "Meeting Minutes Report";
        $scope.MeetingMinituesList = [
            { Id: 1, MeetingName: "Duration of Meeting:", MeetingDescription: "End : Thu, 30 May, 2022 10:30 AM (30 Minutes)" },
            { Id: 2, MeetingName: "Venue :", MeetingDescription: "Crew Lounge" },
            { Id: 3, MeetingName: "Attendees :", MeetingDescription: "Executive Director, Director- Operations, DirectorFinance, Director- HR, Director- F&B, Head of Sales & Marketing, Head of MIS, Head of HK, Manager- Safety & Security, Deputy ManagerEngineer, Executive Chef, Front Office Manager" },
            { Id: 4, MeetingName: "Apologies :", MeetingDescription: "Chief Engineer, Guest Service Manager" },
            { Id: 5, MeetingName: "Secretary :", MeetingDescription: "Muntaka Tasnim Tabassum (Executive Secretary)." },


        ];
    }

    $scope.TableHeaderList = [
        { Header1: "Agenda Item", Header2: "Discussion Points", Header3: "Actions", Header4: "Concern Dept", Header5: "Due Date",}
    ];
    $scope.AgendaList = [

        { Id: 1, EmployeeId: 1, HeadName: "Executive Director ", EmployeeName: "Shahid Hamid", AgendaItemName: "Private Dining", DiscussionPoints: "2D design done, need to discuss with MD", Actions: "Should start working from May 31, 2022", ConcernDept: "Engineering", DueDate: "" },
        { Id: 2, EmployeeId: 1, HeadName: "Executive Director ", EmployeeName: "Shahid Hamid", AgendaItemName: "Engineering", DiscussionPoints: "	Hanging lamp or table placement need to be changed", Actions: "Engineering", ConcernDept: "", DueDate: "" },
        { Id: 3, EmployeeId: 1, HeadName: "Executive Director ", EmployeeName: "Shahid Hamid", AgendaItemName: "Audit", DiscussionPoints: "2 departments’ audit have been done", Actions: "Entire Operation’s audit will take place soon", ConcernDept: "All", DueDate: "" },
        { Id: 4, EmployeeId: 1, HeadName: "Executive Director ", EmployeeName: "Shahid Hamid", AgendaItemName: "MOU with Boat Club", DiscussionPoints: "Will be signed with Boat Club", Actions: "", ConcernDept: "", DueDate: "" },
        { Id: 5, EmployeeId: 1, HeadName: "Executive Director ", EmployeeName: "Shahid Hamid", AgendaItemName: "Pending issues", DiscussionPoints: "ED Sir has gave a reminder to all", Actions: "Concern department should actively accomplish the assigned tasks", ConcernDept: "All", DueDate: "" },
        { Id: 6, EmployeeId: 1, HeadName: "Executive Director ", EmployeeName: "Shahid Hamid", AgendaItemName: "Crew Lounge decoration", DiscussionPoints: "ED Sir has asked Tabassum to get involved with the project", Actions: "", ConcernDept: "", DueDate: "" },

        { Id: 7, EmployeeId: 2, HeadName: "Operation Director ", EmployeeName: "Ashequr Rasul",  AgendaItemName: "Software", DiscussionPoints: "No items outside the menu will be in the system", Actions: "", ConcernDept: "MIS", DueDate: "" },
        { Id: 8, EmployeeId: 2, HeadName: "Operation Director ", EmployeeName: "Ashequr Rasul",  AgendaItemName: "BOGO Offer", DiscussionPoints: "Research and analysis is required to implement strategies regarding the BOGO Offers for specific card holders", Actions: "", ConcernDept: "Sales & Marketing", DueDate: "" },

        { Id: 9, EmployeeId: 3,HeadName: "HR Director", EmployeeName: "Commander Md Monirul Islam (Retd)",  AgendaItemName: "Coffee With ED", DiscussionPoints: "31st May, 2022 at 4 PM", Actions: "All HODs have to be present", ConcernDept: "All", DueDate: "" },
        { Id: 10, EmployeeId: 3, HeadName: "HR Director", EmployeeName: "Commander Md Monirul Islam (Retd)",  AgendaItemName: "Birthday Party", DiscussionPoints: "31st May, 2022 at 3 PM, Venue: GS-2", Actions: "", ConcernDept: "All", DueDate: "" },

        { Id: 11, EmployeeId: 4, HeadName: "Finance Director", EmployeeName: "Mizanur Rahaman Siddiquee", AgendaItemName: "Budget Variance Report", DiscussionPoints: "Total Variance from Budget is 2%", Actions: "", ConcernDept: "Finance", DueDate: "" },

        { Id: 12, EmployeeId: 5, HeadName: "Director F&B", EmployeeName: "A.T.M Ahmed Hossain",  AgendaItemName: "Revenue updates", DiscussionPoints: "Cover: 317", Actions: "", ConcernDept: "F&B", DueDate: "" },
        { Id: 13, EmployeeId: 5, HeadName: "Director F&B", EmployeeName: "A.T.M Ahmed Hossain",  AgendaItemName: "Deadline & Update required", DiscussionPoints: "Grandiose Bar & Fuchka Cart at Comfee Lounge", Actions: "Design will be prepared for the cart", ConcernDept: "F&B", DueDate: "" },
        { Id: 14, EmployeeId: 6, HeadName: "Head of MIS", EmployeeName: "Morshedur Rahman",  AgendaItemName: "Morning Meeting Automation", DiscussionPoints: "Software is under development, recommendations will be provided from concern Departments", Actions: "", ConcernDept: "All", DueDate: "" },

        { Id: 15, EmployeeId: 7, HeadName: "Head of Sales & Marketing", EmployeeName: "Muhammad Mahmud Hassan", AgendaItemName: "Premier Club Membership", DiscussionPoints: "5 Membership were sold on 29 May, 4 Royal, 1 Regular", Actions: "", ConcernDept: "Sales & MarketingB", DueDate: "" },
        { Id: 16, EmployeeId: 7, HeadName: "Head of Sales & Marketing", EmployeeName: "Muhammad Mahmud Hassan",  AgendaItemName: "ADC", DiscussionPoints: "Thoroughly visited yesterday, they are positive. If they are satisfied, we can even get the business from the subcontractors of their end", Actions: "", ConcernDept: "Sales & Marketing", DueDate: "" },
        { Id: 17, EmployeeId: 7,  HeadName: "Head of Sales & Marketing", EmployeeName: "Muhammad Mahmud Hassan", AgendaItemName: "Lack of Manpower", DiscussionPoints: "One bubble lounge incident with an Korean Guest", Actions: "It’s better if we can get more dedicated people for our service", ConcernDept: "Sales & MarketingB", DueDate: "" },
        { Id: 18, EmployeeId: 7, HeadName: "Head of Sales & Marketing", EmployeeName: "Muhammad Mahmud Hassan",  AgendaItemName: "Partnership with US Bangla", DiscussionPoints: "Transit guests from Maldives, Malaysiacan be obtained", Actions: "", ConcernDept: "Sales & MarketingB", DueDate: "" },
        { Id: 19, EmployeeId: 8,HeadName: "Executive Chef", EmployeeName: "Banefus Gomes",  AgendaItemName: "Additional carpenter", DiscussionPoints: "Required dedicated carpenter", Actions: "", ConcernDept: "Engineer", DueDate: "" },

    ];

    $scope.$AgendaList = $scope.AgendaList;
    $scope.AgendaList = Array.from(
        $scope.AgendaList.reduce((m, o) => m.set(o.EmployeeName, (m.get(o.EmployeeName) || []).concat(o)), new Map),
        ([EmployeeName, DataList]) => ({ EmployeeName, DataList })
    );

    $scope.TotalTableData = [];
    angular.forEach($scope.AgendaList,function (aData) {


        aData.H1 = 'Agenda Item';
        aData.H2 = 'Discussion Points';
        aData.H3 = 'Actions';
        aData.H4 = 'Concern Dept';
        aData.H5 = 'Due Date';
        aData.HeadName = aData.DataList[0].HeadName;
    })
   

});