const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());

// Use 127.0.0.1 to avoid IPv6 localhost issues on some setups
const MONGO_URL = 'mongodb://127.0.0.1:27017/express-bcrypt-demo';
const PORT = process.env.PORT || 3001;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true }, // will store hashed password
  },
  { timestamps: true },
);
