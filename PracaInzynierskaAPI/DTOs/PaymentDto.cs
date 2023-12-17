namespace PracaInzynierskaAPI.DTOs
{
    public class PaymentDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public byte[]? ProfilePicture { get; set; }
        public double? Payment { get; set; }
        public double? HourlyRate { get; set; }
    }
}
