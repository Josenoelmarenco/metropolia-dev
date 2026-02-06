const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// GET all
router.get('/', getAllUsers);

// GET one by id
router.get('/:id', getUserById);

// POST create
router.post('/', createUser);

// DELETE one by id
router.delete('/:id', deleteUser);

module.exports = router;
