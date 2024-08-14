import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './ray.css';

import RealPoster from '../image/RealPoster.jpg';
import Bike2 from '../image/Vehicles/Bike2.jpg';
import rick from '../image/Vehicles/Erickshaw2.jpg';
import show from '../image/TwoShowroon.jpg';
import SliderHome from '../Landing/SliderHome';
import AboutUs from '../About/About';
import Contact from '../Contact/Contact';
import Pcard from '../About/Pcard';

function RG() {
  return (
    <>
      <SliderHome />
      <div className="container1">
        <div className="header1">
          <h1>Rayyan Groups</h1>
        </div>
        <div className="sub-container1">
          <div className="teams">
            <img src={Bike2} alt="Two Wheelers" height="100px" />
            <div className="name">Two Wheelers</div>
            <Link to="/HomeTwo" className="bs-btn">Explore</Link>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <div className="teams">
            <img src={rick} alt="Three Wheelers" height="100px" />
            <div className="name">Three Wheelers</div>
            <Link to="/HomeThree" className="bs-btn">Explore</Link>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <div className="teams">
            <img src={show} alt="Rayyan Interprises" height="100px" />
            <div className="name">Rayyan Interprises</div>
            <Link to="/HomeOther" className="bs-btn">Explore</Link>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <div className="teams">
            <img src={RealPoster} alt="Real Estate" height="100px" />
            <div className="name">Real Estate</div>
            <Link to="/HomeReal" className="bs-btn">Explore</Link>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
      <Pcard />
      <AboutUs />
      <Contact />
    </>
  );
}

export default RG;
