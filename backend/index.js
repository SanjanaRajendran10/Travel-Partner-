const express=require('express')
const mongoose=require('mongoose')
const routeradmin=require('./routes/admin')
const cors =require('cors')
const app=express()
mongoose.connect('mongodb://127.0.0.1:27017/Project')

app.use(cors())
mongoose.connection.on('connected',()=>{
    console.log('mongo DB connected');
})

app.get('/',(req,res)=>{
    res.send('backend page')
})

app.use('/admin',routeradmin)
app.listen(6005,()=>{
    console.log('server connected ');
})