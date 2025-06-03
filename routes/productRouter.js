import express from 'express'
import productModel from '../models/productModel.js'

const productRouter = express.Router();
productRouter.post("/products",async(req,res)=>{
    const{name,price}=req.body;
    const found= await productModel.findOne({name,price:Number(price)});
    if(found)
 {
  return res.json(found);  
 }
 else{
    return res.json("product unavaliable!!");
 }
});



export default productRouter