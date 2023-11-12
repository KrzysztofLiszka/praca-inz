namespace PracaInzynierskaAPI.Models
{
    public class Documentation : BaseEntity
    {
        public Guid Id { get; set; }
        public string ChapterName { get; set; }
        public string DescriptionHtmlContent { get; set; }
    }
}
