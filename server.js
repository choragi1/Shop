const express = require('express')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
const mongoose = require('./server/lib/db')
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors')
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})

app.use(express.static(path.join(__dirname, '../client/build')))

app.use('/api', (req,res)=>{
    res.json({username : 'choragi'})
})

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
})