
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
const app = express();
app.use(cors());
app.use(express.json())
app.listen(8080,()=>{
    console.log("Server Started on port 8080");
});

app.get("/", (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Express App Links</title>
    </head>
    <body>
      <h1>Express App Routes</h1>
      <ul>
        <li><a href="/greet">Greet</a></li>
        <li><a href="/name">Name</a></li>
        <li><a href="/weather">Weather</a></li>
        <li><a href="/products">Products</a></li>
      </ul>
    </body>
    </html>
  `;
  res.send(html);
});

app.get("/greet",(req,res)=>{
    return res.send("Greetings fellow!");
});

app.get("/name",(req,res)=>{
  return res.send("<h1>Bhargava Ram</h1>");
});

app.get("/weather",(req,res)=>{
  return res.send("Weather is sunny 40 degrees");
});

// const products = [
//   { id: 1,name:"Product 1",price:900},
//   { id: 2,name:"Product 2",price:200},
//   { id: 3,name:"Product 3",price:300}
// ];
app.get("/products",(req,res)=>{
 return res.json(products);
})
app.listen(8080,()=>{
    mongoose.connect("mongodb://localhost:27017/gcet");
    console.log("Server connected to Mongo DB");
});


app.post("/register",async(req,res)=>{
    const {name,email,password}=req.body    
 const result= await user.insertMany({name:name,email:email,password:password});
 return res.json(result);
});

app.post("/login",async(req,res)=>{
    const {email,password}=req.body    
 const result= await user.findOne({email:email,password:password});
 if(result)
 {
  return res.json("login succesful!!");  
 }
 else{
    return res.json("access denied!!");
 }
 
});


app.post("/products",async(req,res)=>{
    const{name,price}=req.body;
    const found= await product.findOne({name,price:Number(price)});
    if(found)
 {
  return res.json(found);  
 }
 else{
    return res.json("product unavaliable!!");
 }
})