const fs = require('fs'); // Importamos el módulo de sistema de archivos

// 1. LEER ARCHIVO (fs.readFile)
// Le decimos: "Lee sample.txt en formato utf8 y avísame cuando termines".
fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    // Si algo falla (ej. el archivo no existe), mostramos el error en rojo
    console.error('❌ Error leyendo el archivo:', err);
  } else {
    // Si todo sale bien, mostramos el contenido
    console.log('📖 Contenido de sample.txt:', data);
  }
});

// 2. ESCRIBIR ARCHIVO (fs.writeFile)
// Le decimos: "Crea output.txt con este texto dentro".
fs.writeFile('output.txt', 'Este archivo fue creado automáticamente por tu código Node.js', (err) => {
  if (err) {
    console.error('❌ Error escribiendo el archivo:', err);
  } else {
    console.log('✅ Archivo output.txt creado exitosamente.');
  }
});

const os = require('os'); // Importamos el módulo del sistema operativo

console.log('--- 🖥️ INFORMACIÓN DEL SISTEMA ---');
console.log('Hostname (Nombre de PC):', os.hostname());
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Núcleos de CPU:', os.cpus().length); // .length cuenta cuántos núcleos tienes
console.log('----------------------------------');