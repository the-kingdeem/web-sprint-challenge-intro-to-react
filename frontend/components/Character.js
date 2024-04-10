import React, { useState } from 'react'

function Character({characterName, characterHomeworld}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState)
  }
  return (
    <div>
      <div onClick={toggleHomeworld} className='character-card'>
        <h3 className='character-name' >{characterName}</h3>
         {showHomeworld && <p>
         <span className='character-planet'>Planet: {characterHomeworld}</span>
        </p>}
      </div>
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character
