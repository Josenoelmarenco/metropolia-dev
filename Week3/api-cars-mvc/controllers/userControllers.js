//controllers/userControllers.js
const User = require('../models/userModel');

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body });

  if (newUser) {
    res.status(201).json(newUser);
  } else {
    res.status(400).json({ message: 'Missing required user fields' });
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  res.json({ message: 'Hello from getById' });
};

// PUT /users/:userId
const updateUser = (req, res) => {
  res.json({ message: 'Hello from update' });
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  res.json({ message: 'Hello from delete' });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
