
//import mongoose library
const mongoose= require('mongoose');

//connecting to db (db with 'toDo_db' name will be created)
mongoose.connect('mongodb://localhost/toDo_db');

//acquiring db connection
const db= mongoose.connection;

//check for error
db.on('error',function(err){
    console.log(err.message);
});

//if working print message to console
db.once('open',function(){
    console.log('Successfully connected to db');
});
