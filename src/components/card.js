import React from 'react'

function Card (props) {
  return (
    <div class='click-item'>
      <img alt={props.name} src={props.image} />
    </div>
  )
}

export default Card
