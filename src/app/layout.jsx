// CLIENT SIDE ON
// Permette di utilizzare gli HOOKS, COMPONENTS e CONTEXT di React lato Client, allineando React Js a Next Js.
"use client";


// UTILITY
import "./globals.css";


// CONTEXTS
import { MainContextProvider } from "../../contexts/MainContext.jsx";


// COMPONENTS


// COMPONENT EXPORT
export default function RootLayout({ children }) {

  return (
    <html lang="it">

      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon-default-img.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Project Name</title>
      </head>

      <body>

        {/* CONTEXT */}
        <MainContextProvider>



        </MainContextProvider>

      </body>
    </html>
  );
}
