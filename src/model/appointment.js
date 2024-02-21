const mongoose = require('mongoose')


const appointmentschema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      notes: {
        type: String,
      },
      patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient',
        required: true,
      },
      doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true,
      },
})

const Appointment = mongoose.model("Docter",appointmentschema)
module.exports = Appointment