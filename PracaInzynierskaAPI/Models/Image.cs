namespace PracaInzynierskaAPI.Models
{
    public class Image
    {
        public Guid Id { get; set; }
        public byte[] Data { get; set; }
        public Guid VisualizationId { get; set; }
    }
}
