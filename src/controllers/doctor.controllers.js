const Docter = require("../model/docter.js");



const registerdoctor = async(req,res)=>{
      
    try {
        const {username,
            email,
            password,
            qualifications,
            specialties,
            description,
            phonenumber,experience,role}= req.body
            
    const existingdoctor = await Docter.findOne({email});
    
    if(existingdoctor) return res.status(404).json({
        success:false,
        message:"docter already registered",

    });
    
 
    const doctor= await Docter.create({
        username,
        email,
        password,
        qualifications,
        specialties,
        description,
        phonenumber,
        experience,
        role,
    })
    if (!doctor) return res.status(404).json({
        success:false,
        message:"please enter the required detail"
    })

    return res.status(201).json({
        success:true,
        message:"doctor registered successfully"

    })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
};

const logindocter = async(req,res)=>{
    try {
        const {email,password} = req.body
     if (!email || !password) return res.status(404).json({
            message:"please enter the detail",
            success:false
})
    const docter = await Docter.findOne({email})

    if (!user) return  res.status(404).json({
        message:"user not found",
        success:false,
    })

    if (!email && !password) return res.status(404).json({
        success:false,
        message:"email and passowrd must be required"
    })

    const ismatch = docter.isPasswordCorrect(password);

    if(!ismatch) return  res.status(400).json({
        suceess:false,
        message:"Incorrect password"
    });
    const token = await docter.generatetoken(docter.id)

    return res.status(201).cookie("token",token).json({
        success:true,
        message:"docter login successfully"
    })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}


const getalldocter = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
};

const finddoctor = async(req,res)=>{

};

const updatedoctorprofile =async (req,res)=>{
    
};
const getdocterbyid = async(req,res)=>{

};
const deletedocter = async(req,res)=>{

};


module.exports = {
    registerdoctor,
    logindocter
}