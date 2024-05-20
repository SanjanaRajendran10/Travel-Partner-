const mongoose =require('mongoose')
const adminschema= new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

const AdminModel =mongoose.model('/admin-schema',adminschema)

module.exports=AdminModel;