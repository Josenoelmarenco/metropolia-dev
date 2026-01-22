// controllers.js

export const getRoot = (req, res) => {
  res.send("Yo soy el punto de conexión: I am endpoint get /");
};

export const getTicketById = (req, res) => {
  // 1. Primero extraemos el valor de la URL y lo guardamos en una constante llamada 'id'
  const id = req.params.id;
  // 2. Ahora sí podemos usar 'id' porque ya existe
  res.send(`Buscando en la base de datos de HSL el ticket con ID: ${id}`);
};

export const name = (req, res) => {
  const name = req.params.name;
  res.send(`Hola bienvenido ${name}`);
};

export const contactPage = (req, res) => {
  res.send(`Esta es la sección donde irá el contact y form`);
};

export const searchBus = (req, res) => {
  // En lugar de req.params, usamos req.query
  const linea = req.query.linea;
  const destino = req.query.destino;

  res.send(`Buscando autobús línea ${linea} con dirección a ${destino}`);
};

// controllers.js

export const getTicketById = (req, res) => {
  const ticketId = req.params.id;

  // En la vida real, aquí consultarías una Base de Datos.
  // Creamos el objeto REAL que viajará por la red.
  const ticketData = {
    id: ticketId,
    title: "Billete Sencillo - Zona AB",
    description: "Válido para tren, bus y tranvía en Helsinki",
    price: 3.1,
    expiresIn: "80 min",
  };

  // IMPORTANTE: Usamos res.json() en lugar de res.send()
  // Esto le dice al navegador: "Oye, te mando un objeto, no solo un texto".
  res.json(ticketData);
};
