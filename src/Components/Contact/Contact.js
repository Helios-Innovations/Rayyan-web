import React from 'react'
import {useState , useEffect} from 'react'
import logo from '../image/ryyanposter.jpg'
import './constl.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-left-side">
        <span>
      <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
      
    </span>
          <div className="contact-address details">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-topic">Address</div>
            <div className="contact-text-one">Mantripukhri</div>
            <div className="contact-text-two">Imphal, Manipur</div>
          </div>
          <div className="contact-phone details">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-topic">Phone</div>
            <div className="contact-text-one">+0098 9893 5647</div>
            <div className="contact-text-two">+0096 3434 5678</div>
          </div>
          <div className="contact-email details">
            <i className="fas fa-envelope"></i>
            <div className="contact-topic">Email</div>
            <div className="contact-text-one">helios@gmail.com</div>
            <div className="contact-text-two">info.helios@gmail.com</div>
          </div>
        </div>
        <div className="contact-right-side">
          <div className="contact-topic-text">Send us a message</div>
          <p>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
          <form onSubmit={handleSubmit}>
            <div className="contact-input-box">
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter Your Name"
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-input-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={handleInputChange}
              />
            </div>
            <div className="contact-input-box contact-message-box">
              <textarea
                name="message"
                placeholder="Enter Your Message"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="contact-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Contact