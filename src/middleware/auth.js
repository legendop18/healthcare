const jwt = require("jsonwebtoken")
const User = require("../model/users")




const isAuthencated = async (req,res,next) =>{
    const token = req.cookies["token"]

    if(!token) {
        return res.status(404).json("please login ")
    };


    const decoded = jwt.verify("token",process.env.JWT_SECRET)
    req.User= decoded
    
    next()
}





module.exports = {isAuthencated}