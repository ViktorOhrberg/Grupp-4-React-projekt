import React from 'react'
import bild from '../img/Scandinavia.svg'
import CountryMarker from './CountryMarker';
import { useState } from 'react';
import ShowInfo from './ShowInfo'

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    borderRadius: "30%",
    height: "350px",
    width: "280px",
    margin: "auto",
    backgroundImage: `url(${bild})`,
    backgroundSize: 'cover'
};

const capitals = ['Oslo', 'Sthlm', 'Cph', 'Helsi'];
const Map = () => {
    const [show, setShow] = useState(false);
    const [tempCap, setTempCap] = useState("");

    return (
        <div className="MapBox" style={mystyle}>
            {capitals.map(capital =>
                <CountryMarker capital={capital}
                    toggleShow={setShow} switchTempCap={setTempCap} />
            )
            }
            {show && <ShowInfo capital={tempCap} />}

            {/* {/* <CountryMarker capitol={capitals[index]} predicate={predicate} /> */}
            {/* <CountryMarker capitol={capitals[index]} predicate={predicate} /> */}

        </div>
    )
}

export default Map