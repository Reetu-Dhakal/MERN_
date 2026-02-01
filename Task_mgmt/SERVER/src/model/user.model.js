import { hashPassword } from "../utils/bcrypt.utils.js"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:[true, 'first_name is required']
    },
    last_name:{
        type:String,
        required:[true,'last_name is required']
    },
    email:{
        type: String,
        required:[true, 'email is required'],
        unique: [true, 'user already exist with provided email']
    },
    password:{
        type:String,
        minLength: 6,
        required:[true,'pasword is required']
    }
},{timestamps: true})

//? models
const User = mongoose.model('User', userSchema)
export default User