const express = require('express');
const {getAllUser}=require("./controllers/userController")
require('dotenv').config()
const morgan = require('morgan')
const app = express()
app.use(express.json())
var cors=require('cors')
app.use(cors({ origin: 'http://localhost:4200' }));

app.use(morgan('dev'))
const { userRouter } = require('./routers/user');
const { meritRouter } = require('./routers/merit');
require('./database/connection')()

app.listen(3000, () => {
    console.log("RUNNING ON 3000")
})
app.get("",(req,resp)=>{
    resp.json("heloo i m working Jee result server will hbe live soon")
})
const apiRouter = express.Router()
apiRouter.get('', async(req, resp) => {
    const data=await getAllUser()
    resp.json({ "message": "hello saurav",data:data })
})
app.use('/api', apiRouter)

apiRouter.use('/users', userRouter)
apiRouter.use('/merit',meritRouter)
