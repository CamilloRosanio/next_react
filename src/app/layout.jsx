// READY FOR CLIENT SIDE
"use client";


// UTILITY
import "./globals.css";


// CONTEXTS PROVIDERS
import { MainContextProvider } from "../../contexts/MainContext.jsx";


// COMPONENTS
import CSS_Layer from "../../layouts/CSS_Layer";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


// EXPORT
export default function RootLayout({ children }) {

  return (
    <html lang="it">

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
