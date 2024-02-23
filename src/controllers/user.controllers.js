
const User = require('../model/users.js')
const bcrypt = require("bcrypt")



const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        let existinguser = await User.findOne({ email });
        if (existinguser) {
            return res.status(200).send({
                success: false,
                message: "user already exist"
            })
        }

    
        const hashpassword = await bcrypt.hash(password, 10)
        const user = await User.create({ username, email, password: hashpassword })

        return res.status(201).send({
            success: true,
            message: "user created successfull",
            user
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message,
        })
    }
};

const login = async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res
          .status(200)
          .send({ message: "user not found", success: false });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res
          .status(200)
          .send({ message: "Invlid EMail or Password", success: false });
      }
     
      res.status(200).send({ message: "Login Success", success: true, });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: `Error in Login CTRL ${error.message}` });
    }
  };



module.exports = {
    registerUser,
    login
    
} 