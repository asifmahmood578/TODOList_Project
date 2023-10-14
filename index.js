// requiring modules
const express = require('express');
const app = express();
const port = 8000;
const expressLayout = require('express-ejs-layouts');


const db= require('./config/mongoose');

//middleware

// added the parser it signifies the middleware
// It's a middleware parses this data and makes it available in the req.body object of the express request object
app.use(express.urlencoded());

// for getting static files
app.use(express.static('assets'));

app.use(expressLayout);

// extract style and script from sub pages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


// set template/view engine
app.set("view engine", "ejs");
app.set("views", "./views"); // by default it's name is 'view' we can change using this

// any request comes it reqiure 
app.use('/', require('./routes/index'));// any request comes,


// listening request from express server
app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
})