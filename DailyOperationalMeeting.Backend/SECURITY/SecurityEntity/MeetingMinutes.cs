using System;
using System.Collections.Generic;
using DbExecutor;


namespace SecurityEntity
{
    public class MeetingMinutes
    {
        public Int64 task_id { get; set; }
        public int task_type_id { get; set; }
        public int secretary_pin { get; set; }
        
        public int dept_id { get; set; }
        public string department_name { get; set; }

        public int employee_pin { get; set; }
        public int attendee_pin { get; set; }
        public int apology_pin { get; set; }
        public int priority_id { get; set; }
        public string task_priority { get; set; }
        public string TypeName { get; set; }
        public string PriorityName { get; set; }
        public string DepartmentName { get; set; }
        public string EmployeeName { get; set; }
        public int creator { get; set; }

        public string meeting_reference { get; set; }
        public string agenda_item { get; set; }
        public string discussion_point { get; set; }
        public string venue { get; set; }
        public string actions { get; set; }

        public DateTime meeting_date { get; set; }
        public DateTime duedate { get; set; }
        public string start_timeStr { get; set; }
        public DateTime start_time { get; set; }

        public DateTime end_time { get; set; }
        public string end_timeStr { get; set; }


        //Employee
        public int employee_id { get; set; }
        public string employee_name { get; set; }
        public string designation { get; set; }

        public List<Department>  Department { get; set; }

        public int CreatorId { get; set; }
        public DateTime CreateDate { get; set; }
        public int UpdatorId { get; set; }
        public DateTime UpdateDate { get; set; }
    }
    public class Department
    {
        public Int64 task_id { get; set; }
        public int dept_id { get; set; }
    }
}
