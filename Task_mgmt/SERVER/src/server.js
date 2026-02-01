//! gpting not good man
import 'dotenv/config'
import express from "express";
import userRoutes from "./routes/user.route.js";
import authRoutes from './routes/auth.routes.js'
import {connectDb} from './config/db.config.js'
import {errorHandler} from './middlewares/errorHandler.middleware.js'
import taskRoutes from './routes/task.routes.js'
import cors from 'cors'
import http from "http";
import { error } from "console";

connectDb()

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*'
}))
//! middleware being utilized in this thing man
// const middleware =(req, res, next) => {
//   console.log('middleware');
//   req.user = {
//     name : 'Amen'
//   }
//   next('ghhg')
// };
// const middleware3 =(req, res, next) => {
//   console.log('middleware 3', req.user);
//   res.status(200).json({
//     message : 'response from middelware'
//   })
//   // next()
// }

// const errorHandler = ( error, req, res, next) => {
//   console.log('error handler',error)
//   res.status(500).json({
//     message: error?.message || 'internal server error'
//   })
// }

//? using app level middleware
// app.use(middleware)
// app.use(errorHandler)
// // app.use(middleware3)
// app.use((req, res, next) => {
//   console.log('mid 2', req.user)
//   next(12)
// })



//*----- the middleware should have more priority than another thing man i guess
app.use('/users',userRoutes)
app.use('/auth', authRoutes)
app.use('/task', taskRoutes)

app.get("/", (req, res) => {
  res.json({ message: "hello from me mario" });
});

app.get("/Aayush", (req, res) => {
  res.json({ message: "cooker is me aayush" });
});

app.use("/users", userRoutes);

http.createServer(app).listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
app.use(errorHandler)

// import express from "express"
// import https, { ServerResponse } from "https";
// import userRoutes from './routes/user.route.js'
// import http from "http";

// //? express app instance
// const app = express();

// //?
// app.use(express.json());

// //? server http
// const server = http.createServer(app);

// app.get("/", (req, res) => {
//   console.log(req);

//   res.status(200).json({
//     //? converting back to the object
//     message: "hello from me mario",
//   });
// });
// //? me doing me shit
// app.get("/Aayush", (req, res) => {
//   console.log(req);

//   res.json({
//     message: "cooker is me aayush",
//   });
// });//
//app.use('/users',userRoutes)
//? CRUD Users
// app.get("/users", (req, res) => {
//   res.status(200).json({
//     message: "not goood cook",
//     data: [],
//     sucess: true,
//   });
// });
//? create
// app.post("/users", (req, res) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: "User created",
//     data: req.body,
//   });
// });
// //? updaate
// //? put
// //? THis is the put request
// app.put('/users/:Uid',(req,res) =>{
//   const id = req.params.Uid
//   const data = req.body
//   //?get by id
//   //? update user
//   //? save

  
//   res.status(200).json({
//     message: 'user updated' + ' ' + id
//   })
// })


// app.get('/users/:id', (req,res) => {
//   const id = req.params.id
//   res.status(200).json({
//     message:`get user by id ${id}`
//   })
// })

// //? server up
// server.listen(8000, () => {
//   console.log("server is  running at http://localhost:8000");
// });

// app.delete('/users/:id', (req,res) => {
//   res.status(200).json({
//     message: `id ${req.params.id} deleted`
//   })
// })

//! rest api
//* api => application program interface
//* rest => representational state transfer
// 1. stateless
// 2. resources -> uniform resources
// 3. uniform interface => /users
// 4. GET ,POST, PUT/PATCH, DELETE
// 5. Status code
//?The ranges are 100-199 -> informational response
//?The ranges are 200-299 -> sucess
//?The ranges are 300-399 -> redirectional
//?The ranges are 400-499 -> client error 400, 401, 403, 404
//?The ranges are 500-599 -> server error 500, 501, 502

//--- scalable
//--- layered

// CRUD ->
// endpoints
//? this is for the i don't know which date but after mongodb was done and soon
//! api-controller
// ! middleware -- very important man for interview and shit man


//* function  --> req obj . res obj  & next function
//* can implement custom logic 
//* end req res cycle
//* called next middleware


//! types
//? 1. application level
//? 2. route level
//? 3. error handler -> err , req, res, next

//* for error handling 
//* err , req, res, next
