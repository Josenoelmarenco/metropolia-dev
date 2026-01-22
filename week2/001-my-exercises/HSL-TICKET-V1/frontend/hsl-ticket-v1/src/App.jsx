// App.jsx
import { ContactPage } from './pages/ContactPage';
import { TicketPage } from './pages/TicketPage';

function App() {
  return (
    <div className="main-layout">
      {/* El Header se queda fijo siempre */}
      <header>
        <h1>HSL Ticket System v 1.0</h1>
      </header>

      <main>
        {/* Aquí es donde "inyectamos" la página que queremos ver */}
        <ContactPage />  
        <div className="App">
          <TicketPage />
        </div>
      </main>
      <footer>
        <p>© 2026 Metropolia Software Engineering</p>
      </footer>
    </div>
  );
}

export default App;

