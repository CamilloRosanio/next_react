// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, memo } from 'react';


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// ASSETS
import utilityContent from '../assets/data/utilityContent';


// COMPONENTS
import Button from '../layouts/Button';


// EXPORT
function OpenMaps({ info }) {

    // DATA - CONTEXT
    const { deviceType } = useMainContext();
    // ## LANGUAGE
    // const { deviceType, utilityContent } = useMainContext();
    // const { listSymbol } = utilityContent;

    // USE-STATE
    const [mapSettings, setMapSettings] = useState({
        mapRootMobile: 'geo:',
        mapRootDesktop: 'https://www.google.com/maps?q=',
        coordinates: '',
    });

    // INIT USE-EFFECT
    useEffect(() => {
        setMapSettings({
            ...mapSettings,
            coordinates: info.coordinateSede.replace(' ', ''),
        });
    }, []);

    return <>

        {info.coordinateSede &&

            <div className='mapSection'>
                <h3 className='space1'><span className='listSymbol'>{utilityContent.listSymbol}</span> {utilityContent.openMaps.textContent.title}</h3>

                <div className="card">
                    <div className='mapContainer'>
                        <div className='mapText flexCol'>
                            <h4>{utilityContent.openMaps.textContent.subTitle}</h4>
                            <p className='space2'>{utilityContent.openMaps.textContent.paragraph}</p>

                            <a
                                target='_blank'
                                href={`${deviceType == 'desktop' ? mapSettings.mapRootDesktop : mapSettings.mapRootMobile}${mapSettings.coordinates}`}
                                className='hyperlink'
                            >
                                <div className='buttonContainerContacts'>
                                    < Button
                                        text={utilityContent.openMaps.textContent.mapButton}
                                        extraClass={'buttonSolid1'}
                                    />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
}


// EXPORT MEMO()
export default memo(OpenMaps);