import React, { useEffect, useRef, useState } from 'react';
import scooter1 from '../image/scooter1.jpg';
import Rick1 from '../image/Rick1.jpg'
import Rick2 from '../image/Rick2.jpg'
import Erickshaw2 from '../image/Vehicles/Erickshaw2.jpg'
import erickshaw from '../image/erickshaw.jpg'
import './slide.css';

const SliderThree = () => {
  const [resetAnim, setResetAnim] = useState(false);
  const listRef = useRef(null);
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);

  const items = [
    { image: Rick1, title: '', name: 'ERickshaw', des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { image: Rick2, title: '', name: 'ERickshaw', des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' },
    { image: erickshaw, title: '', name: 'ERickshaw', des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis culpa similique consequuntur, reprehenderit dicta repudiandae.' }    
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

export default SliderThree;
