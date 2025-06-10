// UTILITY
import Link from 'next/link';
import { memo } from 'react';


// ASSETS
const redCross = '/miscellaneous/cross-red.png';


// EXPORT
function NotFoundPage() {
  return <>

    <div className="notFoundContainer">
      <h2>Pagina inesistente</h2>

      <div className="imgContainer">
        <Link href="/">
          <img src={redCross} alt="" />
        </Link>
      </div>

      <Link href="/" className="hyperlink button color2">
        Torna alla Home
      </Link>
    </div>

  </>
}


// EXPORT MEMO()
export default memo(NotFoundPage);