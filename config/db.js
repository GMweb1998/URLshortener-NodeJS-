const mongoose = require('mongoose');
const config = require('config');
const DB_URI = config.get('DB_CONNECT');


//DB connection
const connDB = async() =>{
    try{
        await mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected to DB');
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }

}    
module.exports = connDB;

// var DB = mongoose.connection;
// DB.on("error", console.error.bind(console, "connection error:"));
// DB.once("open", function () {
//   console.log("we are connected to DB via mongoose!");
// }); 