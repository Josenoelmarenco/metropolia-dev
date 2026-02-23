// ── case 1: Strings: simple get/set/remove ──────────────────────────────
localStorage.setItem('username', 'Rami');
localStorage.getItem('username'); // → "Rami"
localStorage.removeItem('username');

// ── case 2: Objects / Arrays: must serialize ────────────────────────────
const userArray = ['Rami', 25];
localStorage.setItem('user', JSON.stringify(userArray)); // stores '["Rami",25]'

const userData = JSON.parse(localStorage.getItem('user')); // → ["Rami", 25]
console.log(userData);

localStorage.removeItem('user');
localStorage.clear(); // wipe everything

// ── sessionStorage: same API, cleared when the tab closes ───────
sessionStorage.setItem('username', 'Rami');
sessionStorage.getItem('username');
sessionStorage.removeItem('username');
