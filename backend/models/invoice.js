const mongoose = require('mongoose');
const Schema = mongoose.Schema
const {customAlphabet } = require('nanoid')
var nanoid = customAlphabet('ABCDEFGHIJKLMNPOPQRSTUVWXYZ123456789',6)
const InvoiceSchema = Schema({
    customer_name :String ,
    customer_phone:Number ,
    sid:{
        type:String,
        default:nanoid
    },
    paid:{
        type:Boolean,
        default:false
    },
    shop_id :{
        type:Schema.Types.ObjectId,
        ref:"Shop"
    },
    items :[{
        id :{
            type:Schema.Types.ObjectId,
            ref:"Product"
        },
        count : Number
    }],
    discount :{
        type:Number,
        default:0
    },
    credit :{
        type:Number,
        default:0
    },
    total:Number,

},{
    timestamps:true
})
const Invoice = mongoose.model("Invoice",InvoiceSchema)
module.exports = Invoice

