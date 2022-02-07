const express = require("express");
const app = express()
const parser = require('body-parser')
app.use(parser.json())
var morgan = require('morgan')
const path = require('path')
const port = process.env.PORT || 8082;
require('dotenv').config()

app.use(morgan('tiny'))
const mongoose = require('mongoose')
const ProductRouter = require('./routers/products')
const ShopRouter = require('./routers/shop')
const InvoiceRouter = require('./routers/invoice')
const history = require('connect-history-api-fallback')
app.use(history({
  verbose: false,
  disableDotRule:false
}));
app.use('/', express.static(path.join(__dirname, '../dist')));

app.use('/api/product',ProductRouter)
app.use('/api/shop',ShopRouter)
app.use('/api/invoice',InvoiceRouter)
app.use('/', express.static(path.join(__dirname, 'dist')));
const uri = process.env.URI

mongoose.connect(uri, {
    useNewUrlParser: "true",
  })
  mongoose.connection.on("error", err => {
    console.log("err", err)
  })
  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
  })


app.listen(port, function (err) {
    if (!err) {
      console.log("server is running at ", port)
    }
  })