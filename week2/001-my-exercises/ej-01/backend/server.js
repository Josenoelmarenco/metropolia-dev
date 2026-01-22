// import express from "express";
import express from "express";
import { getRoot } from "./controllers.js";

const app = express();
const port = 3001;

// app.get("/", (req, res) => {
//   res.send("Hola mundo!");
// });

app.get("/", getRoot);

app.listen(port, () => {
  console.log(`Ejemplo de app escuchando en el puerto ${port}`);
});
