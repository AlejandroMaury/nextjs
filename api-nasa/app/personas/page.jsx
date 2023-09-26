import Ficha from "./Ficha";

const cargarDatos = () => {
  return fetch("https://randomuser.me/api/?results=8", { cache: "no-store" })
    .then((res) => res.json())
    .then((datos) => datos.results);
};

export default async function personas() {
  const datos = await cargarDatos();
  console.log(datos);

  return (
    <>
      <div className="personas">
        {datos.map((valor, indice) => (
          <Ficha key={indice} valor={valor} />
        ))}
      </div>
    </>
  );
}
