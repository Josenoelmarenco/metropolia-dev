const mongoose = require('mongoose');
const Blog = require('../models/blogModel');

// GET /api/blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve blogs' });
  }
};

// GET /api/blogs/:id
const getBlogById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid blog ID' });
  }

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to retrieve blog' });
  }
};

// POST /api/blogs
const createBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create({ ...req.body });
    return res.status(201).json(newBlog);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Invalid input', error: error.message });
    }
    return res.status(500).json({ message: 'Failed to create blog', error: error.message });
  }
};

// PATCH /api/blogs/:id  (partial update)
const patchBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid blog ID' });
  }

  try {
    const updated = await Blog.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: 'Blog not found' });
    return res.status(200).json(updated);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to update blog' });
  }
};

// DELETE /api/blogs/:id
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid blog ID' });
  }

  try {
    const deleted = await Blog.findOneAndDelete({ _id: id });
    if (!deleted) return res.status(404).json({ message: 'Blog not found' });
    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(500).json({ message: 'Failed to delete blog' });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  patchBlog,
  deleteBlog,
};
