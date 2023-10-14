// Require library
const mongoose=require('mongoose');

// create schema(blueprint) for the tasks

const taskSchema = new mongoose.Schema({
    description : {
        type : String,
        required : true,
    },
    category :{
        type : String,
        required : false,
    },
    dueDate : {
        type : String,
        required : false,
    }
});

const TODOLists =mongoose.model('todo_list',taskSchema);

module.exports=TODOLists;