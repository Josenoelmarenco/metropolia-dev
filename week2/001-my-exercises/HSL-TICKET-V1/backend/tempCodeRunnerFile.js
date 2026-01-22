// 1. Importamos Express
const express = require("express");

// 2. Creamos la "aplicación" (el servidor)
const app = express();
const port = 3000; // El "puerto" es como el número de puerta de tu casa

// 3. Definimos una RUTA
// Cuando alguien visite la página principal ('/'), haz esto:
app.get("/", (request, response) => {
  response.send("¡Hola! Mi primer servidor con Express funciona 🚀");
});

app.get("/hola", (request, response) => {
  response.send("¡Hola! ¿qué quieres?");
});

// 4. Encendemos el servidor para que se quede escuchando
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
  console.log("Presiona CTRL + C para detenerlo");
});
