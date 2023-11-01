import React, { useEffect } from 'react'
import './card.css'

export default function Card({card}){
  return (
    <div className='card'>
      <img src={card.urls.small} alt={card.alt_description} />
    </div>
  )
}
