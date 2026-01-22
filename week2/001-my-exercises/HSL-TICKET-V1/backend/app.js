import express from "express";
import cors from "cors"; // 1. Importar primero
import { getRoot, getTicketById, name, contactPage } from "./controllers.js";

const app = express(); // 2. INICIALIZAR (Esto debe ir antes de cualquier app.use)

app.use(cors()); // 3. CONFIGURAR (Ahora sí, 'app' ya existe)

const port = 3001;

// 4. RUTAS
app.get("/", getRoot);
app.get("/contact", contactPage);
app.get("/ticket/:id", getTicketById);
app.get("/:name", name);

// 5. ENCENDER
app.listen(port, () => console.log("Servidor listo en el 3001"));
