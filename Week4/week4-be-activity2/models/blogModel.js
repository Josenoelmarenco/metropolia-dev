const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    body: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blogSchema);
