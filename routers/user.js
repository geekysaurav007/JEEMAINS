const express=require('express')
const {saveUsers,loginUser}=require('../controllers/userController')
const userRouter=express.Router()
userRouter.post('/login',loginUser)
userRouter.post('/signup',saveUsers)
module.exports={userRouter}