import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import validator from "validator"

const userSchema = new mongoose.Schema({

name:{
type:String,
required:[true,"Please enter your name"],
maxLength:[50,"A name should not exceed 50 characters "]
},

email:{
type:String,
required:[true,"Please enter your email"],
unique:true,
validate:[validator.isEmail,"Please enter a valid email address"]
},

password:{
type:String,
required:[true,"enter your password"],
minLength:[6,"A password must have a valid password"]
},

avatar:{
    public_id:{
type:String,
required:true
    },
    url:{
type:String,
required:true
    }
},

role:{
    type:String,
    default: "user"
},

createdAt:{
    type:Date,
    default:Date.now
},

resetPasswordToken : String,
resetPasswordExpire: Date


})

export default mongoose.models.User || mongoose.model("User",userSchema)