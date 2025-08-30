import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Bhel from "../../assets/Bhel.png";
import mixVeg from "../../assets/mixVeg.png";
import MenuProduct from '../Menu/MenuProduct.jsx';

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <Navbar />

        <img src={Bhel} alt="Bhel" className='bhel' />
        <img src={mixVeg} alt="Mix Veg" className='mixveg' />

        <div className='block1'></div>
        <div className='block2'></div>
        <div className='block3'></div>

        <div className='hero-Details'>
          <h1 className="main-heading">
            best food for <br /> your taste
          </h1>
          <p className='msg'>
            Italian food makes people think of big family dinners, so you may want to position your restaurant as a place to bring the whole family.
          </p>
          <button className='btn'>Read More</button>
        </div>
      </div>

       {/* <div className='MenuItem'>
        <MenuProduct />
      </div>  */}
    </>
  );
};

export default Home;
