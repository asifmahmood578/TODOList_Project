// require a library
const mongoose = require('mongoose');

//connect to the database
 mongoose.connect('mongodb://127.0.0.1:27017/todo_list');
// mongoose.connect('mongodb://127.0.0.1/todo_list');
// mongoose.connect('mongodb://localhost:27017/todo_list', { useNewUrlParser: true, useUnifiedTopology: true });


// Acquire the connection
const db=mongoose.connection;

//error handeling
db.on('error', console.error.bind(console,'Error in connecting the database'));

// Up and running then print the message
db.once('open',function(){
    console.log("Successfully connected to the database");
})

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/todo_list', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Error in connecting to the database'));

// db.once('open', function () {
//   console.log('Successfully connected to the database');
// });