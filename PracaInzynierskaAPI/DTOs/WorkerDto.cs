﻿namespace PracaInzynierskaAPI.DTOs
{
    public class WorkerDto
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public Guid? WorkplaceId { get; set; }
    }
}