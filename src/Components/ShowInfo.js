import React from 'react'

let countriesDict =
    {"Oslo": { capital: "Oslo", inhabitants: "1,019,000" },
    "Sthlm": { capital: "Stockholm", inhabitants: "1,608,000" },
    "Cph": { capital: "Köpenhamn", inhabitants: "1,334,000" },
    "Helsi": { capital: "Helsingfors", inhabitants: "1,292,000" }
};

const ShowInfo = ({ capital }) => {
    return (
        <div className="Infobox">
            <h4>Capital: {countriesDict[capital].capital}</h4>
            <h4>Inhabitants: {countriesDict[capital].inhabitants}</h4>
        </div>
    )
}

export default ShowInfo