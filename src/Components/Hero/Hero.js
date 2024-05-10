import React from 'react'
import './Hero.css';
import hand from '../../images/handicon.png'
import offerimg from '../../images/offer.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand} alt=''/>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <ArrowRightAltIcon />
            </div>
        </div>
        <div className='hero-right'>
            <img src={offerimg} alt=''/>
        </div>
    </div>
  )
}

export default Hero