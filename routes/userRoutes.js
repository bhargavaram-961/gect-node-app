import express from 'express'
import userModel from '../models/userModel.js'

const userRouter = express.Router();

userRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body    
 const result= await userModel.insertMany({name:name,email:email,password:password});
 return res.json(result);
});


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body    
 const result= await userModel.findOne({email:email,password:password});
 if(result)
 {
  return res.json("login succesful!!");  
 }
 else{
    return res.json("access denied!!");
 }
 
});

export default userRouter