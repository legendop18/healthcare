const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const docterschema = new mongoose.Schema({


    username: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default :"docter",
        
    },
    phonenumber:{
        type:Number,
        default: 10,
        required:true
    },
    qualifications: {
        type: String,
        required: true
    },
    specialties: {
        type: String,
        required: true
    },
    experience: {
        type:String,
        required:true
    },
    ratings: {
        type: Number,
    
    },
    description: {
        type: String,
        required: true
    },
    appointment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Appointment"
    },
    status:{
        type:String,
        default:"pending"
    }




});

docterschema.pre("save", async function(next){
    if(this.isModified("password")) next()

    this.password = await bcrypt.hash(this.password,10)
    next()
})
docterschema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
docterschema.methods.generatetoken = async function(){
    return jwt.sign({_id: this.id},process.env.JWT_SECRET)
}



const Docter = mongoose.model("Docter", docterschema)
module.exports = Docter