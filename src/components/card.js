import React from 'react'

const Card = props => (
  <div className='click-item'>
    <img alt={props.name} src={props.image} onClick={() => props.characterClicked(props.id)} />
  </div>
)

export default Card
