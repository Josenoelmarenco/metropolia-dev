const bcrypt = require('bcrypt');

async function main() {
  const password = 'mySecurePassword';

  // 1) Generate salt + hash (async)
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  console.log('--- ASYNC HASH DEMO ---');
  console.log('Password:', password);
  console.log('Salt:', salt);
  console.log('Hashed Password:', hashedPassword);

  // Prefix check ($2a$, $2b$, etc.)
  const prefix = hashedPassword.split('$').slice(0, 2).join('$') + '$';
  console.log('bcrypt prefix:', prefix); // usually $2b$
