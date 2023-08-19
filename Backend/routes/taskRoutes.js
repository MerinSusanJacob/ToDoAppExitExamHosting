const express=require('express');
const router=express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

const taskData=require('../model/taskData');

//to get tasks
router.get('/getdata', async (req,res)=>{
    try {
        const data=await taskData.find();
        res.json(data);
    } catch (error) {
        res.json({message:"Not successful"});
    }
});


// to add tasks
router.post('/postdata', async (req,res)=>{
    try {
        const item=req.body;
        const newdata=new taskData(item);
        await newdata.save();
        res.json({message:"Posted successfully"});
    } catch (error) {
        res.json({message:"Post not successful"});  
    }
});

//to delete tasks
router.delete('/deldata/:id', async (req,res)=>{
    try {
        const ind=req.params.id;
        await taskData.findByIdAndDelete(ind);
        res.json({message:"Deleted successfully"});
    } catch (error) {
        res.json({message:"Deletion not successful"});
    }
});

module.exports=router;