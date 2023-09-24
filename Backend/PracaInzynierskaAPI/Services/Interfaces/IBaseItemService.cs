namespace PracaInzynierskaAPI.Services.Interfaces
{
    public interface IBaseItemService<T>
    {
        Task<IEnumerable<T>> GetAllItemsAsync();
        Task<T> GetItemByIdAsync(Guid id);
        Task AddItemAsync(T item);
        Task UpdateItemAsync(T item);
        Task DeleteItemAsync(Guid id);
    }
}
