// import express from "express";

// const router = express.Router();

// const getUsers = (req, res) => {
//   res.status(200).json({
//     message: "User fetched",
//     data: [],
//     success: true,
//   });
// };

// const create = (req, res) => {
//   console.log(req.body);

//   res.status(201).json({
//     message: "User created",
//     data: req.body,
//   });
// };

// const update = (req, res) => {
//   // get id
//   const id = req.params.userId;
//   const data = req.body;
//   // get  by id
//   // update user
//   // save

//   res.status(200).json({
//     message: "user updated" + " " + id,
//   });
// };

// const getByid = (req, res) => {
//   const id = req.params.id;

//   res.status(200).json({
//     message: `get user by id ${id}`,
//   });
// };

// const remove = (req, res) => {
//   res.status(200).json({
//     message: `id: ${req.params.id} deleted`,
//   });
// };

// // CRUD users
// router.get("/", getUsers);

// // create
// router.post("/", create);

// // update
// // put
// router.put("/:userId", update);

// // get user by id
// router.get("/:id", getByid);

// // delete user
// router.delete("/:id", remove);

// export default router;
//! managing again
//*? this is after the middleware has been done where i did the users to get multiple of the users at a 
//? time and soon */
import User from '../model/user.model.js';
import user from '../model/user.model.js' 


export const getUsers = async(req, res) => {
  try{

    const users = await User.find()

    res.status(200).json({
    message: "User fetched",
    data: users,
    success: true,
    });
  }catch(error){
    next(error)
  }
  // res.status(200).json({
  //   message: "User fetched",
  //   data: [],
  //   success: true,
  // });
};

export const create = (req, res) => {
  res.status(201).json({
    message: "User created",
    data: req.body,
  });
};

export const update = async(req, res) => {
  try{
      const id = req.params.userId;
      const {first_name, last_name} = req.body
      //get by id
      const user = await User.findOne()
      if(!user){
        next({
          message: 'user not found',
          status: 404
        })
        return
      }
      if(first_name){
        user.first_name = first_name
      }

      if(last_name){
        user.last_name = last_name
      }
      await user.save()

      res.status(200).json({
      // message: "user updated " + req.params.userId,
      message: `user ${id} updated`,
      // message: "user" + " " + id + "updated",
      data: user
    });
  }catch(error){
    next(error)
  }
};
//**? here the it is used to get by the id and soon  */
export const getByid = async(req, res) => {
  try{
    const id = req.params.id;

    // const user = await User.findById(id)
    const user = await User.findOne({_id:id})
    if(!user){
      next({
        status: 404,
        message:' user not found'
      })
    }

    res.json({
    message: `get user by id ${req.params.id}`,
    data: user
    });
  } catch(error){
    next(error)
  }
};

export const remove = async(req, res) => {
  try{
      const id = req.params.id;
      const user = await User.findOne({_id:id})
      if(!user){
        next({
          message: "user not found",
          status : 404
        })
      }
      await User .deleteOne();
      res.status(200).json({
      message: `id ${req.params.id} deleted`,

    });
  }catch(error){
    next(error)
  }
};
