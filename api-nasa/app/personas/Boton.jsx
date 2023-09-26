"use client";

import css from "./boton.module.css";
export default function Boton({ valor }) {
  const masInfo = () => {
    alert(`El apellido de ${valor.name.first} es ${valor.name.last}`);
  };

  return (
    <div>
      <button className={css.boton} onClick={masInfo}>
        Más información
      </button>
    </div>
  );
}
