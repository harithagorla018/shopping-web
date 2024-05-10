import React from 'react';
import './Footer.css';
import logo3 from '../../images/logo3.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo3} alt='' width={100} height={60}/>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <InstagramIcon />
            </div>
            <div className='footer-icons-container'>
                <FacebookIcon />
            </div>
            <div className='footer-icons-container'>
                <TwitterIcon />
            </div>
            <div className='footer-icons-container'>
                <YouTubeIcon />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer