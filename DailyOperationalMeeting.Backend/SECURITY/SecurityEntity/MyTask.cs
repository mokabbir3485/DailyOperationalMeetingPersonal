using System;
using System.Collections.Generic;
using DbExecutor;


namespace SecurityEntity
{
    public class MyTask
    {
        public Int64 task_id { get; set; }
        public Int64 dept_id { get; set; }
        public Int32 StatusId { get; set; }
        public string agenda_item { get; set; }
        public string discussion_point { get; set; }
        public string actions { get; set; }
        public string task_remarks { get; set; }
        public string task_priority { get; set; }
        public string completion_status { get; set; }
    }
}
