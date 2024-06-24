import React from 'react'
import flipkart from "../Images/flipkart.png";
import amazon from "../Images/amazon.png"
import Shoe from "../Images/shoe_image.png"
const Hero = () => {
  return (
    <div>
      <main className='hero container'>
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST
            YOUR FEET DESERVE THE BEST
            </p>
            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondary-btn'>Category</button>
            </div>


            <div className='shopping'>
                <p>Also Available On</p>
            </div>
            <div className='brand-icons'>
                <img src={amazon}alt='amazon-icon'/>
                <img src={flipkart} alt='flipkart-icon'/>
            </div>
        </div>
        <div className='hero-image'>
            <img src={Shoe} alt='Shoe_image'className='floating'/>

        </div>
      </main>
    </div>
  )
}

export default Hero
