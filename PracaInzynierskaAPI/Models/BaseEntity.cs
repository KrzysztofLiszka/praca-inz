using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PracaInzynierskaAPI.Models
{
    public class BaseEntity
    {
        [JsonIgnore]
        public Guid? UserId { get; set; }
        [JsonIgnore]
        public virtual User? User { get; set; }
        [JsonIgnore]
        public Guid? WorkplaceId { get; set; }
        [JsonIgnore]
        public virtual Workplace? Workplace { get; set; }

    }
}
