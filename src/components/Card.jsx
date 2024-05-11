import React from 'react'

const Card = (props) => {
  return (
    <>
    
      <div className='card'>
          <img src={`./public/images/${props.img}`} className='card--image'/> 
          <div className='card--stats'>
              <img src='./public/images/star.png' className='card--star'></img>
              <span>{props.rating}</span>
              <span className='gray'>({props.reviewCount}) *</span>
              <span className='gray'>{props.location}</span>
          </div>
          <p>{props.title}</p>
          
          <p><span className='bold'>from {props.price}</span>/ person</p>
    </div>
  </>
  )
}

export default Card