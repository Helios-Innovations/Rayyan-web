import React from 'react'
import { Link } from 'react-router-dom';
import { FaBeer, FaBitcoin, FaCloud, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaSearch, FaTwitter } from "react-icons/fa";
import './ray.css'

import RealPoster from '../image/RealPoster.jpg'
import Bike2 from '../image/Vehicles/Bike2.jpg'
import rick from '../image/Vehicles/Erickshaw2.jpg'
import show from '../image/TwoShowroon.jpg'
import SliderHome from '../Landing/SliderHome';


function RG() {
  return (
  <>
     <SliderHome/>
    <div className="container1">
    <div className="header1">
        <h1>Rayyan Groups</h1>
    </div>
    <div className="sub-container1">
        <div className="teams">
            <img src={Bike2} alt="" height="100px"/>
            <div className="name">Two Wheelers</div>
            <button className='bs-btn'><Link to="/HomeTwo">Explore</Link></button>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>
       
        <div className="teams">
            <img src={rick} alt="" height="100px"/>
            <div className="name">Two Wheelers</div>
            <button className='bs-btn'><Link to="/HomeTwo">Explore</Link></button>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>
       
        <div className="teams">
           <img src={show} alt="" height="100px"/>
            <div className="name">Other Products</div>
            <button className='bs-btn'><Link to="/HomeOther">Explore</Link></button>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>

        <div className="teams">
           <img src={RealPoster} alt="" height="100px"/>
            <div className="name">Real Estate</div>
            <button className='bs-btn'><Link to="/HomeReal">Explore</Link></button>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>
        
    </div>
</div>
</>
  )
}

export default RG