const express = require('express')
const Router = new express.Router()
const Shop = require('../models/shop')
Router.post('/',async (req,res)=>{
    try {
        
        const shop = await Shop.create(req.body)
        res.send({
            error:false,
            shop
        })
    } catch (error) {
        
        res.status(400).send({
            error:true
        })
    }
})
Router.post('/verify',async (req,res)=>{
    try {
        const shop = await Shop.find({email:req.body.email})
        if(shop.length == 0 ){
            res.send({
                new:true
            
            })
        }
        else {
            res.send({
                new:false,
                shop:shop[0]
            })
        }
    } catch (error) {
        res.status(400).send()
    }
})
module.exports = Router