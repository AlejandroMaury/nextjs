import Image from "next/image";
import Foto from "./Foto";

const cargarDatos = () => {
  return fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY",
    { cache: "no-store" }
  )
    .then((res) => res.json())
    .then((datos) => datos.photos);
};

export default async function personas() {
  const datos = await cargarDatos();

  return (
    <>
      <h3 className="nasa-title">
        Fotos tomadas por el robot Rover de la NASA
      </h3>
      <div className="fotos">
        {datos.map((valor, indice) => (
          <Foto key={indice} valor={valor} />
        ))}
      </div>
    </>
  );
}
