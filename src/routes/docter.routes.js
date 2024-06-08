const express = require("express")
const router = express.Router()
const  {registerdoctor, logindocter, getalldocter, finddoctor} = require("../controllers/doctor.controllers.js")

router.route("/applyfordocter").post(registerdoctor)
router.route("/login").post(logindocter)
router.route("/alldocter").get(getalldocter)
router.route("/finddocter").get(finddoctor)




module.exports = router