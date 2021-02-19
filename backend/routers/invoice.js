const express = require('express')
const Router = new express.Router()
const Invoice = require('../models/invoice')
const axios = require('axios')
Router.post('/',async (req,res)=>{
    try {
        
        await Invoice.create(req.body)
        res.send({
            error:false
        })
        const {data} = await axios.get("https://api.textlocal.in/send/",{
            params:{
                apikey:"NSGroYZTezo-Yqep4HL92jf5ajj75Un1LSgg0wR8T2",
                test:true,
                message:"test message",
                sender:"Rohit",
                "numbers":"916203861756"
            }
        })
        console.log(data)
    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
})
Router.post('/pay',async (req,res)=>{
    try {
        console.log(req.body.id)
        const inv = await Invoice.findByIdAndUpdate(req.body.id,{paid:true})
        console.log(inv)
        res.send({
            error:false,inv
        })
        
       
    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
})
Router.get('/',async (req,res)=>{
    console.log(req.query)
    try {
        var invoices = await Invoice.find({
          
            shop_id : req.query.id
        }).populate("items")
       
        res.send({
            invoices:invoices.reverse()
        })
    } catch (error) {
        console.log(error)
    }
})
Router.get('/sid',async (req,res)=>{
    try {
        var invoice = await Invoice.findOne({
            sid:req.query.sid
        }).populate('items.id shop_id')
        res.send({invoice})
    } catch (error) {
        res.status(400).send()
    }
})
module.exports = Router