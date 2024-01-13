import React from 'react'
import slidersofa1 from "../assets/image/slider-sofa-img1.webp";
import slidersofa2 from "../assets/image/slider-sofa-img2.webp";
import slidersofa3 from "../assets/image/slider-sofa-img3.webp";
import { Star } from "./Icons";
import Cartbtn from "./Cartbtn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Deal = () => {
  const first = React.useRef(null);
  var settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 890,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
      ]
};
  const Mycard = [
      {
          img: slidersofa1,
          name: "Single Sofa",
          star: <Star />,
          pera: "Lorem ip sumdolor",
          rate: "₹1200.00",
          btn: <Cartbtn cart="ADD TO CART" />,
      },
      {
          img: slidersofa2,
          name: "Single Sofa",
          star: <Star />,
          pera: "Lorem ip sumdolor",
          rate: "₹1200.00",
          btn: <Cartbtn cart="ADD TO CART" />,
      },
      {
          img: slidersofa3,
          name: "Single Sofa",
          star: <Star/>,
          pera: "Lorem ip sumdolor",
          rate: "₹1200.00",
          btn: <Cartbtn cart="ADD TO CART" />,
      },
      {
          img: slidersofa3,
          name: "Single Sofa",
          star: <Star />,
          pera: "Lorem ip sumdolor",
          rate: "₹1200.00",
          btn: <Cartbtn cart="ADD TO CART" />,
      },
      {
          img: slidersofa3,
          name: "Single Sofa",
          star: <Star />,
          pera: "Lorem ip sumdolor",
          rate: "₹1200.00",
          btn: <Cartbtn cart ="ADD TO CART" />,
      },
  ];
  const slidercard = Mycard.map((mycard) => (
      <div className=" w-full max-w-[422px] mx-3 max-h-[483px] bg-[#fff] py-5 px-6 hover:sha dow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] duration-300 group overflow-hidden">
          <img className="w-full group-hover:scale-[0.9] duration-300  " src={mycard.img} alt="sofa1" />
          <div className=" flex justify-between pt-4">
              <p className=" text-[20px] font-medium font-[poppins] text-black">{mycard.name}</p>
              <span>{mycard.star}</span>
          </div>
          <p className=" text-lg font-normal font-[poppins] text-[#4D4D4D] pt-4">{mycard.pera}</p>
          <div className=" flex justify-between pt-5 pb-[53px]">
              <p className=" text-[28px] font-semibold font-[poppins] text-black ">{mycard.rate}</p>
              <span>{mycard.btn}</span>
          </div>
      </div>
  ));
  return (
      <div>
          <div className=" max-w-[1320px] mx-auto px-3 pt-24 relative">
              <h2 className="text-[#BD7D41] text-xl font-normal font-[poppins] relative before:absolute before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] pl-[110px]">Shopping Store</h2>
              <div className=" flex justify-between pb-14">
                  <p className="text-[#243040] text-[35px] font-bold font-poppins">Our Products</p>
              </div>
              <Slider ref={first} className='mx-7' {...settings}>{slidercard}</Slider>
              <button className=" left-[-8%]   top-[60%] absolute " onClick={() => first?.current?.slickPrev()}>
                  <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_0_1)">
                          <circle cx="63.5" cy="58.5" r="49.5" fill="white" />
                      </g>
                      <path d="M42.2929 59.7071C41.9024 59.3166 41.9024 58.6834 42.2929 58.2929L48.6569 51.9289C49.0474 51.5384 49.6805 51.5384 50.0711 51.9289C50.4616 52.3195 50.4616 52.9526 50.0711 53.3431L44.4142 59L50.0711 64.6569C50.4616 65.0474 50.4616 65.6805 50.0711 66.0711C49.6805 66.4616 49.0474 66.4616 48.6569 66.0711L42.2929 59.7071ZM84 60H43V58H84V60Z" fill="black" />
                      <defs>
                          <filter id="filter0_d_0_1" x="0" y="0" width="131" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="2" dy="7" />
                              <feGaussianBlur stdDeviation="8" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                          </filter>
                      </defs>
                  </svg>

              </button>
              <button className=" right-[-8%] top-[60%] absolute " onClick={() => first?.current?.slickNext()}>
                  <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_0_1)">
                          <circle cx="63.5" cy="58.5" r="49.5" fill="white" />
                      </g>
                      <path d="M84.7071 59.7071C85.0976 59.3166 85.0976 58.6834 84.7071 58.2929L78.3431 51.9289C77.9526 51.5384 77.3195 51.5384 76.9289 51.9289C76.5384 52.3195 76.5384 52.9526 76.9289 53.3431L82.5858 59L76.9289 64.6569C76.5384 65.0474 76.5384 65.6805 76.9289 66.0711C77.3195 66.4616 77.9526 66.4616 78.3431 66.0711L84.7071 59.7071ZM43 60H84V58H43V60Z" fill="black" />
                      <defs>
                          <filter id="filter0_d_0_1" x="0" y="0" width="131" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix" />
                              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                              <feOffset dx="2" dy="7" />
                              <feGaussianBlur stdDeviation="8" />
                              <feComposite in2="hardAlpha" operator="out" />
                              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
                              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                          </filter>
                      </defs>
                  </svg>

              </button>
          </div>

      </div>
  )
}

export default Deal