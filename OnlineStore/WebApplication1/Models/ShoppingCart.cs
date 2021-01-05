using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class ShoppingCart
    {
        public string User_Id { get; set; }
        public string Product_Id { get; set; }
        public int Quantity { get; set; }
    }
}