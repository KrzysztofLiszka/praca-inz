using Microsoft.EntityFrameworkCore;
using PracaInzynierskaAPI.Data;

namespace PracaInzynierskaAPI.SqlRepository
{
    public class SqlRepository<T> : ISqlRepository<T> where T : class
    {
        private readonly DataContext _context;
        private readonly DbSet<T> _dbSet;

        public SqlRepository(DataContext context)
        {
            _context = context;
            _dbSet = context.Set<T>();
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _dbSet.ToListAsync();
        }

        public async Task<T> GetByIdAsync(Guid id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task AddAsync(T entity)
        {
            await _dbSet.AddAsync(entity);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(T entity)
        {
            _dbSet.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(Guid id)
        {
            var entity = Activator.CreateInstance<T>();
            var propertyInfo = typeof(T).GetProperty("Id");
            if (propertyInfo != null)
            {
                propertyInfo.SetValue(entity, id);
                _dbSet.Remove(entity);
                await _context.SaveChangesAsync();
            }
        }
    }
}
