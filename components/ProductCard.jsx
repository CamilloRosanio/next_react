// NOTES


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS


// SUPPORT


// COMPONENTS
import SquarePicProduct from "../layouts/SquarePicProduct";


// EXPORT
function ProductCard({ name, description, category, img, tags, price, available }) {

  // USE-ROUTER

  return <>

    <div className="productCard">

      <SquarePicProduct
        path={img}
        defaultText='immagine non disponibile'
      />

      <div className="productDetails">
        <h4>{name}</h4>
      </div>

    </div>

  </>
}


// EXPORT MEMO()
export default memo(ProductCard);