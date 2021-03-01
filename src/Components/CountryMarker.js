import React from 'react'


const CountryMarker = ({ capital, toggleShow, switchTempCap }) => {
    return (
        <>
            <button className={capital}
                onClick={() => {
                    toggleShow(true);
                    switchTempCap(capital);
                }} >''
        </button>
        </>
    )
}

export default CountryMarker
