import React from 'react';
import bike1 from '../image/Vehicles/Bike1.jpg';
import bike2 from '../image/Vehicles/scooter1.jpg'

import './crd.css';

function Pcard() {
  return (
    <div className="App">
      <div className="service-card">
        <div className="text-content">
          <h2>E-Bike</h2>
          <p>
            Whatever type of cloud computing services you use, one thing is certain: large quantities of data will move back and forth between your end users and the cloud provider's data centers, over the Internet. That's why whatever type of cloud services you use, OASIS INFOBYTE can help your organization have a better cloud experience and reap greater benefits from your cloud services investment.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="image-content">
          <img src={bike1} alt="Cloud Computing" />
        </div>
      </div>

      <div className="service-card">
      <div className="image-content">
          <img src={bike2} alt="Graphic Design" />
        </div>
        <div className="text-content">
          <h2>E-Scooter</h2>
          <p>
            Our creative designers offer outstanding and attention-grabbing visuals for brochures, banners, flyers, logos, business cards, e-books, and many more. Our graphic designs can develop a great impression on your prospect's mind. With a complete mixture of professionalism and stunning creativity skills, our expert designers can establish a bright profile for your business in the online world.
          </p>
          <button className="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Pcard;
