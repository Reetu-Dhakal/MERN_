import { verifyToken } from "../jwt.utils.js"

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
        }
        req.user = {
            
        }
        


    }catch(error){
        next(error)
    }
}