import express from 'express'
const app = express()
app.listen(8080,()=>{console.log("Server Started")});
app.get("/",(req,res)=>{
    return res.send("Good morning!")

});
app.get("/greet",(req,res)=>{
    return res.send("Greetings fellow!")

});
app.get("/name",(req,res)=>{
    return res.send("Bhargava Ram")

});
app.get("/weather",(req,res)=>{
    return res.send("35")

});
app.get("/products",(req,res)=>{
   const products=[
    {name:"product 1",price:"45"},
    {name:"product 2",price:"95"},
    {name:"product 3",price:"50"},
   ]
   return res.json(products);

});