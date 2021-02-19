const express = require('express')
const Router = new express.Router()
const Product = require('../models/product')
Router.post('/',async (req,res)=>{
    
    try {
        const product = await Product.create(req.body)
        res.send({
            error:false,
            product
        })
    } catch (error) {
        console.log(error)
        res.status(400).send()
    }
})
Router.get('/:id',async (req,res)=>{
    console.log(req.body)
    try {
        const item = await Product.findById(req.params.id)
        res.send({
            error:false,
            item
        })
    } catch (error) {
        console.log(error)
        res.send({
            error:true
        })
    }
})
Router.put('/',async (req,res)=>{
   
    try {
        const product = await Product.findByIdAndUpdate(req.body.id,req.body.changes)
        res.send({
            error:false,
            product
        })
    } catch (error) {
        res.status(400).send()
    }
})
Router.post('/remove',async (req,res)=>{
    console.log(req.body)
    try {
         await Product.deleteOne({_id:req.body.id})
        res.send({
            error:false,
           
        })
    } catch (error) {
        console.log(error)
        res.send({
            error:true
        })
    }
})
Router.get('/',async (req,res)=>{
    try {
       
        const products = await Product.find({
            shop:req.query.id
        })
        res.send({products:products.reverse()})
    } catch (error) {
        console.log(error)

    }
})
module.exports = Router