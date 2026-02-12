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

  // 2) Compare (async)
  console.log('\n--- ASYNC COMPARE DEMO ---');
  const ok = await bcrypt.compare('mySecurePassword', hashedPassword);
  const bad = await bcrypt.compare('wrongPassword', hashedPassword);
  console.log('Compare correct password:', ok); // true
  console.log('Compare wrong password:', bad); // false

  // 3) Sync hashing demo
  console.log('\n--- SYNC HASH DEMO ---');
  const syncSalt = bcrypt.genSaltSync(saltRounds);
  const syncHash = bcrypt.hashSync(password, syncSalt);
  console.log('Sync Salt:', syncSalt);
  console.log('Sync Hash:', syncHash);

  // 4) Sync compare demo
  console.log('\n--- SYNC COMPARE DEMO ---');
  console.log(
    'Sync compare correct:',
    bcrypt.compareSync('mySecurePassword', syncHash),
  ); // true
  console.log(
    'Sync compare wrong:',
    bcrypt.compareSync('wrongPassword', syncHash),
  ); // false
}

main().catch((err) => console.error('Error:', err));
