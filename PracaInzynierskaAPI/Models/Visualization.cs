namespace PracaInzynierskaAPI.Models
{
    public class Visualization : BaseEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public List<Image>? Images { get; set; } = new List<Image>();
    }
}
