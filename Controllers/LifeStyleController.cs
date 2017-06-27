using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoDB.Driver;
using Lifestyles.Models;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Lifestyles.Controllers
{
    [Route("api/[controller]")]
    public class LifeStyleController : Controller
    {
        // GET: api/values
        [HttpGet("/lifestyles/api")] //make sure to add a path
        public async Task<JsonResult> GetNames()
        {
            //Connect to db, get collection

            Lifestyles.Models.MongoDBCrud mongo = new MongoDBCrud();
            List<string> obj = new List<string>();
            var query = mongo.collection.Find(Builders<Models.Lifestyles>.Filter.Empty).ToListAsync();
            await query;
           
           //obj.Add("Demetre Phipps");
         // obj.Add("Ben Brown");

        //var filter = Builders<Models.Lifestyles>.Filter.Regex("name", new BsonRegularExpression(".*", "i"));
            return Json(query.Result != null ? query.Result.ToArray() : new List<Models.Lifestyles>().ToArray());

        }
        /*
        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(string lname)
        {
            return lname;
        }*/

        // POST api/values
        [HttpPost("/lifestyles/api")]
        public async Task<JsonResult> Post([FromBody]Models.Lifestyles value)
        {
			Models.Lifestyles lf = new Models.Lifestyles();
			lf.lifestyle = value.lifestyle;
            lf.name = value.name;
            if (lf.lifestyle!="" && lf.name!="") {
                MongoDBCrud.Insert(lf);
            }
            

            var success = "SUCCESS!".ToJson();
			JsonResult Success = new JsonResult(success);
			return Success;
        }
        // POST api/values
        [HttpPost("/lifestyles/delete")]
        public async Task<JsonResult> Delete([FromBody]Models.Lifestyles value)
        {
            Models.Lifestyles delete = new Models.Lifestyles();
            delete.lifestyle = value.lifestyle;
            delete.name = value.name;
            delete.id = value.id;

            MongoDBCrud.DeleteAsync(delete.id);



            var success = "SUCCESS!".ToJson();
            JsonResult Success = new JsonResult(success);
            return Success;
            //MongoDBCrud.Delete(delete);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("lifestyles/delete")]
        public void Delete()
        {
        }
    }
}
