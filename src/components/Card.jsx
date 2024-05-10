import React from 'react'

const Card = () => {
  return (
      <div className='card'>
          <img className='card--image' src='./public/meditation.jpg'></img> 
          <div className='card--stats'>
              <img className='card--star'src='./star-rating-3-32.png'></img>
              <span>5.0</span>
              <span className='gray'>(6) *</span>
              <span className='gray'>India</span>
          </div>
          <p>meditation lessons</p>
          <p>Lessons with darma Ghandi</p>
          <p><span className='bold'>from $200</span>/ person</p>
    </div>
  )
}

export default Card