using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class UserController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string querry = @"select Product_Id, Name, Category, Price from dbo.Products";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["OnlineStoreDB"].ConnectionString))
            using (var cmd = new SqlCommand(querry, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);
        }

        public string Post(Users user)
        {
            try
            {
                string querry = @"insert into dbo.Users values ( '"+user.User_Id+ @"','"+user.User_Name+ @"','" + user.User_Password + @"','" + user.User_Type + @"' )";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["OnlineStoreDB"].ConnectionString))
                using (var cmd = new SqlCommand(querry, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }

                return "Added Successfully";

            }
            catch
            {
                return "Failed to add !!";
            }
        }
    }
}
