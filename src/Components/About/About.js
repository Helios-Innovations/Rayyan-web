import React from 'react';
import companyImage from '../image/ryyanposter.jpg'
import { FaCloud, FaSearch, FaBitcoin, FaPaperPlane, FaPhone, FaPhoneAlt, FaAddressCard, FaPager } from 'react-icons/fa';
import './abt.css';
import Pcard from './Pcard';

const AboutUs = () => {
  return (
    <>
    <div className='about-section'>
      <div className="about-left">
        <img src={companyImage}  alt="Company Image"/>
            </div>

           
            <div className="about-right">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis fugiat a dolorem at similique maxime dolorum dolore
                    enim dicta voluptatibus, illum recusandae, vel optio tempore
                    ipsum incidunt eum. Aspernatur, repellendus.
                </p>
                <div className="address">
                    <ul>
                        <li>
                            <span className="address-logo">
                                <FaPaperPlane size="2rem"/>
                            </span>
                            <p>Address</p>
                            <span className="saprater">:</span>
                            <p>Imphal, Manipur, India</p>
                        </li>
                        <li>
                            <span className="address-logo">
                                <FaPhoneAlt size="2rem"/>
                            </span>
                            <p>Phone No</p>
                            <span className="saprater">:</span>
                            <p>+91 987-654-4321</p>
                        </li>
                        <li>
                            <span className="address-logo">
                               <FaPager size="2rem"/>
                            </span>
                            <p>Email ID</p>
                            <span className="saprater">:</span>
                            <p>helios@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div className="expertise">
                    <h3>Our Expertise</h3>
                    <ul>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-html5"></i>
                            </span>
                            <p>Web Dev</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-css3-alt"></i>
                            </span>
                            <p>ML/AI</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-node-js"></i>
                            </span>
                            <p>Block-Chain</p>
                        </li>
                        <li>
                            <span className="expertise-logo">
                                <i className="fab fa-react"></i>
                            </span>
                            <p>Cyber Security</p>
                        </li>
                    </ul>
                </div>
            </div>
      </div>

      </>
  );
};

export default AboutUs;