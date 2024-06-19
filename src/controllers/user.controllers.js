const User = require("../model/users.js")
const Docter = require("../model/docter.js");





const register = async(req,res)=>{
   try {
    const {username,email,password,phonenumber,gender,bloodgroup,dob}= req.body


    if (!username || !email || !password) return res.status(404).json({
        success:false,
        message:"username,email,password must required"
    });

    const existinguser =  await User.findOne({email});

    if (existinguser) return res.status(404).json({
        success:false,
        message:"user already registerd"
    });

    
    const user = await User.create({
        username,
        email,
        password,
        phonenumber,
        gender,
        dob,
        bloodgroup
    });
     
    await user.save()
    return res.status(200).json({
        success:true,
        message:"User created successfully",
        
    });
   } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        });
   };
   
};

const login = async(req,res)=>{
    try {
        const {email,password,role} = req.body
       
        
     if (!email || !password) return res.status(404).json({
            message:"please enter the detail",
            success:false
})

    let existingUser;
    
    if (role === 'user') {
    existingUser = await User.findOne({ email });
    } else if (role === 'docter') {
    existingUser = await Docter.findOne({email});
    } else {
    return res.status(400).json({ error: 'Invalid user type' });
    }
        

    if (!existingUser) return  res.status(404).json({
        message:"user not found",
        success:false,
    })

    if (!email && !password) return res.status(404).json({
        success:false,
        message:"email and passowrd must be required"
    })

    const ismatch = existingUser.isPasswordCorrect(password);

    if(!ismatch) return  res.status(400).json({
        suceess:false,
        message:"Incorrect password"
    });
    const token = await existingUser.generatetoken(User.id)

    return res.status(201).cookie("token",token).json({
        success:true,
        message:"login successfully"
    })

    } catch (error) {
        console.log
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
};

const logout =async(req,res)=>{
    try {
        return res.status(201).clearCookie("token").json({
            suceess:true,
            message:"logout successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message:"internal server error"
        })
    }
};


const updateprofile = async(req,res)=>{

};


module.exports = {
    register,
    login,
    logout
}