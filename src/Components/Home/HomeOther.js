import React from 'react'
import SliderThree from '../Landing/SliderThree';
import Product from '../Products/Product';
import CardSlider from '../card/Card';
import AboutUs from '../About/About';
import Contact from '../Contact/Contact';


function HomeOther() {
  return (
    <div>
          <Product/>
          <CardSlider/>
          <AboutUs/>
          <Contact/>
    </div>
  )
}

export default HomeOther