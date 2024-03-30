const mongoose = require('mongoose')


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
        tyep: String,
    },
    dob: {
        type: Date,
        required: true
    },
    bloodgroup: {
        type: String,
        enum: ['A+', 'B+', 'A-', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        required: true
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
            required: true
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


const User = mongoose.model("User", userschema)
module.exports = User