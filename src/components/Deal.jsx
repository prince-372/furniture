import React from "react";
import slidersofa1 from "../assets/image/slider-sofa-img1.webp";
import slidersofa2 from "../assets/image/slider-sofa-img2.webp";
import slidersofa3 from "../assets/image/slider-sofa-img3.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Arrow1, Arrow2, Star } from "./Icons";
import Cartbtn from "./Cartbtn";
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[50px]  hidden h-[50px] sm:w-[70px] shadow-xl sm:h-[70px] lg:w-[99px] lg:h-[99px] rounded-full duration-300 min-[1570px]:flex items-center justify-center  bg-[#fff] absolute !bottom-[-15%] !left-[10%] sm:!left-[30%]  lg:!left-7  2xl:!bottom-[38%] 2xl:!left-[-10%] z-10"
  >
    {" "}
    <Arrow1 />{" "}
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-[50px]  hidden h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[99px] shadow-xl lg:h-[99px] rounded-full bg-[#fff]  min-[1570px]:flex items-center justify-center duration-300 absolute !bottom-[-15%]  !right-[10%] sm:!right-[30%]  lg:!right-6  2xl:!bottom-[38%] 2xl:!right-[-10%] z-10"
  >
    <Arrow2 />
  </button>
);

const Deal = () => {
  var settings = {
    dots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1570,
        settings: {
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const first = React.useRef(null);
  const Mycard = [
    {
      id: 1,
      ProductImg: slidersofa1,
      ProductName: "Single Sofa",
      Rating: <Star />,
      Description: "Lorem ip sumdolor",
      Price: "₹1200.00",
      AddToCart: <Cartbtn cart="ADD TO CART" />,
    },
    {
      id: 2,
      ProductImg: slidersofa2,
      ProductName: "Single Sofa",
      Rating: <Star />,
      Description: "Lorem ip sumdolor",
      Price: "₹1200.00",
      AddToCart: <Cartbtn cart="ADD TO CART" />,
    },
    {
      id: 3,
      ProductImg: slidersofa3,
      ProductName: "Single Sofa",
      Rating: <Star />,
      Description: "Lorem ip sumdolor",
      Price: "₹1200.00",
      AddToCart: <Cartbtn cart="ADD TO CART" />,
    },
    {
      id: 4,
      ProductImg: slidersofa3,
      ProductName: "Single Sofa",
      Rating: <Star />,
      Description: "Lorem ip sumdolor",
      Price: "₹1200.00",
      AddToCart: <Cartbtn cart="ADD TO CART" />,
    },
    {
      id: 5,
      ProductImg: slidersofa3,
      ProductName: "Single Sofa",
      Rating: <Star />,
      Description: "Lorem ip sumdolor",
      Price: "₹1200.00",
      AddToCart: <Cartbtn cart="ADD TO CART" />,
    },
  ];
  const slidercard = Mycard.map((mycard) => (
    <div
      data-aos="fade-left"
      className=" w-full max-w-[422px] sm:mx-3 max-h-[483px] hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] duration-300 bg-[#fff] py-5 px-6  group overflow-hidden"
      key={mycard.id}
    >
      <img
        className="w-full group-hover:scale-[0.9] duration-300  "
        src={mycard.ProductImg}
        alt="sofa1"
      />
      <div className=" flex justify-between pt-4">
        <p className=" text-[20px] font-medium font-[poppins] text-black">
          {mycard.ProductName}
        </p>
        <span>{mycard.Rating}</span>
      </div>
      <p className=" text-lg font-normal font-[poppins] text-[#4D4D4D] pt-4">
        {mycard.Description}
      </p>
      <div className=" flex justify-between pt-5 pb-4 sm:pb-9 md:pb-[53px]">
        <p className=" text-2xl sm:text-[28px] font-semibold font-[poppins] text-black ">
          {mycard.Price}
        </p>
        <span>{mycard.AddToCart}</span>
      </div>
    </div>
  ));
  return (
    <div>
      <div className=" max-w-[1320px] mx-auto px-3 pt-5 md:pt-12 lg:pt-24 relative max-md:mb-16 ">
        <h2
          data-aos="fade-left"
          className="text-[#BD7D41] text-base max-sm:text-center sm:text-xl font-normal font-[poppins] relative before:absolute sm:before:w-[96px] before:h-[1px] before:bottom-[40%] before:bg-black before:left-0 before:top-[45%] sm:pl-[110px]"
        >
          Shopping Store
        </h2>
        <div className=" flex justify-center pt-1 sm:justify-between sm:pb-7 lg:pb-14">
          <p className="text-[#243040] text-xl sm:text-[35px] font-bold max-sm:text-center font-poppins pt-5">
            Latest Deal
          </p>
        </div>

        <Slider {...settings} ref={first}>{slidercard}</Slider>
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={() => first?.current?.slickPrev()}
            className="  min-[1570px]:hidden w-[50px] h-[50px] sm:w-[70px] shadow-xl sm:h-[70px] lg:w-[99px] lg:h-[99px] rounded-full duration-300 flex items-center justify-center  bg-[#fff]  !bottom-[-15%] !left-[10%] sm:!left-[30%]  lg:!left-7  2xl:!bottom-[38%] 2xl:!left-[-10%] z-10"
          >
            {" "}
            <Arrow1 />{" "}
          </button>
          <button
            onClick={() => first?.current?.slickNext()}
            className="  min-[1570px]:hidden w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[99px] shadow-xl lg:h-[99px] rounded-full bg-[#fff]  flex items-center justify-center duration-300  !bottom-[-15%]  !right-[10%] sm:!right-[30%]  lg:!right-6  2xl:!bottom-[38%] 2xl:!right-[-10%] z-10"
          >
            <Arrow2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Deal;
