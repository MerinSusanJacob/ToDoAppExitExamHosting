const mongoose=require('mongoose');
const taskSchema=mongoose.Schema({
    itemno:{
        type:Number,
        required:true
    },
    task:{
        type:String,
        required:true
    },
    status:{
        type:String
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
});
const taskModel=mongoose.model('taskData',taskSchema);
module.exports=taskModel;