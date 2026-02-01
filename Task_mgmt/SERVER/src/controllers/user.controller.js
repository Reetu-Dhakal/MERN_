import User from "../models/user.model.js";
export const get = (req, res) => {
  res.status(200).json({
    message: "List of users",
    data: [],
    success: true,
  });
};

export const post = (req, res) => {
  console.log(req.body);
  res.status(201).json({
    message: "User created successfully",
  });
};

export const getUserById = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `Get user by id ${id}`,
  });
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  res.status(200).json({
    message: `User updated successfully ${id}`,
  });
};

export const deleteUser = (req, res) => {
  res.status(200).json({
    message: "User deleted successfully",
  });
};
