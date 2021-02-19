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
module.exports = Router