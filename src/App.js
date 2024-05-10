import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Shop from './Pages/Shop.js';
import ShopCategory from './Pages/ShopCategory.js'
import Product from './Pages/Product.js';
import Cart from './Pages/Cart.js';
import LoginSignUp from './Pages/LoginSignup.js'
import Footer from './Components/Footer/Footer.js';
import menbanner1 from './images/menbanner1.PNG';
import womenbanner from './images/womenbanner.PNG';
import kidbanner from './images/kidsbanner.PNG'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory banner={menbanner1} category="men" />}/>
            <Route path="/womens" element={<ShopCategory banner={womenbanner} category="women" />}/>
            <Route path='/kids' element={<ShopCategory banner={kidbanner} category="kids" />}/>
            <Route path="/product" element={<Product />}> 
                <Route path=':productId' element={<Product />} />
            </Route>
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LoginSignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>  
      </div>
    </>
    
  );
}

export default App;
