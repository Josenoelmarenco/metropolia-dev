const express = require('express');
const {
  getAllUsers,
  getUserById,
  createUser,
  patchUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

module.exports = router;
