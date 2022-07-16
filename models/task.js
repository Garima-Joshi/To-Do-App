const mongoose= require('mongoose');
//Schema definition
const taskSchema=new mongoose.Schema({
    Title:{
        type:String,
        required:true
    },
    Description:{
        type:String,
    },
    Date:{
        type:String,
        required:true
    },
    Time:{
        type:String,
    },
    Category:{
        type:String,
        required:true
    }
    
});
//Collection defining with schema
const Task=mongoose.model('Task',taskSchema);
module.exports=Task;