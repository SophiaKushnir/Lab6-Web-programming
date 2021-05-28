var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.extet.mongodb.net/myFirstDatabase');
console.log("mongodb connect...")
module.exports=mongoose;
