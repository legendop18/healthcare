const mongoose = require('mongoose')


const docterschema = new mongoose.Schema({


    username: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default :"doctor",
        
    },
    profileClaimed: {
        type: Boolean,
        default: false
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
        overall: {
            type: String,
            required: true
        },
        asSpecialist: {
            type: String,
            required: true
        }
    },
    registrations: {
        medical: {
            type: String,
            required: true
        },
    },
    ratings: {
        type: Number,
        required: true
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
        type:Boolean,
        default:"pending"
    }
});



const Docter = mongoose.model("Docter", docterschema)
module.exports = Docter