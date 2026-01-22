import './styles.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';
import { Greeting } from './components/Greeting';

function App(){
  return(
    <div>
      <Header title="Probando mi contenido"/>
      <Greeting message="Hello" name="John"/>
      <MainContent content= "Este es mi contenido principal de la web"/>
      <Greeting message= "Byem nos vemos" name="Noel"/>
      <Footer footerText= "2026 esta es mi app con React" />
    </div>
  );
}

export default App;