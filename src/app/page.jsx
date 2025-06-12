// READY FOR CLIENT SIDE
"use client";


// CONTEXTS
import { useMainContext } from "../../contexts/MainContext";


// COMPONENTS
import Section from "../../layouts/Section";
import Button from "../../layouts/Button";
import Toggle from "../../layouts/Toggle";
import PageBottomButtons from "../../components/PageBottomButtons";


// EXPORT
export default function HomePage() {

  // DATA - CONTEXT
  const mainContext = useMainContext();

  return <>

    <h1 className='space2'>Home Title</h1>

    <Section title='First section Title'>
      <p>First section content</p>
    </Section>

    <Section title='Second section Title'>
      <p>Second section content</p>
    </Section>

    <h3>{mainContext.listSymbol} CONTEXT INFO</h3>

    <Toggle
      value={mainContext.darkMode}
      setValue={mainContext.switchMode}
      textOn='Darkmode on'
      textOff='Darkmode off'
    />
    <p>Device type: {mainContext.deviceType}</p>

    < Button
      text='button'
      onClick={null}
    />

    < Button
      text='button1'
      onClick={null}
      extraClass={'button1'}
    />

    < Button
      text='button2'
      onClick={null}
      extraClass={'button2'}
    />

    < Button
      text='button3'
      onClick={null}
      extraClass={'button3'}
    />

    <h1>H1</h1>

    <h2>H2</h2>

    <h3>H3</h3>

    <h4>H4</h4>

    <h5>H5</h5>

    <p>P: Abc</p>

    <p className="smallText">P: small</p>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

    <h2>Products</h2>

    {mainContext.products.map((p, index) => <p key={index}>{p.name}</p>)}

    <h2>Unique Categories</h2>
    {mainContext.categories.map((c, index) => <p key={index}>{c}</p>)}

    <h2>Unique Tags</h2>
    {mainContext.tags.map((t, index) => <p key={index}>{t}</p>)}


    {/* BOTTOM BUTTONS */}
    <PageBottomButtons toContacts={true} />
  </>
}