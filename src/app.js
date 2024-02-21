const dotenv = require('dotenv')
const express = require('express')
const app = express()
dotenv.config()


app.use(express.json({limit:"32kb"}))
app.use(express.urlencoded({extended :true}))
app.use(express.static("public"))



// routes import 

const userRouter = require('./routes/users.routes.js')

//routes declartion

app.use("/api/v1/users", userRouter)




module.exports = app