// src/pages/ContactPage.jsx
import { useState, useEffect } from 'react';
import './ContactPage.css'; // 👈 Importamos los estilos aquí

export const ContactPage = () => {
  const [mensaje, setMensaje] = useState("Conectando con el servidor HSL...");

  useEffect(() => {
    fetch("http://localhost:3001/contact")
      .then(res => res.text())
      .then(data => setMensaje(data))
      .catch(err => setMensaje("Error al cargar información de contacto."));
  }, []);

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contacto Metropolia HSL</h2>
      
      <div className="backend-info-box">
        <p>{mensaje}</p>
      </div>

      <form className="hsl-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input type="text" id="nombre" placeholder="Tu nombre... aquí" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" placeholder="ejemplo@metropolia.fi" />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje o Reporte</label>
          <textarea id="mensaje" rows="5" placeholder="Escribe aquí tu consulta..."></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Enviar Mensaje al Servidor
        </button>
      </form>
    </div>
  );
};