// NOTES


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from "react";


// ASSETS
import { switchBoolean } from "../assets/utilityFunctions";


// COMPONENTS
import SquarePicProduct from "../layouts/SquarePicProduct";
import Label from "../layouts/Label";


// EXPORT
function ProductCard({ img, name, category, price, available, tags, description }) {

  // USE-ROUTER

  // USE-STATE
  const [showDetails, setShowDetails] = useState(false);

  // SUPPORT
  const listSymbol = '○';
  const listSymbolBetween = '▸';

  // Show Details
  function openDetails() {
    switchBoolean(setShowDetails);
  }

  return <>

    <div className="productCard">

      {/* IMAGE */}
      <SquarePicProduct
        path={img}
        defaultText='immagine non disponibile'
      />

      {/* PRODUCT DETAILS */}
      <div className="productDetails">

        <h4>{name}</h4>

        <ul className="list">

          <li>
            <p><strong>{listSymbol} Categoria {listSymbolBetween} </strong>{category}</p>
          </li>

          <li>
            <p><strong>{listSymbol} Prezzo {listSymbolBetween} </strong>{price} €</p>
          </li>

          <p className="label" onClick={() => openDetails()}>Più Informazioni {showDetails ? '▾' : '▸ . . .'} </p>

          {/* MORE INFO */}
          {showDetails &&
            <li className="openDetails">

              <ul>

                <li>
                  {available && <p><strong>{listSymbol} Disponibile {listSymbolBetween} </strong>si</p>}
                </li>

                {/* DESCRIPTION */}
                {description &&
                  <li>
                    <p><strong>{listSymbol} Descrizione</strong></p>
                    <p className="infoContainer">{description}</p>
                  </li>
                }

                {/* TAGS */}
                {tags &&
                  <li>
                    <p><strong>{listSymbol} Tags</strong></p>
                    {
                      <div className="infoContainer">
                        {tags && tags.map((t, index) =>
                          <Label
                            key={index}
                            item={t}
                          />
                        )}
                      </div>
                    }
                  </li>
                }

              </ul>

            </li>
          }
        </ul>
      </div>
    </div>

  </>
}


// EXPORT MEMO()
export default memo(ProductCard);