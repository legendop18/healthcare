const express = require("express")
const router = express.Router()
const  {registerdoctor, getalldocter, finddoctor, updatedoctorprofile} = require("../controllers/doctor.controllers.js")
const { isAuthencated } = require("../middleware/auth.js")


router.route("/applyfordocter").post(registerdoctor)
router.route("/alldocter").get(getalldocter)
router.route("/finddocter").get(finddoctor)
router.route("/updateprofile").put(isAuthencated,updatedoctorprofile)



module.exports = router