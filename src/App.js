import React, { Component } from 'react'
import Navbar from './components/navbar'
import Header from './components/header'
import Wrapper from './components/wrapper'
import Card from './components/card'
import Footer from './components/footer'
import characters from './characters.json'
import './App.css'
import './styles/main.css'

class App extends Component {
  // setting the state
  state = {
    count: 0
  }
  // create an array to shuffle cards from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  
  characterClicked = event => {
    this.setState(
      { 
        // shuffle cards
        characters: this.shuffle(characters),
        // increases this.state by 1
        count: this.state.count + 1
      }
    )
  }

  render () {
    return (
      <div>
        <Navbar 
          count={this.state.count}
        />
        <Header />
        <Wrapper>
          <main className='container'>
            {characters.map(character => (
              <Card
                id={character.id}
                image={character.image}
                name={character.name}characterClicked={this.characterClicked}/>
            ))}
          </main>
        </Wrapper>
          
        <Footer />
      </div>
    )
  }
}

export default App
