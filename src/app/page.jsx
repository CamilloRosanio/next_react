// READY FOR CLIENT SIDE
"use client";


// CONTEXTS
import { useMainContext } from "../../contexts/MainContext";


// COMPONENTS
import Section from "../../layouts/Section";
import Button1 from "../../layouts/Button";
import Toggle from "../../layouts/Toggle";


// EXPORT
export default function HomePage() {

  // DATA - CONTEXT
  const mainContext = useMainContext();

  return <>

    <Section title='My Section Title'>
      <p>Section content</p>
    </Section>

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

    <h1>{mainContext.listSymbol} H1 Main Title</h1>

    <h2>H2 Section Title</h2>

    <h3>H3 Paragraph Title</h3>

    <h4>H4 Important info Title</h4>

    <h5>H5 Title</h5>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

    <h2>Products</h2>

    {mainContext.products.map((p, index) => <p key={index}>{p.name}</p>)}

    <h2>Keys</h2>

    {mainContext.pKeys.map((k, index) => <p key={index}>{k.key}</p>)}
  </>
}