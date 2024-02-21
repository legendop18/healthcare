const mongoose = require('mongoose');
const bcrypt = require('bcrypt')


const userschema = mongoose.Schema(

    {
        username: {
            type: String,
            required: true,

        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,

        },
        password: {
            type: String,
            required: [true, "password is required"],

        },
        role: {
            type: String,
            enum: ["patient", "docter" ,"user"],
            default :"user"
            
        },
        avatar:{
            type:String
        },
       
        createdAt: {
            type: Date,
            default:Date.now()

        },
        updatedAt: {
            type: Date,
            default:Date.now()
        }
    },
)

userschema.pre("save", async function (next){
   if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password,10)
   }  
    next()
})

userschema.methods.isPasswordCorrect = async function (password){
   return await bcrypt.compare(password,this.password)
}

const User = mongoose.model("User", userschema)

module.exports = User