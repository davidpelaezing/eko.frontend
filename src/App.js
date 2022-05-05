import { useState } from "react";
import './App.css';
import Formulario from './components/formulario/Formulario';
import ItemMenu from "./components/itemMenu/ItemMenu";

function App() {
  
  const transportes = ['Auto', 'Avión', 'Barco', 'Bicicleta'] 
  const [transporte, setTransporte] = useState(transportes[0]);

  const handleTransporteChange = (index) => {
    console.log('entro')
    setTransporte(transportes[index])
  }

  return (
    <div className="App">
      
      <header>
        <nav>
          <ul>
            {
              transportes.map((item, index) => 
                <ItemMenu 
                  key={index}
                  index={index}
                  transporte={item}
                  handleTransporteChange={handleTransporteChange}
                /> 
              )
            } 
          </ul>
        </nav> 
      </header>

      <section>
        <Formulario transporte={transporte}/>
      </section>

    </div>
  );
}

export default App;
