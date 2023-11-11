namespace PracaInzynierskaAPI.Models
{
    public class Assignment : BaseEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string DescriptionHtmlContent { get; set; }
        public string? Status { get; set; }
    }
}
