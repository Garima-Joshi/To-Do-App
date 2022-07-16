//express import
const express= require('express');
const router= express.Router();
//importing controller
const home_contoller=require('../controllers/home_controller');
//console.log("router is working");

//routes
router.get('/',home_contoller.home);
router.get('/show-specific',home_contoller.show_specific);
router.get('/delete-task',home_contoller.delete_task)
router.post('/create-task',home_contoller.create_task);

//to be used by index.js
module.exports=router;