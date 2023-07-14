import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axon1 from "../assets/svg/axon1.svg";
import axon2 from "../assets/svg/axon2.svg";
import axon3 from "../assets/svg/axon3.svg";
import axon4 from "../assets/svg/axon4.svg";
import axon5 from "../assets/svg/axon5.svg";
const Sliders = () => {
    const settings = {
      dots: false,
      infinite: true,
        speed: 500,
      centerMode:true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 600,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 600,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 600,
          },
        },
      
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 600,
          },
        },
        {
          breakpoint: 321,
          settings: {
            slidesToShow: 1,
            infinite: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 600,
          },
        },
      ],
    };

  return (
    <div className="text-center">
      <Slider {...settings}>
        <div>
          <div className="my-2">
            <img className="axon1" src={axon1} alt="axon1" />
          </div>
        </div>
        <div>
          <div className="my-2">
            <img className="axon1" src={axon2} alt="axon2" />
          </div>
        </div>
        <div>
          <div className="my-2">
            <img className="axon1" src={axon3} alt="axon3" />
          </div>
        </div>
        <div>
          <div className="my-2">
            <img className="axon1" src={axon4} alt="axon4" />
          </div>
        </div>
        <div>
          <div className="my-2">
            <img className="axon1" src={axon5} alt="axon5" />
          </div>
        </div>
        <div>
          <div className="my-2">
            <img className="axon1" src={axon3} alt="axon3" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders
