const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["docter", "user"],
        default: "user"

    },
    avatar: {
        type: String,
    },
    dob: {
        type: Date,
        required: true
    },
    bloodgroup: {
        type: String,
        enum: ['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'other'],
        required: true,
    },
    address: [
        {
            street: String,
            city: String,
            state: String,
            zip: String,
            
        },
        
    ],
    phonenumber: {
        type: Number,
        required: true
    },
    medicalrecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
    },
    appointment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }

})

userschema.pre("save", async function(next){
    if(this.isModified("password")) next()

    this.password = await bcrypt.hash(this.password,10)
    next()
})
userschema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}
userschema.methods.generatetoken = async function(){
    return jwt.sign({_id: this.id},process.env.JWT_SECRET)
}

const User = mongoose.model("User", userschema)
module.exports = User