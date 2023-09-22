﻿using Microsoft.EntityFrameworkCore;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
