// UTILITY
import Link from 'next/link';


// ASSETS
const redCross = '/miscellaneous/cross-red.png';


// EXPORT
export default function NotFoundPage() {
  return <>

    <div className="notFoundContainer">
      <h2>Page not found</h2>

      <div className="imgContainer">
        <Link href="/">
          <img src={redCross} alt="" />
        </Link>
      </div>

      <Link href="/" className="hyperlink button color2">
        Back to Home Page
      </Link>
    </div>

  </>
}