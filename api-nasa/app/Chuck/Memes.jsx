"use client";

// import Boton from "./Boton";
import Image from "next/image";
// import css from "./foto.module.css";

const cargador = ({ src, width }) => {
  return `${src}?w=${width}`;
};

export default function Ficha({ valor }) {
  return (
    <>
      <div className={css.foto}>
        <h3>{valor.id}</h3>
        <Image loader={cargador} src={valor} width={200} height={100} alt="" />
        {/* <img src={valor.picture.large} alt="" /> */}
        {/* <div>
          <Boton valor={valor} />
        </div> */}
      </div>
    </>
  );
}
