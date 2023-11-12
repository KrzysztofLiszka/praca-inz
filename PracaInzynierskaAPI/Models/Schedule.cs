namespace PracaInzynierskaAPI.Models
{
    public class Schedule : BaseEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string Hour { get; set; }
    }
}
