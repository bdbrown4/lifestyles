using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lifestyles.Models
{
    public class MongoDBCrud
    {
		//MongoDb
		public static IConfiguration Configuration { get; set; }
		public MongoClient client;
		public IMongoDatabase db;
		public IMongoCollection<Lifestyles> collection;

		public MongoDBCrud()
		{
			client = new MongoClient("mongodb://localhost:27017");
			db = client.GetDatabase("admin");
			collection = db.GetCollection<Lifestyles>("Lifestyles");
        }

		public static async void Insert(Lifestyles _file)
		{
			MongoDBCrud mongo = new MongoDBCrud();
			await mongo.collection.InsertOneAsync(_file);
		}
	}
}
