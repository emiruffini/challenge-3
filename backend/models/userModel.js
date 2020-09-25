const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    username: {type:String, required:true, 
        validate:{
            validator: async user => await User.find({user}).countDocuments()===0,
            message: () => "That user name is already used"
        }
    },
    password: {type: String, required: true},
    mail:{type:String, required: true,
        validate:{
            validator: async mail => await User.find({mail}).countDocuments()===0,
            message: () => "That email is already used"
        }
    },
    name: {type: String, required: true},
    surname: {type: String, required: true},
    DNI: {type: Number, default: null},
    province: {type: String, default: null},
    address: {type: String, default: null},
    role: {type: String, default: "comprador"},
    loginGoogle: {type: Boolean, default: false}
    
})


const User = mongoose.model("user", userSchema)

module.exports = User