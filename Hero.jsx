import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand-icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className=' hero'>
       style={{ background: `url(${hero_image}) no-repeat center center/cover` }}
      <div className='hero-left'>
        <h2>NEW ARRIVALS</h2>
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
      </div>
      <div className="hero-latest-btn">
        <div>Latest collection</div>
        <img src={arrow_icon} alt=""/>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt=""/>

      </div>
    </div>
  )
}

export default Hero
