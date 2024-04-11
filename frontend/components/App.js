import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPeople = 'http://localhost:9009/api/people'
const urlPlanets = 'http://localhost:9009/api/planets'

const requests = [
  axios.get(urlPeople),
  axios.get(urlPlanets)
]


function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])
  
  // ❗ Create effects to fetch the data and put it in state
  useEffect( () => {
    Promise.all(requests)
      .then(res => {
        const characterData = res[0].data;
        const planetData = res[1].data;
        const combinedData = characterData.map((character) => ({
          ...character,
          homeworld: planetData.find((planet) => planet.id === character.homeworld),
        }))
     
        //console.log(combinedData)
        setCharacters(combinedData)
      })
      .catch(err => {
        console.log(err.message)
      })
   }, [])

   //if (!characters.length) return 'Loading Charaters...'
  //  const toggleHomeworld = (index) => {
  //   setCharacters((prevCharacters) =>
  //     prevCharacters.map((character, i) => {
  //       if (i === index) {
  //         return { ...character, showHomeworld: !character.showHomeworld };
  //       }
  //       return character;
  //     })
  //   );
  // };

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map((character, index) => (
        <Character
          key={index}
          characterName={character.name}
          characterHomeworld={character.homeworld.name}
          //onClick={() => toggleHomeworld(index)}
        />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
