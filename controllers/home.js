const TODOLists = require('../models/tasks');

// rendering the home page
module.exports.home = async(req,res)=>{
    // fetching  mongoose
    try{
        let todo = await TODOLists.find({});
        console.log(todo);
        return res.render('home',{
            title : 'TODOList',
            todoList : todo
        })
    }
    catch(err){
        console.log("Error",err);
        return;
    }
}

// format the date properly to store in the database
const monthNames =["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
"JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];

function formatDate(dueDate){
    if(dueDate.length == 0){
        return "NO DEADLINE" ;
    }
    const date = new Date(dueDate);
    return monthNames[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear();
}

// function for creating TODO List
module.exports.create =async(req,res)=>{
    try{
        // new TODO and store in db
        const newTODO=await TODOLists.create({
            description : req.body.description,
            category : req.body.category,
            dueDate : formatDate(req.body.dueDate)
        });

        // redirect to homepage
        return res.redirect("/");
    }
    catch(err){
        console.log("Error in creating a TODO List");
        return;
    }
}

//utility function to delete a single task
function deleteOne(task){
    // The .exec() method is a function provided by Mongoose that is used to execute a query. 
    return TODOLists.findByIdAndDelete(task).exec();
}

//function to delete the task fro the database
function deleteTasks(tasks){
    if(typeof tasks == 'string'){
        deleteOne(tasks);
    }
    else{
        for(let task of tasks){
            deleteOne(task);
        }
    }
}

// deleting the task from the database
module.exports.delete = async function(req, res) {
    try {
      var obj = req.body;
  
      if (obj && Object.keys(obj).length === 0) {
        return res.redirect('back');
      }
  
      var result = await deleteTasks(req.body.tasks);
  
      return res.redirect('back');
    } catch (err) {
      console.log("Error in the delete function:", err);
      return res.status(500).send("Internal Server Error"); // Handle the error appropriately
    }
  }