const mongoose = require('mongoose')



const appointmentSchema = new mongoose.Schema({
  doctorName: {
    type: String,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  maxWaitTime: {
    type: Number,
    required: true
  }, // In minutes
  address: {
    type: String,
    required: true
  },
  availableSlots: {
    today: { type: [String], default: [] },
    tomorrow: { type: [String], default: [] },
    nextDay: { type: [String], default: [] }
  },
  userid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"

  }

});


const Appointment = mongoose.model("Appointment", appointmentSchema)
module.exports = Appointment