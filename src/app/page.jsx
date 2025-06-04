// READY FOR CLIENT SIDE
"use client";


// CONTEXTS
import { useMainContext } from "../../contexts/MainContext";


// ASSETS
import Button1 from "../../layouts/Button1";
import Toggle from "../../layouts/Toggle";


// EXPORT
export default function HomePage() {

  // DATA - CONTEXT
  const mainContext = useMainContext();

  return <>

    <h3>{mainContext.listSymbol} CONTEXT INFO</h3>
    <Toggle
      value={mainContext.darkMode}
      setValue={mainContext.switchMode}
      textOn='Darkmode on'
      textOff='Darkmode off'
    />
    <p>Device type: {mainContext.deviceType}</p>

    < Button1
      text='button'
      onClick={null}
      extraClass={''}
    />

    < Button1
      text='color 1'
      onClick={null}
      extraClass={'color1'}
    />

    < Button1
      text='color 2'
      onClick={null}
      extraClass={'color2'}
    />

    < Button1
      text='color 3'
      onClick={null}
      extraClass={'color3'}
    />

    <a href="/abcdefghijklmnopq" className="hyperlink button">
      Go to non-existing Page
    </a>

    <h1>{mainContext.listSymbol} Super Titolo Grande</h1>
    <h2>Titolo medio sezione</h2>
    <h3>Titolo h3</h3>
    <h4>Titolo di una informazione importante</h4>
    <h5>H5 Title</h5>
    <p>Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. Paragrafo semplice con contenuti di testo estesi. </p>
  </>
}