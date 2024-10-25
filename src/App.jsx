import './App.css'
import { useState } from 'react'
import Despedida from './components/Despedida'
import Saludo from './components/Saludo'
import  Datos  from "./data/vehiculos";
import Vehiculo from './components/Vehiculo';

function App() {

  console.log('====================================');
  console.log(Datos);
  console.log('====================================');


  //const valor = false;
  const [valor, setValor] = useState(false)

  return (
    <>
      {valor ? (
        <Saludo />
      ) : (
        <Despedida />
      )}

      <button onClick={() => setValor(prevValor => !prevValor)}>
          Cambia el valor a true o false
      </button>

      {Datos.map(dato => (
            <Vehiculo
              key={dato.id}
              datos={dato}
            />
          ))}
      


    </>
  )
}

export default App
