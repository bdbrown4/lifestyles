﻿using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;

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

        public static async void DeleteAsync(string Id)
        {
            var oid = MongoDB.Bson.ObjectId.Parse(Id);
            //var name = MongoDB.Bson.ObjectId.Parse(delete);
            MongoDBCrud mongo = new MongoDBCrud();
            //filter by the id that is passed through. 
            var filter = Builders<Lifestyles>.Filter.Eq(Lifestyles => Lifestyles._id, oid);
            await mongo.collection.DeleteManyAsync(filter);

        }

        public static async void UpdateAsync(string Id, string name, string lifestyle)
        {
            var oid = MongoDB.Bson.ObjectId.Parse(Id);
            //var name = MongoDB.Bson.ObjectId.Parse(delete);
            MongoDBCrud mongo = new MongoDBCrud();
            //filter by the id only
            var filter = Builders<Lifestyles>.Filter.Eq(Lifestyles => Lifestyles._id, oid);
            //update name
            var update = Builders<Lifestyles>.Update.Set(Lifestyles => Lifestyles.name, name);
            var updateTask = mongo.collection.UpdateOneAsync(filter, update);
            await updateTask;
            //update lifestyle
            update = Builders<Lifestyles>.Update.Set(Lifestyles => Lifestyles.lifestyle, lifestyle);
            updateTask = mongo.collection.UpdateOneAsync(filter, update);
            await updateTask;
        }

        internal static void DeleteAsync(Lifestyles delete)
        {
            throw new NotImplementedException();
        }

        internal static void UpdateAsync(Lifestyles lf)
        {
            throw new NotImplementedException();
        }

        /* public static async void Delete(Lifestyles _file)
         {
             MongoDBCrud mongo = new MongoDBCrud();
             await mongo.collection.DeleteOne("name", _file );


                 //.DeleteOneAsync(_file);


                 //.InsertOneAsync(_file);
         }*/
    }
}
