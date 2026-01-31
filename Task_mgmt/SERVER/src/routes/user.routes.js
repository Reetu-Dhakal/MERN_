import express from "express";
const router = express.Router();

import {
  get,
  post,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

// Read all users
router.get("/", get);

// Create user
router.post("/", post);

// Read user by id
router.get("/:id", getUserById);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;
