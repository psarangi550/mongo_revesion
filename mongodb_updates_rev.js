//accessing the database
use('prepare')
//creating the collection inside the db
db.createCollection('shoppingCart')
//here we need to use the insert command as below 
db.getCollection('shoppingCart').insert(
    [
        {index:NumberInt(1)},
        {index:NumberInt(2)},
        {index:NumberInt(3)},
        {index:NumberInt(4)},
        {index:NumberInt(5)}
    
    ]
)
//how here we are adding the cart array to all the indexes using the update command as
db.getCollection('shoppingCart').update(
    {},
    {$set:{cart:[]}},
    {multi:true}
)
//fetching the value as below 
db.getCollection('shoppingCart').find({index:NumberInt(1)}).pretty()
//adding the value using the $push(update operator) and $each(modifier operator)
db.getCollection('shoppingCart').update(
        {index:NumberInt(1)},
        {$push:{cart:"item1"}}
) 
//here i am also using the $each operator 
db.getCollection('shoppingCart').update(
        {index:NumberInt(2)},
        {$push:{cart:{$each:["item1","item2"]}}}
) 
//fetching the value as below 
db.getCollection('shoppingCart').find({index:NumberInt(2)}).pretty()
//here i am using the $sort modifier operator
db.getCollection('shoppingCart').update(
        {index:NumberInt(3)},
        {$push:{cart:{$sort:["item1","item3","item2"]}}}
)
//fetching the value as below 
db.getCollection('shoppingCart').find({index:NumberInt(3)}).pretty()
//deleting the item by using the $ operator 
db.getCollection('shoppingCart').update(
    {index:3.0},
    {$unset:{cart:1}}
    )
db.getCollection('shoppingCart').update(
    {index:3.0},
    {$push:{cart:{$each:['item1','item2']}}}
    )
db.getCollection('shoppingCart').update(
    {index:3,cart:"item2"},
    {$set:{"cart.$":"updatedItem2"}}
)

use('shoppingCart')
show collections
db.person.insert(
{cart:[
    {
        title:"TV",
        prince:NumberInt(340),
        quantity:NumberInt(2)
    },
    {
        title:"Phone",
        price:NumberInt(150),
        quantity:NumberInt(1)
    
    }
]})

db.getCollection('person').find({})
db.getCollection('person').update(
    {cart:{$elemMatch:{"title":"TV","quantity":NumberInt(2)}}},
    {$set:{"cart.$.title":"BIGTV","cart.$.quantity":NumberInt(3)}}
)

db.getCollection('person').find({})
