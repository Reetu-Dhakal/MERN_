//! importing mongoose
// import mongoose from "mongoose"
import { generateToken } from "../jwt.utils.js";
import User from "../model/user.model.js"
import { hashPassword,comparePassword } from "../utils/bcrypt.utils.js";
// import { type } from "os"

// const userSchema = new mongoose.Schema({
//     first_name:{
//         type:String,
//         required:[true, 'first_name is required']
//     },
//     last_name:{
//         type:String,
//         required:[true,'last_name is required']
//     },
//     email:{
//         type: String,
//         required:[true, 'email is required'],
//         unique: [true, 'user already exist with provided email']
//     },
//     password:{
//         type:String,
//         minLength: 6,
//         required:[true,'pasword is required']
//     }
// },{timestamps: true})

// //? models
// const User = mongoose.model('User', userSchema)

//! register user
export const register = async (req, res, next) => {
    //? the data is passed here
    try {
        console.log('login',req.user)
        const { first_name, last_name, email, password } = req.body;

        if (!first_name) {
            // throw new Error("first_name is required");
            next({
                message :'firstname is required',
                status: 400
            })
        }
        if (!last_name) {
            // throw new Error("last_name is required");
            next({
                message :'lastname is required',
                status: 400
            })
        }
        if (!email) {
            // throw new Error("email is required");
            next({
                message :'email is required',
                status: 400
            })
        }
        if (!password) {
            // throw new Error("password is required");
            next({
                message :'email is required',
                status: 400
            })
        }
        const hashPass = await hashPassword(password)

        const user = await User.create({first_name,last_name,email,password:hashPass})

        res.status(200).json({
            message: 'account created'
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


//! login for the user
export const login = async(req,res,next) => {
    // const data = req.body
    try{
        const {email,password} = req.body;
        if(!email){
            throw new Error("email is required")
        }
        if(!password){
            throw new Error("password is required")
        }
        const user = await User.findOne({email:email})
        if(!user){
            throw new Error("invalid email or password")
        };

        const is_pass_match = await comparePassword(password,user.password)

        if(!is_pass_match){
            throw new Error('invalid password')
        }
        
        const access_token = generateToken({
            id: user.id,
            email:user.email,
            first_name: user.first_name,
            last_name: user.last_name
        })

        res.status(200).json({
            message: 'logon sucessful hai',
            data:user,
            access_token : access_token
        })
    }catch(error){
        // //res.status(500).json({
        //     //message:error?.message || 'not login good'
        // })
        next(error);
    }
}