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

const User = mongoose.model('User', userSchema);

// Health check (optional but useful)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Register
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: 'username and password are required' });
  }
  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'password must be at least 6 characters' });
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Duplicate username (unique index)
    if (error && error.code === 11000) {
      return res.status(409).json({ message: 'username already exists' });
    }
    return res.status(500).json({ error: 'Server error' });
  }
});
