import './App.css';
import { useState } from 'react';

function App() {

  // Cambio de nombre al dar click
  const [name, setName] = useState();  // esto inicializa una función la cual al ser invocada por el evento en el lado del cliente cambia su estado inicial de name  ==>  set name 
  const change = () => {
    setName('Alejandro Arango');
  }

  //Incremento, decremento y reinicio de contador

  const [age, setAge] = useState(0);
  const add = () => {
    setAge(age + 1);
  }

  const minnus = () => {
    setAge(age - 1);
  }

  const restart = () => {
    setAge(0);
  }


  //Calculadora

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [result, setResult] = useState();


  const plus = () => {
    setResult(Number(num1) + Number(num2))
  }

  const input1 = (e) => {
    setNum1(e.target.value)
  }
  const input2 = (e) => {
    setNum2(e.target.value)
  }

  // Texto que varia por accion de un boton

  const equipos = [
    {
      nombre: "Once caldas",
      ciudad: "Manizales"
    },

    {
      nombre: "Nacional",
      ciudad: "Medellin"
    },

    {
      nombre: "River Plate",
      ciudad: "Buenos Aires"
    },

    {
      nombre: "Real Madrid",
      ciudad: "Madrid"
    },

    {
      nombre: "Boca juniors",
      ciudad: "Buenos Aires"
    }
  ]
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState()

  const cambio = () => {
    setContador(contador + 1);
    if (contador + 1 >= equipos.length) {
      setContador(0)
    }

    setMensaje(<h2> tu equipo favorito es:  <span className='equipo'>{equipos[contador].nombre}</span>, juega en la ciudad de: <span className='ciudad' >{equipos[contador].ciudad}</span></h2>)

  }

  //Convertidor de divisas
  const cambios = [{ divisa: "Peso", cambio: 1 }, { divisa: "Euro", cambio: 4400 }, { divisa: "Dolar", cambio: 4300 }, { divisa: "Yen", cambio: 2400 }, { divisa: "libra", cambio: 5000 }]


  //console.log('error : ', cambios[0].divisa)

  const [cantidad, setCantidad] = useState(0);
  const [resultado1, setResultado1] = useState(0);
  const [resultado2, setResultado2] = useState(0);
  const [resultado3, setResultado3] = useState(0);
  const [resultado4, setResultado4] = useState(0);



  const modificar = (e) => {

    setCantidad(e.target.value);
    setResultado1(e.target.value * cambios[1].cambio);
    setResultado2(e.target.value * cambios[2].cambio);
    setResultado3(e.target.value * cambios[3].cambio);
    setResultado4(e.target.value * cambios[4].cambio);

  }






  return (
    <>
      <div className='containner'>

        <div className='name'>
          <h1> My name is... {name}</h1>
          <button onClick={change}>Appear your name</button>
        </div>

        <div className='counter'>
          <h3>Age = {age}</h3>
          <button onClick={add}>Increment your age</button>
          <button onClick={minnus}>Decrease your age</button>
          <button onClick={restart}>Restart your age</button>
        </div>

        <div className='calculator'>
          <input type="number" value={num1} onChange={input1} /> +
          <input type="number" value={num2} onChange={input2} /> =
          <input type="number" value={result} readOnly />
          <button onClick={plus}  > plus</button>

        </div>


        <div className='mensajero'>

          <div className='sms'>{mensaje}</div>
          <button onClick={cambio}> Ver siguiente</button>
        </div>


        <section className='converter'>
          <div className='cajas'>
            <label htmlFor="u0"> {cambios[0].divisa} </label>
            <input id="u0" type='number' value={cantidad} onChange={modificar}></input>

            <label htmlFor='u1' > {cambios[1].divisa} </label>
            <input id='u1' type='number' value={resultado1} readOnly></input>

            <label htmlFor='u2' > {cambios[2].divisa} </label>
            <input id='u2' type='number' value={resultado2} readOnly></input>

            <label htmlFor='u3' > {cambios[3].divisa} </label>
            <input id='u3' type='number' value={resultado3} readOnly></input>

            <label htmlFor='u4' > {cambios[4].divisa} </label>
            <input id='u4' type='number' value={resultado4} readOnly></input>



          </div>


        </section>



      </div>


    </>
  );
}

export default App;
