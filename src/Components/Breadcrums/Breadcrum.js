import React from 'react';
import './Breadcrum.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        HOME <KeyboardArrowRightIcon/> SHOP <KeyboardArrowRightIcon/> {product.category} <KeyboardArrowRightIcon/> {product.name} 
    </div>
  )
}

export default Breadcrum