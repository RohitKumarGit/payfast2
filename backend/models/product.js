const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ProductSchema = Schema({
    name : String,
   
    unit:String,
    price :Number,
    shop:{
        type:Schema.Types.ObjectId,
        ref:"Shop"
    }
})
const Product = mongoose.model("Product",ProductSchema)
module.exports = Product