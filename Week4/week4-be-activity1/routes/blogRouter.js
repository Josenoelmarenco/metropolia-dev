const express = require('express');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  deleteBlog,
} = require('../controllers/blogController');

const router = express.Router();

// GET all
router.get('/', getAllBlogs);

// GET one by id
router.get('/:id', getBlogById);

// POST create
router.post('/', createBlog);

// DELETE one by id
router.delete('/:id', deleteBlog);

module.exports = router;
