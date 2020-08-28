const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const MainRouter = require('./routes/mainroute')
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/',MainRouter)

const Mongourl = 'mongodb://localhost:27017/Mernprojectreal'
const MongoOnline = 'mongodb+srv://dbblog:123Qwe1!@cluster0.4fcxt.mongodb.net/Mernprojectreal?retryWrites=true&w=majority'
mongoose.connect( MongoOnline || Mongourl,{useNewUrlParser:true,useUnifiedTopology:true},(err)=> {
    if(!err)
        console.log('Yes Connected to MongoDB')
    else
        console.log('Not Connected')
})



if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*',(req, res)=> {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}

app.listen(PORT,()=>console.log(`Running on ${PORT}`))