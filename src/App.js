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
  // increases this.state by 1
  characterClicked = event => {
    this.setState(
      { 
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
          <main class='container'>
            {characters.map(character => (
              <Card
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
