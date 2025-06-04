// READY FOR CLIENT SIDE
"use client";


// UTILITY
import "./globals.css";


// CONTEXTS
import { MainContextProvider } from "../../contexts/MainContext.jsx";


// COMPONENTS
import CSS_Layer from "../../layouts/CSS_Layer";
import Header from "../../components/Header";

// debug
import TEST from "../../components/TEST";


// EXPORT
export default function RootLayout({ children }) {

  return (
    <html lang="it">

      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon-default-img.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project Name</title>
      </head>

      {/* CONTEXT */}
      <MainContextProvider>

        <CSS_Layer>

          <body>

            {/* debug */}
            {/* <TEST /> */}

            <Header />

          </body>

        </CSS_Layer>

      </MainContextProvider>

    </html>
  );
}
