import 'dotenv/config'
import express from 'express'
import http from 'http'
import userRoutes from './routes/user.routes.js'
import authRoutes from './routes/auth.routes.js'
import{connectDb} from './config/db.config.js'
import taskRoutes from './routes/task.routes.js'
import cors from 'cors'
import { error } from "console";
import { errorhandler } from './middlewares/errorhandler.middleware.js';


//! express app instance 


//! database connection
connectDb()

const app = express()
app.use(express.json())

app.use(cors({
    origin: '*',
}))
//http server 
const server = http.createServer(app)

//! middleware
// const middleware = (req,res,next)=>{
//     console.log('Middleware executed');
//         req.user ={
//         name:"Reetu",
//         age:22
//     }
//     next(16)
//     next((new error('Custom error from middleware')))
// };

// const middleware3 = (req,res,next)=>{
//     console.log('Middleware executed 3',req.user);
//     res.status(200).json({
//         message:"Response from middleware 3"
//     })
//     //next()
// };

//using app level middleware
// app.use(middleware)
//app.use(middleware3)
// app.use((req,res,next)=>{
//     console.log('middleware executed');
//     //next()
// });


app.use(errorhandler)

//! routes
app.get('/',(req,res)=>{
    console.log(req)
    res.status(200).json({
        message:"Hello from server"
    })

// app.get('/Reetu',(req,res)=>{
//     console.log(req)
//     res.json({
//         message:"Hello from Reetu"
//     })

})

//! rest api
//* api => application programming interface
//* rest => representational state transfer
//1.stateless
//2.resources -> uniform resources
//3.uniform interface =>/users
//4. GET,POST,PUT/PATCH,DELETE
//5. Status code => 100-199 -> informational response
//200-299 -> success
//300-399 -> redirection
//400-499 -> client error 400() 401(unauthorized) 403 (forbidden) 404(not found)
//500-599 -> server error 500 501 503

//scalable
//layer

//! using routes
app.use('/users',userRoutes)
app.use('/auth',authRoutes)
app.use('/tasks', taskRoutes)

//
http.createServer(app).listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`)
})
app.use(errorhandler)

//Endpoint

//? rq.body => data
//? rq.params => /users/:id

//!api/ controller
//! middleware
//! function -> req obj, res obj , next function
//! can 

//types of middleware
//1. application level middleware
//2. router level middleware
//3. error handling middleware
//4. built-in middleware
//5. third party middleware

