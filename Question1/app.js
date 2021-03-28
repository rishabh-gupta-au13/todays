const express = require('express');
const mongoose = require("mongoose")

const app = express();
const hbs = require("hbs")
const path = require('path')

const connectDB = require('./db/conn')
connectDB()
const Formdata = require("./models/form")
const PORT = process.env.port || 5000;
const publicPath = path.join(__dirname, "public")

// to setup the view engine
app.set("view engine", "hbs")



// to set up the static directory
app.use(express.static(publicPath))

// to convert json in string
app.use(express.json());

// to convert form data 
app.use(express.urlencoded({ extended: false }))


const form = require('./API/form')


app.use('/form', form)



app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`)
})