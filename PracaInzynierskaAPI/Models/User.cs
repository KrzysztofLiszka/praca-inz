﻿namespace PracaInzynierskaAPI.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string PasswordHash { get; set; }
        public Guid? WorkplaceId { get; set; }
        public byte[]? ProfilePicture { get; set; }
        public virtual Workplace Workplace { get; set; }
        public string? RoleName { get; set; }
        public double? HourlyRate { get; set; }
    }
}