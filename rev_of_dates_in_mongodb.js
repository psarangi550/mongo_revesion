//using the revesion database
use('revesion')
//creating the collection named as ibmprep 
db.createCollection("ibmprep")
//this will create the date in the string format rather than the ISODate Format
// here the current date will be provided as no args but in the format of the string
Date()
//this will create the date in the form of the ISODate format for both the cases
//as no params passed hence provide the cureent value 
new Date()
ISODate()
// in the below cases where August considered then we can go for the month as alphabet then timezone considered  
new Date('August 2018 , 16')
new Date('2018 August 16')
//here the month starts with the 0 instead of 1 hence 8 considered as sept rather than august
//here also timezone considered
new Date(2018,8,16)
//but on the below cases the timezone will not be considered 
new Date("2018-8-16")