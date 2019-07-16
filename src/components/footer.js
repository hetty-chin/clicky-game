import React from 'react'
import '../styles/footer.css'
import reactsvg from './assets/images/react.svg'

function Footer () {
  return (
    <footer className='footer'>
      <div className='bottom'>Clicky Game! <img alt='react' src={reactsvg} />
      </div>
    </footer>
  )
}

export default Footer
