
const User = require('../model/users')




const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        let existinguser = await User.findOne({ email });
        if (existinguser) {
            res.status(490).json({
                success: false,
                message: "user already exist"
            })
        }

        const user = await User.create({ username, email, password })

        res.status(201).json({
            success: true,
            message: "user created successfull",
            user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};



const loginUser = async(req,res) =>{
    try {
        const {email,password} = req.body;

        const getuser = await User.findOne({email, password});

        if (!getuser) {
            res.status(400).json({
                success:false,
                message:"user does not exist",
                
            })
        };

       const matchpassword = User.isPasswordCorrect(password,this.password)

        if(!matchpassword){
            res.status(404).json({
                success:false,
                message:"Incorrect password"
            })
        };

        res.status(201).json({
            message:"login succesfull",
            success:true,
            getuser
        })
        
    } catch (error) {
        console.log(error)
       
    }
}

module.exports = {
    registerUser,
    loginUser
} 