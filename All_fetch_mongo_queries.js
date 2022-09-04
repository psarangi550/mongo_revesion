//array of nested documents
let a = {
  "name": "Mike",
  "friends": [
    {
      "name": "Lora",
      "age": NumberInt(23),
      "registered": true
    },
    {
      "name": "Bob",
      "age": NumberInt(25),
      "registered": false
    },
    {
      "name": "Steve",
      "age": NumberInt(27)
    }
  ]
}

// use('prepare')
// db.createCollection('interview')
db.getCollection('interview').insertOne(a)
//fetching the value from the collection as below
db.getCollection('interview').find({},{"friends.name":1}).pretty()
//fetching the value using the exists and type operator 
db.getCollection('interview').find({"friends.name":{$exists:true}}).pretty()
//fetching the value using the type operator 
db.getCollection('interview').find({"friends.age":{$type:["int",1]}}).pretty()
//using the $regex operator as below 
db.getCollection('interview').find({"friends.name":{$regex:"^L",$options:"i"}}).pretty()



