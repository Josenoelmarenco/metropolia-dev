const express = require('express');
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  patchBlog,
  deleteBlog,
} = require('../controllers/blogController');

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.patch('/:id', patchBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
