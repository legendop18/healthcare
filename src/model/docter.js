const mongoose = require('mongoose')


const docterschema = new mongoose.Schema({
    username :{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    specialty:{
        type:String
    },
    expirence:{
        type:String
    },
    phone:{
        type:Number,
        required:true,
    },
    avatar:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

})

const Docter = mongoose.model("Docter",docterschema)
module.exports = Docter