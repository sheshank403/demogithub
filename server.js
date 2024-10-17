const express=require('express');
const mongoose=require('mongoose');
const brandname=require('./model');

const app=express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/demodb').then(
    ()=>console.log('db connect...')
    ).catch(err=>console.log(err))

app.get('/',(req,res)=>{
    res.send('<h1>hello word..!</h1>');
})

//adding value using api

app.post('addbrands',async(req,res)=>{
    const {brandname}=req.body;
    try{
      const newdata=new brandname({brandname});
      await newdata.save();
      return res.json(await brandname.find());
    }
        catch(err){
            console.log(err.message);
        }
    })

app.listen(3000,()=>console.log('server running..!')); 
