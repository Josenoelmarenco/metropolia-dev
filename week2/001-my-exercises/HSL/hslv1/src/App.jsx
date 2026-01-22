import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import './App.css'
import PushCard from './components/Puchcard'

function App(){
  return(
    <div>
      <Header title="Welcome to HSL" />
      <MainContent content="Here will be the compornents for search tickets" />
      <Footer footerText= "2026. HSL by React App" />
      <PushCard menssaje= "Tu compra ha sido aprobada" />
    </div>
  )
}

export default App
