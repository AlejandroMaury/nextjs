
import "../styles/styles.css"
import Nav from "@/styles/components/Nav"
import { Roboto } from "@next/font/google"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
})



export const metadata = {
  title: 'Api Nasa',
  description: 'Generated by Next.js, para visualizar imagenes de la NASA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es ">
      <body>
        <Nav />
        <div className={roboto.className}>

          {children}
        </div>
      </body>
    </html>
  )
}
