import React, { Component } from 'react'
import '../styles/navbar.css'
// extending so the Navbar can inherit functionality
class Navbar extends Component {
  // render to return JSX
  render () {
    return (
      <nav className='navbar'>
        <ul>
          <li className='brand'>
            <a href='/'>Clicky Game</a>
          </li>
          <li className=''>{this.props.msg}</li>
          <li className=''>Score: {this.props.count} | Top Score: {this.props.topscore}</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
