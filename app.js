import './App.css'; 
import Calculadora from './components/calculadora/calculadora';
import Listacards from './components/tarjeta/listacards';
import Navbar from './components/Navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Listacards/> 
      <Calculadora/>
    </div>
  );
}

export default App;
