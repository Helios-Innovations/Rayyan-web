import React, { useEffect, useRef, useState } from 'react';
import show from '../image/Vehicles/show_img.jpg'
import real1 from '../image/Vehicles/real1.jpg'
import Bike from '../image/Vehicles/Bike2.jpg'
import rick from '../image/Vehicles/rcj4.jpg'
import './slide.css';

const SliderHome = () => {
  const [resetAnim, setResetAnim] = useState(false);
  const listRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const items = [
    { image: show, title: '', name: 'Showroom', des: 'Lorem ipsum dolor sit amet consectetur, ' },
    { image: real1, title: '', name: 'Apartment', des: 'Lorem ipsum dolor sit amet consectetur,'},
    { image: rick, title: '', name: 'Rickshaw', des: 'Lorem ipsum dolor sit amet consectetur,'},
    { image: Bike, title: '', name: 'E-Bike', des: 'Lorem ipsum dolor sit amet consectetur, ' } 

  ];

  const timeRunning = 7000;
  const timeAutoNext = 3000;

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const carousel = listRef.current.parentElement;
    const list = listRef.current;

    let runTimeOut;
    let runNextAuto;

    const showSlider = (type) => {
      let sliderItemsDom = list.querySelectorAll('.item');
      if (type === 'next') {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add('next');
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add('prev');
      }

      clearTimeout(runTimeOut);

      runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
      setResetAnim(true); // Temporarily remove the element
      setTimeout(() => setResetAnim(false), 0); // Re-add the element in the next tick
    };

    nextBtn.onclick = () => {
      showSlider('next');
    };

    prevBtn.onclick = () => {
      showSlider('prev');
    };

    runNextAuto = setTimeout(() => {
      nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      clearTimeout(runNextAuto);
      clearTimeout(runTimeOut);
    };
  }, []);

  return (
     <>

    <div className="carousel">
      <div className="list" ref={listRef}>
        {items.map((item, index) => (
          <div
            key={index}
            className="item"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="content">
            <div className="carousel-title">{item.title}</div>
              <div className="name">{item.name}</div>
              <div className="des">{item.des}</div>
            
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button className="prev" ref={prevBtnRef}>
          &lt;
        </button>
        <button className="next" ref={nextBtnRef}>
          &gt;
        </button>
      </div>
      {!resetAnim && <div className="timeRunning"></div>}
    </div>
    </>
  );
};

export default SliderHome;
