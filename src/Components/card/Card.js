import React from 'react';
import Slider from 'react-slick';
import { FaCar, FaArrowLeft, FaArrowRight, FaLaptop, FaPhone, FaToolbox, FaVoicemail, FaBicycle, FaServicestack } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './cardstl.css';
import Animation from '../Frame/Frame';

const CardSlider = () => {
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', right: '10px' }}
        onClick={onClick}
      >
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', left: '10px', zIndex: 1 }}
        onClick={onClick}
      >
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 1500,// Slide every 2 seconds
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const cards = [
    { id: 1, icon: <FaCar/>, title: 'Card 1', content: 'Lorem Ipsum galore! Whether you’re designing, testing layouts, or just having fun with placeholder text, may your lorem be ipsumful!' },
    { id: 2, icon: <FaServicestack />, title: 'Card 2', content: 'Lorem Ipsum galore! Whether you’re designing, testing layouts, or just having fun with placeholder text, may your lorem be ipsumful!' },
    { id: 3, icon: <FaBicycle />, title: 'Card 3', content: 'Lorem Ipsum galore! Whether you’re designing, testing layouts, or just having fun with placeholder text, may your lorem be ipsumful!' },
    { id: 4, icon: <FaLaptop />, title: 'Card 4', content: 'Lorem Ipsum galore! Whether you’re designing, testing layouts, or just having fun with placeholder text, may your lorem be ipsumful!' },
    { id: 5, icon: <FaPhone />, title: 'Card 5', content: 'Lorem Ipsum galore! Whether you’re designing, testing layouts, or just having fun with placeholder text, may your lorem be ipsumful!' },
  ];

  return (  
    <div className='service-section'>
      <h1 className='header'>Our Services</h1>
      <div className="card-slider">
        <Slider {...settings}>
          {cards.map(card => (
            <div key={card.id} className="card">
              <div className="icon-frame">
                {card.icon}
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-content">{card.content}</p>
              <button className='btn'>Read More</button>
            </div>
          ))}
        </Slider>
      </div>
              <Animation/>
    </div>
  );
};

export default CardSlider;
