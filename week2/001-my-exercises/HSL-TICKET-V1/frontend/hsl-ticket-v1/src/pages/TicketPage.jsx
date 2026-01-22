// src/pages/TicketPage.jsx
import { useState, useEffect } from 'react';
import { TicketCard } from '../components/TicketCard';

export const TicketPage = () => {
  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // 1. Llamamos al endpoint real
    fetch("http://localhost:3001/ticket/12345")
      .then(res => res.json()) // 👈 LA FORMA REAL: Convertimos la respuesta en un objeto JS
      .then(data => {
        // 2. 'data' ya es el objeto {id, title, description, price...} que mandó Express
        setTicket(data); 
      })
      .catch(err => console.error("Error conectando con HSL:", err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mis Boletos Activos</h2>
      {ticket ? (
        <TicketCard 
          id={ticket.id} 
          title={ticket.title} 
          description={ticket.description} 
        />
      ) : (
        <p>Conectando con el servidor de tickets...</p>
      )}
    </div>
  );
};