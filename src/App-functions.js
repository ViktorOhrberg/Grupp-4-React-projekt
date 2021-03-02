import React from 'react'
import './App.css'
import Map from './Components/Map'

// toggla frqam landsinfo

function App() {
  const greeting = 'Grupp4 React app'
  const today = new Date().toLocaleDateString()

  return (
    <div className='App'>

      <header className='App-header'>
        <h1>
          {greeting}
        </h1>
      </header>
      <p>Today is {today}</p>
      <Map/>
      {/* <div className="infoBox"> */}
      {/* </div> */}
    </div>
  )
}


// stillbild på karta med interaktiva element
// Container med background img (europa karta)
// Klicka på land och få upp basfakta { Bild på flaggan, population
// embedded film (youtube)}
// 


export default App