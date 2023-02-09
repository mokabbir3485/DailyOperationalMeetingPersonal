using System;
using DbExecutor;


namespace SecurityEntity
{
    public class ad_Task_type : IEntityBase
    {

        public int TaskTypeId { get; set; }
        public string task_type { get; set; }
        public int CreatorId { get; set; }
        public DateTime CreateDate { get; set; }
        public int UpdatorId { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
