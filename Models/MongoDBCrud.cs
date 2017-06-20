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
			client = new MongoClient(Configuration["MongoDB:DBServer"]);
			db = client.GetDatabase(Configuration["MongoDB:Database"]);
			collection = db.GetCollection<Lifestyles>(Configuration["MongoDB:Collection"]);
		}

		public static async void Insert(Lifestyles _file)
		{
			MongoDBCrud mongo = new MongoDBCrud();
			await mongo.collection.InsertOneAsync(_file);
		}
	}
}
