using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lifestyles.Models
{
    public class Lifestyles
    {
		public static IConfiguration Configuration { get; set; }

		//id changed to ObjectId type so mongo's generated ids can be used
		[BsonId]
		public ObjectId _id { get; set; }

		[BsonRepresentation(BsonType.ObjectId)]
		public string id
		{
			get { return Convert.ToString(_id); }
			set { _id = MongoDB.Bson.ObjectId.Parse(value); }
		}

		public string Lifestyle { get; set; }
	}
}
