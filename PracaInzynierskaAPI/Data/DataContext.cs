using Microsoft.EntityFrameworkCore;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Workplace> Workplaces { get; set; }
        public DbSet<Assignment> Assignments { get; set; }
    }
}
