//using the database
use('persondb')
//displaying the column name
show collections
//fetching all the details 
db.getCollection("person").find({})
//here fetching the result using the find()
db.getCollection("person").find({tags:{$size:3}}).count()
//here fetching the result using the aggregate() method along with $match and $size query
db.getCollection("person").aggregate([
    {$match:{tags:{$size:3}}},
//    {$count:"tags"}
    ])
//fetching all the documents in the mongoDB as below 
db.getCollection("person").find()
//here we are doing the $group first and then the $match in the aggregation
db.getCollection("person").aggregate([
        {$group:{_id:{_id:"$_id",age:"$age"}}},
        {$match:{"_id.age":NumberInt(31)}}
        ])
        
//fetching from all the documents
db.getCollection("person").find({tags:null})       
//using the positional operator in $set and $unset as below 
db.getCollection("person").update(
    {tags:"at"},
    {$unset:{"tags.$":1}}
)
//deleting the element from the array after unsetting to null value 
db.getCollection("person").update(
    {tags:null},
    {$pop:{tags:-1}}
)
//using the itcount() and toArray() method with length attribute
//using the toArray().length //clientside count will happen
db.getCollection("person").aggregate([
        {$match:{favoriteFruit:"banana"}}
        ]
        ).toArray().length
//using the itcount() //clientside count will happen
db.getCollection("person").aggregate([
        {$match:{favoriteFruit:"banana"}}
        ]
        ).itcount()
//using the $count as below //serversite count will happen
db.getCollection("person").aggregate([
        {$match:{favoriteFruit:"banana"}},
        {$count:"favoriteFruit"}
        ]
        )
//fetching the count as below 
db.getCollection("person").aggregate([{
    $count:"TotalDocs"
}])

