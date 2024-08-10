import React from 'react'
import { Link } from 'react-router-dom';
import { FaBeer, FaBitcoin, FaCloud, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaSearch, FaTwitter } from "react-icons/fa";
import './agt.css'
import poster from '../image/ryyanposter.jpg';
import agent from '../image/agent.jpg'
import girl from '../image/girl.jpg'


function Agent() {
  return (
    <div className="container1">
    <div className="header1">
        <h1>Our Agents</h1>
    </div>
    <div className="sub-container1">
        <div className="teams">
            <img src={agent} alt="" height="100px"/>
            <div className="name">Anurag</div>
            <div className="design">Contact : 9876543210</div>
            <button className='bs-btn'><Link to="/HomeTwo">Contact</Link></button>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>
       
        <div className="teams">
            <img src={girl} alt="" height="100px"/>
            <div className="name">Sita</div>
            <div className="design">Contact : 9876543210</div>
            <button className='bs-btn'><Link to="/HomeThree">Contact</Link></button>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>
       
        <div className="teams">
           <img src={agent} alt="" height="100px"/>
            <div className="name">Shyam</div>
            <div className="design">Contact : 9876543210</div>
            <button className='bs-btn'><Link to="/Home">Contact</Link></button>
            <div className="social-links">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>

        <div className="teams">
           <img src={girl} alt="" height="100px"/>
            <div className="name">Radhika</div>
            <div className="design">Contact : 9876543210</div>
            <button className='bs-btn'><Link to="/HomeReal">Contact</Link></button>
            <div className="social-links">
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaInstagram/></a>
  	 				        <a href="#"><FaTwitter/></a>
  	 				        <a href="#"><FaLinkedin/></a>
            </div>
        </div>
        
    </div>
</div>

  )
}

export default Agent