// 1. Importamos los módulos (fíjate que NO llevan './' porque son nativos)
const fs = require('fs');
const os = require('os');

console.log('--- 1. Inicio del Script ---');

// 2. Usamos el módulo OS para sacar info de tu compu
const platform = os.platform(); // Ej: 'win32', 'darwin' (Mac), 'linux'
const user = os.userInfo().username;

console.log(`--- 2. Info del Sistema: Usuario ${user} en ${platform} ---`);

// 3. Usamos el módulo FS para escribir un archivo
// OJO: Esta operación es ASÍNCRONA (lenta). Node la manda a segundo plano.
fs.writeFile('sistema.txt', `El usuario es: ${user}`, (error) => {
    if (error) {
        console.log('Hubo un error al escribir');
    } else {
        console.log('--- 3. Archivo "sistema.txt" creado exitosamente ---');
    }
});

console.log('--- 4. Fin del Script ---');