const mongoose = require('mongoose')
const Schema = mongoose.Schema 
const ShopSchema = new Schema({
    sname : String ,
    name :String,
    phone :{
        type:Number,
        required:true
    },
    email :{
        type:String ,
        required :true
    },
    pin_code :{
        type:Number
    },
    address:{
        type:String
    },
    alt_phone :{
        type:Number
    },
    alt_email :{
        type:String
    },
    aadhar :{
        type:String 
    },
    gst:{
        type:String
    },
    pan :{
        type:String
    }
})
const Shop = mongoose.model("Shop",ShopSchema)
module.exports = Shop