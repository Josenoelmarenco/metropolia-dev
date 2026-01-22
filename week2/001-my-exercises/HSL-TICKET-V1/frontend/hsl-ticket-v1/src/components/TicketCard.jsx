// src/components/TicketCard.jsx
import './TicketCard.css'; // 👈 IMPORTANTE: Importamos el CSS aquí

export const TicketCard = ({ id, title, description }) => {
  return (
    <div className="ticket-card">
      <small className="ticket-id">ID del Ticket: {id}</small>
      <h3 className="ticket-title">{title}</h3>
      <p>{description}</p>
      <button className="ticket-button">
        Validar Ticket
      </button>
    </div>
  );
};