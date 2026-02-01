// import express from "express";
// import {create,getByid, remove, getUsers, update} from '../controllers/userControllers.js'

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
//! routes
import express from "express";
import {
  create,
  getByid,
  remove,
  getUsers,
  update,
} from "../controllers/userControllers.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", create);
router.put("/:userId", update);
router.get("/:id", getByid);
router.delete("/:id", remove);

export default router;
