const mongoose = require('mongoose')


const medicalRecordschema = new mongoose.Schema({
   date:{
    type:Date,
    default : Date.now()
   },
   docter:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Docter"
   },
   diagnosis:{
    type:String,
    required:true
   },
   medications:{
    type:String,
    required:true
   },
   notes:{
    type:String,
    required:true,
   }
  
  
  
})


const Medicalrecord = mongoose.model("MedicalRecord", medicalRecordschema)
module.exports = Medicalrecord