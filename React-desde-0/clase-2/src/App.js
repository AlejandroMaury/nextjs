import './App.css';
import { useRef } from 'react';

//Imagenes a usar
import Nikita from './images/nikita.jpg'
import Sancho from './images/gato 2.jpg'
import Pepe from './images/gato 3.jpg'

/* Las referencias hacen relación a un elemento que viene desde otra posición

useRef = es un hook de react, referencia a un element, se debe importar y usar dentro de la funcion padre 

Para consultar eventos = doc en react


*/



function App() {
  const refCaja = useRef();
  const cambio = 23.16;

  const increment = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1;
    e.target.style.color = 'blue'
    // e.target.style.fontSize = '15px'

    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1
    }

    if (e.target.innerHTML >= 7) {
      e.target.style.color = 'red';
    }
  }

  const convert = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * cambio
  }

  const change = (e) => {
    // alert(e.target.src)

    if (

      e.target.src.includes('nikita')) {
      e.target.src = Sancho
    } else {
      e.target.src = Nikita
    }


  }

  const read = (e) => {
    refCaja.current.innerHTML = e.target.value
  }

  return (
    <>
      <div className='caja' onClick={increment} ref={refCaja}> 1
      </div>
      <div className='imagen'>

        <img src={Nikita} alt='mi primer gato' onClick={change} />
        <input className='campo' onChange={read} />
        <button className="boton" onClick={convert}>Aceptar</button>
      </div>
    </>
  );
}

export default App;
