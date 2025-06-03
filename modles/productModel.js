const productSchema=mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    
});
const product=mongoose.model("Products",productSchema);