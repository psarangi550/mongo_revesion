//using the person database
use('persondb')
//fetching all the document from the collections
db.getCollection("person").find({})
//calculating the total number of fruits available
db.getCollection("person").aggregate([
        {$group:{_id:"$favoriteFruit"}},
        {$count:"fruits"}
        ])
//fetchinf  all the document in this case
db.getCollection("person").find({}) 
//using the accumulator operator
db.getCollection("person").aggregate(
    [
    {$match:{age:NumberInt(25)}},
    {$group:{_id:"$age", sumOfIndex:{$sum:1}}}
    ])
//another example
db.getCollection("person").aggregate(
    [
    {$match:{age:NumberInt(25),gender:"female"}},
    {$group:{_id:"$gender",sumOfIndex:{$sum:"$index"}}}
    ])
//fetching all the docs
db.getCollection("person").find({})
//counting the values of the docs
db.getCollection("person").aggregate([
        {$unwind:"$tags"},
        {$group:{_id:"$tags",total_id:{$sum:1}}},
        {$sort:{"total_id":1}},
        {$match:{_id:"nulla"}}
        ])
//with a particular match
db.getCollection("person").aggregate([
        {$match:{"tags":"sint"}},
        {$unwind:"$tags"},
        {$group:{_id:"$tags",total_id:{$sum:1}}}
        ]).itcount()