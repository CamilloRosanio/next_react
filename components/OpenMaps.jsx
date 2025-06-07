// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, memo } from 'react';


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// ASSETS
import utilityContent from '../assets/data/utilityContent';
const imgMap = '/map/map.png';
const imgMapLight = '/map/mapLight.png';


// COMPONENTS
import Button1 from '../layouts/Button';


// EXPORT
function OpenMaps({ info }) {

    // DATA - CONTEXT
    const mainContext = useMainContext();

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
                <h3 className='space1'><span className='listSymbol'>{mainContext.listSymbol} </span>{utilityContent.openMaps.textContent.title}</h3>

                <div className="card">
                    <div className='mapContainer'>
                        <div className='mapText flexCol'>
                            <h4>{utilityContent.openMaps.textContent.subTitle}</h4>
                            <p className='space1'>{utilityContent.openMaps.textContent.paragraph}</p>

                            <a
                                target='_blank'
                                href={`${mainContext.deviceType == 'desktop' ? mapSettings.mapRootDesktop : mapSettings.mapRootMobile}${mapSettings.coordinates}`}
                                className='hyperlink'
                            >
                                <div className='buttonContainerContacts'>
                                    < Button1
                                        text={utilityContent.openMaps.textContent.mapButton}
                                        extraClass={'color2'}
                                    />
                                </div>
                            </a>
                        </div>

                        <a
                            target='_blank'
                            href={`${mainContext.deviceType == 'desktop' ? mapSettings.mapRootDesktop : mapSettings.mapRootMobile}${mapSettings.coordinates}`}
                            className='hyperlink imgSection'
                        >
                            <div className='imgContainer'>
                                <img src={mainContext.darkMode ? imgMap : imgMapLight} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        }
    </>
}


// EXPORT MEMO()
export default memo(OpenMaps);