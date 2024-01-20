import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sliderImg1 from "../assets/image/slider-chair-img1.webp";
import sliderImg2 from "../assets/image/slider-chair-img2.webp";
import sliderImg3 from "../assets/image/slider-chair-img3.webp";
import { Star } from "./Icons";
const mySlider = [
    {
        id: 1,
        Img: sliderImg1,
        Rating:<Star/>,
        name:"Single Sofa",
        rate:'₹ 1200.00'
    },
    {
        id: 2,
        Img: sliderImg2,
        Rating:<Star/>,
        name:"Single Sofa",
        rate:'₹ 1200.00'
    },
    {
        id: 3,
        Img: sliderImg3,
        Rating: <Star/>,
        name:"Single Sofa",
        rate:'₹ 1200.00'
    },
    {
        id: 4,
        Img: sliderImg1,
        Rating: <Star/>,
        name:"Single Sofa",
        rate:'₹ 1200.00'
    },
    {
        id: 5,
        Img: sliderImg2,
        Rating: <Star/>,
        name:"Single Sofa",
        rate:'₹ 1200.00'
    },
];
const Buy = () => {
    const btn = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        centerPadding: "60px",
        slidesToShow: 3.08,
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
                slidesToShow: 2.08,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 890,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2.3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1.7,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 420,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoPlay:true,
                autoPlaySpeed:1000,
              }
            },
          ]
    };
    const card = mySlider.map((mySlider) => (
        <div className="mx-3" key={mySlider.id}>
            <div className="max-w-[295px] max-h-[338px] w-full h-full pb-[27px]  bg-white pl-[17px] pt-[15px] pr-[12px] shadow-[2px_7px_28px_0px_#0000000D] mx-3">
                <img src={mySlider.Img} alt="img1" className="mb-[13px]" />
                <div className="flex justify-between items-center">
                    <p className=" font-poppins text-xl leading-normal font-medium text-nowrap ">
                        {mySlider.name}
                    </p>
                    <span>{mySlider.Rating}</span>
                </div>
                <div className="flex gap-[6.83px] items-center">
                    <div className="flex gap-[2.87px] items-center">
                        <p className="font-poppins text-[28.68px] leading-normal teext-center font-semibold">
                           {mySlider.rate}
                        </p>
                    </div>
                    <div className="flex gap-[1.14px] items-center">
                        <p className=" text-[11.37px] font-poppins leading-normal font-normal text-center text-[#C4C4C4]">
                        {mySlider.rate}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <div className="bg-[#2D39490A] md:mt-[266px] mt-4 md:pt-[90px] pt-4 pb-4 md:pb-[98px] relative overflow-x-clip ">
            <div className="max-w-[741px] max-h-[417px] h-full bg-grey-gradient w-full absolute right-0 top-[-42%] "></div>
            <div className="flex flex-wrap flex-row -mx-3">
                <div className="min-[890px]:w-5/12 w-full px-3 flex justify-center">
                    <div >
                        <div className="flex flex-col tems-center lg:items-start gap-[9px]">
                            <div className="w-[16%] border border-black  border-solid hidden md:block "></div>
                            <p className="text-xl text-center text-[#BD7D41] font-poppins">Shopping Store</p>
                        </div>
                        <h2 className=" pt-[29px] text-[35px] font-poppins font-bold leading-normal max-w-[436px] text-center lg:text-start">Buy trending furniture names.</h2>
                        <p className=" pt-[19px] text-lg font-poppins leading-normal font-normal text-[#000000B2] max-w-[422px] text-center lg:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta</p>
                        <div className="flex gap-[14px] pt-[39px]">
                            <button className="w-[41px] h-[41px] rounded-[10px] bg-white flex justify-center items-center" onClick={() => btn?.current?.slickPrev()}>
                                <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM21 4.5H1V3.5H21V4.5Z"fill="black"/>
                                </svg>
                            </button>
                            <button className="w-[41px] h-[41px] rounded-[10px] bg-white flex justify-center items-center" onClick={() => btn?.current?.slickNext()}>
                                <svg width="21" height="8" viewBox="0 0 21 8"fill="none"xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="min-[890px]:w-7/12 min-[890px]:mt-0 mt-[50px] w-full relative z-[-3]">
                    <Slider ref={btn} {...settings} className="absolute right-0 z-10">{card}</Slider>
                    <div className='w-[741px] h-[417px] bg-[#243040] absolute top-[-73%] right-0 hidden lg:block'></div>
                </div>
            </div>
        </div>
    );
};
export default Buy
