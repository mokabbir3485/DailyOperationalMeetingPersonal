using System;
using System.Collections.Generic;
using DbExecutor;


namespace SecurityEntity
{
    public class Inbox
    {
        public Int32 message_id { get; set; }
        public Int32 dept_id { get; set; }
        public string message { get; set; }
    }
}
