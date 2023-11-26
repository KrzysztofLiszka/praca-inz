using System.Text.Json.Serialization;

namespace PracaInzynierskaAPI.Models
{
    public class Visualization : BaseEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        [JsonIgnore]
        public List<Image>? Images { get; set; } = new List<Image>();
    }
}
