const express = require("express")
const router = express.Router()
const  {registerdoctor, logindocter} = require("../controllers/doctor.controllers.js")

router.route("/applyfordocter").post(registerdoctor)
router.route("/login").post(logindocter)

module.exports = router