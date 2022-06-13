using Microsoft.EntityFrameworkCore;

namespace SistemaDeEmpresa.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> opcoes)
              : base(opcoes) { }

        public DbSet<DbEmpresa> empresa { get; set; }
        public DbSet<DbFilial> filial { get; set; }
    }
}
