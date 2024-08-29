const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    name:{type:String,required:true},
    isAdmin:{type:Boolean,default:false},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    category:{type:String},
    roll_no:{type:String},
   
},{timestamps:{createdAt:'created_at',updatedAt:'updated_at'}})
const User=(mongoose.model("user",userSchema))
module.exports={User}