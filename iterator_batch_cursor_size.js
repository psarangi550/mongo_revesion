//iterating using the cursor anfd their methods
//here using the BatchSize and IteratorSize in here
use('revesion')
db.createCollection("sample")
//using JS to create the 100 document for reference
let arr1=[];
for (let x=1; x<100;x++){
    obj={index:NumberInt()(x)};
    arr.push(obj);
}
//inserting multiple values into the same 
db.getCollection("sample").insertMany(arr1)
//now fetching the value as below 
db.getCollection("sample").find({})
//deleting the collection as 
db.getCollection("sample").drop()
//checking the collections
show collections
db.getCollection("sample").findOne({})
//used for fetching the next documents
let iter_all=db.getCollection("sample").find({})
iter_all.next();
db.getCollection("sample").find()
//hasNext()---->return True if the cursor has next docs
let iterall=db.getCollection("sample").find({})
iter_all.hasNext();
//objLeftInBatch():---->represent how many documents present in the batch
let iter_all=db.getCollection("sample").find({})
//checking how many document left in the batch
iter_all.objsLeftInBatch();
//iterating using the next method one by one
iter_all.next();
iter_all.next();
iter_all.next();
//checking how many document left in the batch
iter_all.objsLeftInBatch();
//using the forEach method with manually converting to the JSON object 
iter_all.forEach((element)=>{
    print(JSON.stringify(element))
})
//similarly we can use printjson function with the forEach loop as 
iter_all=db.getCollection("sample").find({})
iter_all.forEach(printjson)
//printing the inde of each document console term as 
iter_all=db.getCollection("sample").find({})
iter_all.forEach((element)=>{
    print(`Element having Id ${element._id} and index as ${element.index}`)
})
//usgae of count()/skip(<number>)/limit(<number>)/sort({<field>:-1/1}) on the cursor
iter_new_all=db.getCollection("sample").find({})
iter_new_all.sort({index:-1}) 


