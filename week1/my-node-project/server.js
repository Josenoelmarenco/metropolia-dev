const express = require('express');
// 1. Importamos la librería de fechas que instalaste antes
const { format } = require('date-fns');

const app = express();
const port = 3000;

// Ruta 1: Inicio
app.get('/', (req, res) => {
    res.send('¡Hola! Mi primer servidor con Express funciona 🚀');
});

// Ruta 2: La página de la fecha (¡NUEVA!)
app.get('/time', (req, res) => {
    const now = new Date();
    // Usamos la librería para dar formato
    const formattedTime = format(now, 'HH:mm:ss');
    res.send(`La hora actual del servidor es: ${formattedTime}`);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});