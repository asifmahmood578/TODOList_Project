const express =require('express');
const router=express.Router();
const homecontroller= require('../controllers/home');

// Returning response fron the server
router.get('/',homecontroller.home);

// for creating todo
router.post('/create-todo',homecontroller.create);

// for delete todo
router.post('/delete-todo', homecontroller.delete);

console.log('router loaded');

module.exports=router;