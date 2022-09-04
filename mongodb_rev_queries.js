use('persondb')
//displaying the db
db.getCollection('person').find()
//using the implicit and operator
db.getCollection('person').find({gender:"female",favoriteFruit:"banana"}).count()
//using the explicit $and operator
db.getCollection('person').find({$and:[{gender:"female"},{favoriteFruit:"banana"}]}).count()
//querying the nested field docs
db.getCollection('person').find(
    {$or:[{$and:[{age:{$gte:37}},{age:{$ne:37}}]},{"company.location.country":"Italy"}]}
    // {$and:[{age:{$gte:37}},{age:{$ne:37}}]}
    ).sort({"age":1}).count()
    
//checking the value
db.getCollection('person').find({
    tags:{$all:["excepteur","cillum", "exercitation"]}
})
//using the size operator in here
db.getCollection('person').find(
    {tags:{$size:4}}
    ).count()
db.createCollection('demo')
//here checking the insert command
db.demo.insert({
    "friends":[
            {
                "name":"Lora",
                "age":NumberInt(23)
            },
            {
                "name":"Bob",
                "age":NumberInt(25)
            }
        ]
})
//here we are using the query command  by find
db.getCollection("demo").find({})

//here we are using the find command with nested docs
db.getCollection("demo").find(
    {"friends":{"name":"Lora","age":23}}
    )
//here we can use the elemMatch
db.getCollection("demo").find(
    {"friends":{$elemMatch:{"age":23,"name":"Lora"}}}
    )
//another usage of $elemMatch
db.getCollection('demo').find()
//field filtering 
db.getCollection('demo').find({},{_id:0})
//updating the docs


//usage of normal search which will consider either of the condition value 
db.getCollection("demo").find(
    {"friends.name":"Lora","friends.age":{$gt:23}}
    )

//usage of elemMatch which will match all the condition to a particular document 
db.getCollection('demo').find(
    {friends:{$elemMatch:{name:"Lora",age:{$gte:23}}}}
    )