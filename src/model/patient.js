const mongoose = require('mongoose')


const patientschema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    age : {
        type: Date,
        required: true
    },
    bloodgroup:{
        type:String,
        enum:['A+','B+','A-','B-','AB+','AB-','O+','O-'],
        required:true
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
            required:true
        },
    ],
    phonenumber: {
        type: Number,
        required:true
    },
    medicalrecord: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MedicalRecord",
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    }

})


const Patient = mongoose.model("Patient", patientschema)
module.exports = Patient