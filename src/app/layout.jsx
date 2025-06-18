// READY FOR CLIENT SIDE
"use client";


// UTILITY
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})


// CONTEXTS PROVIDERS
import { MainContextProvider } from "../../contexts/MainContext.jsx";


// COMPONENTS
import CSS_Layer from "../../layouts/CSS_Layer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


// EXPORT
export default function RootLayout({ children }) {

  return (

    // La prima riga determina il LANGUAGE e il FONT con metodo nativo (next/font)
    <html lang="it" className={poppins.className}>

      <head>
        <meta charSet="UTF-8" />
        {/* FAVICON */}
        <link rel="icon" type="image/svg+xml" href={"/favicon.png" || "/default/default-favicon.png"} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Il mio Sito Web</title>
      </head>

      <body>

        {/* CONTEXT */}
        <MainContextProvider>

          <CSS_Layer>
            <div className='wrapper'>

              <Header />

              <main>
                <div className='container'>
                  {children}
                </div>
              </main>

              <Footer />

            </div>
          </CSS_Layer>

        </MainContextProvider>

      </body>

    </html>
  );
}
