import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ShopCategory = (props) => {
  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' width='100%' height={250}/>
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          <div style={{paddingTop:'5px'}}>Sort by</div>
          <div style={{paddingTop:'3px'}} >
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <div className='shopcategory-products'>
        {all_product.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null
            }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory