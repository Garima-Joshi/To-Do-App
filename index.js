//imports

//express import
const express= require('express');

//mongoose file import
const db=require('./config/mongoose');

//port and app defining
const port=8000;
const app= express();

//parser
app.use(express.urlencoded());

//Middleware for date conversion
app.use(function(req,res,next){
    if(req.body.date!=undefined){
        console.log(typeof(req.body.date)+" date "+req.body.date)
        var date = req.body.date.split("-");
        date = new Date(date[0], (date[1]-1), date[2], 0, 0, 0).toDateString().split(" ");
        req.body.date=(`${date[1]} ${date[2]} , ${date[3]} , ${date[0]}`);
    }
    else if(req.query.search_item=='Date'){
        var date = req.query.search_keyword.split("-");
        date[1]=date[1]-1;
        date = new Date(date[0], date[1], date[2], 0, 0, 0).toDateString().split(" ");
        req.query.search_keyword=`${date[1]} ${date[2]} , ${date[3]} , ${date[0]}`;
        console.log("query : "+ req.query.search_keyword);
    }
    
    next();
})

//Middleware for time conversion
app.use(function(req,res,next){
    if(req.body.time!=undefined&&req.body.time!='')
    {
        const time = req.body.time.split(":");
        req.body.time = (time[0] % 12) + ":" + time[1];
        if (time[0] / 12 == 0) {
            req.body.time=req.body.time + " AM";
        }
        else
            req.body.time = req.body.time + " PM";
    }
        
    next()
})

//setting ejs engine and view folder
app.set('view engine','ejs');
app.set('views','./views');

//use express router
app.use('/',require('./routes/home'));   //always set router after middleware

//importing static files
app.use(express.static('assets'));

//server listening at port 8000
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting server ${err}`);
    }
    console.log(`Successfully running the server on port : ${port}`);
})