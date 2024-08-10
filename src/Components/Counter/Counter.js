import React, { useEffect, useRef } from 'react';
import './count.css'; // Import the CSS file

const Counter = () => {
  const counters = useRef([]);

  useEffect(() => {
    counters.current.forEach((counter) => {
      let startValue = 0;
      let endValue = parseInt(counter.getAttribute('data-val'));
      let duration = Math.floor(4000 / endValue);
      let interval = setInterval(() => {
        startValue += 1;
        counter.textContent = startValue;
        if (startValue === endValue) {
          clearInterval(interval);
        }
      }, duration);
    });
  }, []);

  return (
    <div className="counter-wrapper">
      <div className="counter-container">
        <i className="fa-solid fa-car"></i>
        <span ref={(el) => (counters.current[0] = el)} className="counter-num" data-val="400">
          000
        </span>
        <span className="counter-text">Vehicles Delivered</span>
      </div>
      <div className="counter-container">
        <i className="fas fa-smile-beam"></i>
        <span ref={(el) => (counters.current[1] = el)} className="counter-num" data-val="380">
          000
        </span>
        <span className="counter-text">Happy Customers</span>
      </div>
      <div className="counter-container">
        <i className="fa-solid fa-motorcycle"></i>
        <span ref={(el) => (counters.current[2] = el)} className="counter-num" data-val="225">
          000
        </span>
        <span className="counter-text">Products Available</span>
      </div>
      <div className="counter-container">
        <i className="fas fa-star"></i>
        <span ref={(el) => (counters.current[3] = el)} className="counter-num" data-val="280">
          000
        </span>
        <span className="counter-text">Five Stars</span>
      </div>
    </div>
  );
};

export default Counter;
