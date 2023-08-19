const express=require('express');
const app=express();
const morgan=require('morgan');
const cors = require('cors');
app.use(morgan('dev'));
require('dotenv').config();
app.use(cors());

require('./db/mongodb');

const api=require("./routes/taskRoutes");
app.use('/api',api);


const path = require('path');
app.use(express.static(path.join(__dirname,'/build')));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname,'/build/index.html'))
});

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running in PORT ${PORT}`);
});