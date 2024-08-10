import React from 'react'
import SliderThree from '../Landing/SliderThree';
import Product from '../Products/Product';
import CardSlider from '../card/Card';
import AboutUs from '../About/About';
import Contact from '../Contact/Contact';
import Product3 from '../Products/Product3';


function HomeThree() {
  return (
    <div>
          <SliderThree/>
          <Product3/>
          <CardSlider/>
          <AboutUs/>
          <Contact/>
    </div>
  )
}

export default HomeThree