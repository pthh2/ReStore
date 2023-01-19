using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using API.Entities;


namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {

        }

        // public StoreContext(DbSet<Product> Products)
        // {
        //     Products = Products;
        // }

        public DbSet<Product> Products { get; set; }
    }
}