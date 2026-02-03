import { verifyToken } from "../jwt.utils.js"
import User from "../model/user.model.js"

export const authenticate = async(req,res,next)=> {
    try{

        const token = req.headers["authenticate"]

        if(!token){
            next({
                message: "unauthorized access denied",
                status: 401
            })
            return
        }

        const decoded_data = verifyToken(token)

        if(!decoded_data){
            next({
                message: 'invalid token',
                status: 400
            })
            return
        }

        //? token expiry

        if(decoded_data.exp * 1000 < Date.now()){
            next({
                message: "unauthorized access denied",
                status: 400
            })
            return
        }

        const user = await User.findOne({_id:decoded_data._id, email:decoded_data.email})
        if(!user){
            next({
                message: "unauthorized access denied",
                status: 400
            })
            return
        }
        req.user = {
            id: user._id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name
        }
        next()
        


    }catch(error){
        next(error)
    }
}