import { compare } from 'bcryptjs';
import User from "../models/user.model.js";
import { hashedPassword,comparePassword } from "../utils/bcrypt.utils.js";
import { generateToken } from '../utils/jwt.ustils.js';

//! register user
export const register = async (req, res,next) => {
    try {
        const{First_name, Last_name, email, password} = req.body;

        if(!First_name){
            //throw new Error();
            next({
                message:"First name is required",
                status:400
            });
            return
        }
        if(!Last_name){
            next({
                message:"Last name is required",
                status:400
            })
        }w
        if(!email){
            next({
                message:"Email is required",
                status:400
            })
        }
        if(!password){
            next({
                message:"Password is required",
                status:400
            })
        }

        const hashedPass = await hashedPassword(password);
        const user = await User.create({
            First_name,
            Last_name,
            email,
            password: hashedPass,
        });
    res.status(201).json({
      message: 'Account created',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

//login
export const login = async(req, res , next) => {
    try{
        console.log("login", req.user)
        const {email, password}= req.body;
        if (!email) {
            // throw new Error('email is required');
             next({
                message:'email is required',
                status:400
            })
             return 
        }
        if (!password) {
            // throw new Error('password is required');// password needs to be hash once hashed it cannot go back to the original making sure only the user knows the password
             next({
                message:'password is required',
                status:400
            })
             return 
        }
        const user = await User.findOne({email:email})

        if(!user){
            // throw new Error('Invalid email or password')
              next({
                message:'Invalid email or password',
                status:400
            })
            return 
        }

        const is_pass_matched = await comparePassword(password, user.password)
        if(!is_pass_matched){
            // throw new Error('Invalid email or password')
              next({
                message:'Invalid email or password',
                status:400
            })
            return
        }
        const access_token = generateToken({id: user._id, email: user.email, First_name: user.First_name, Last_name: user.Last_name});

    res.status(201).json({
        message: 'Login success',
        data: user
    });
    }catch(error){
        next(error)
         return 
    //     res.status(500).json({
    //         message: error?.message || 'something went wrong'
        // });
       
    }
};
