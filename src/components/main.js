import React from 'react'
import Wrapper from './wrapper'
import Card from './card'
import characters from '../characters.json'
import '../styles/main.css'

function Main () {
  return (
    <Wrapper>
      <main class='container'>
        {characters.map(character => (
          <Card
            image={character.image}
            name={character.name}
          />
        ))}
      </main>
    </Wrapper>
  )
}

export default Main
