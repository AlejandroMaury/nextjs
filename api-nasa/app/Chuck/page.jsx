import Image from "next/image";
import Memes from "./Memes";

const cargarDatos = () => {
  return fetch("https://api.chucknorris.io/jokes/random", { cache: "no-store" })
    .then((res) => res.json())
    .then((datos) => datos.icon_url);
};

export default async function personas() {
  const datos = await cargarDatos();
  console.log(datos);

  return (
    <>
      <h3 className="nasa-title">
        Fotos tomadas por el robot Rover de la NASA
      </h3>
      <div>
        {datos}
        <Memes key={indice} valor={valor} />
      </div>
      {/* <div className="fotos">
        {datos((valor, indice) => (
          <Memes key={indice} valor={valor} />
        ))}
      </div> */}
    </>
  );
}
