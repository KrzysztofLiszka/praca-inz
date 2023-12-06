namespace PracaInzynierskaAPI.Models
{
    public class TimeSpent : BaseEntity
    {
        public Guid Id { get; set; }
        public double SpentHours { get; set; }
        public double SpentMinutes { get; set; }
        public DateTime Date { get; set; }
    }
}
