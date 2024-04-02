import React from 'react'
import './Offers.css'
import exclusive_image from '../assets/exclusive_image.png'


const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Special Offers</h1>
        <h1>Just For You</h1>
        <p>HURRY WHILE STOCK LASTS!</p>
        <button>Shop Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
