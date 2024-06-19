const jwt = require("jsonwebtoken");
const Docter = require("../model/docter.js");

const registerdoctor = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      qualifications,
      specialties,
      description,
      phonenumber,
      experience,
      role,
    } = req.body;

    const existingdoctor = await Docter.findOne({ email });

    if (existingdoctor)
      return res.status(404).json({
        success: false,
        message: "docter already registered",
      });

    const doctor = await Docter.create({
      username,
      email,
      password,
      qualifications,
      specialties,
      description,
      phonenumber,
      experience,

    });



    await doctor.save();

    if (!doctor)
      return res.status(404).json({
        success: false,
        message: "please enter the required detail",
      });

    return res.status(201).json({
      success: true,
      message: "doctor registered successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const getalldocter = async (req, res) => {
  try {
    const docter = await Docter.find();
    if (!docter)
      return res.status(404).json({
        success: false,
        message: "docter not found",
      });
    return res.status(201).json(docter);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const finddoctor = async (req, res) => {
  try {
    const { username, specialties } = req.query;
    const query = {};

    if (!username) {
      query.username;
    }
    if (!specialties) {
      query.specialties;
    }
    const docter = await Docter.find(query);
    return res.status(201).json(docter);
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updatedoctorprofile = async (req, res) => {
  try {
    const profileid = req.user.id
    
    const { username,email,password,qualifications,specialties,description,phonenumber, experience,
    } = req.body;
  
    const updatefield ={}
    if(username) updatefield.username = username
    if(email) updatefield.email = email
    if(password) updatefield.password = password
    if(qualifications) updatefield.qualifications = qualifications
    if(specialties) updatefield.specialties = specialties
    if(description) updatefield.description = description
    if(phonenumber) updatefield.phonenumber = phonenumber
    if(experience) updatefield.experience = experience

    console.log(profileid);
  
    const docter = await Docter.findByIdAndUpdate(profileid,updatefield , { new :true});
  
    if(!docter) {
      return res.status(404).json({
        success:false,
        message:"docter not found"
      })
    }
  
    return res.status(201).json({
      success:true,
      message:"updated profile successfully",
      docter
    })
  } catch (error) {
    return res.status(500).json({
      message:error.message
    })
    console.log(error);
  }

};
const getdocterbyid = async (req, res) => {};
const deletedocter = async (req, res) => {};

module.exports = {
  registerdoctor,
  updatedoctorprofile,
  getalldocter,
  finddoctor,
};
