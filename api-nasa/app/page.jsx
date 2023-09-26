"use client";

import Image from "next/image";
import planeta from "../public/images/Tierra.jpg";

const cargador = ({ src, width }) => {
  return `https://images.unsplash.com/photo-1614728263952-84ea256f9679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5hc2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60/${src}?w=${width}`;
};

export default function page() {
  return (
    <>
      <div>Página Principal</div>
      <div className="caja">
        <Image src="/images/galaxy.jpg" width={500} height={750} />
      </div>
      <div className="caja">
        <Image src={planeta} />
      </div>
      <div className="caja">
        <Image loader={cargador} src="cohete.jpg" width={500} height={380} />
      </div>
    </>
  );
}
