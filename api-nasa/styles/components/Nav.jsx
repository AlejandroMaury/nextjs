import Link from "next/link";
import { Modern_Antiqua } from "@next/font/google";

const fuente = Modern_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--mifont",
});

export default function Nav() {
  return (
    <>
      <nav className={fuente.className}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/nosotros">Acerca de nosotros</Link>
        <Link href="/personas">Personas API</Link>
        <Link href="/Nasa">API NASA</Link>
        {/* <Link href="/Chuck">Memes</Link> */}
      </nav>
    </>
  );
}
