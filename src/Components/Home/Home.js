import React from 'react'
import Slider from '../Landing/Slider';
import Product from '../Products/Product';
import CardSlider from '../card/Card';
import AboutUs from '../About/About';
import Contact from '../Contact/Contact';


function Home() {
  return (
    <div>
          <Slider/>
          <Product/>
          <CardSlider/>
          <AboutUs/>
          <Contact/>
    </div>
  )
}

export default Home