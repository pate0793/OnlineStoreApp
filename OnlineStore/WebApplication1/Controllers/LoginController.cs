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
    public class LoginController : ApiController
    {
        public HttpResponseMessage Post(Login loginUser)
        {

            string querry = @"select * from dbo.Users where Users.User_Id='" + loginUser.User_Id + @"' and Users.User_Password='" + loginUser.User_Password + @"' ";

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
    }
}
