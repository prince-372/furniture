import React from "react";
import sofa1 from "../assets/image/sofa-img1.webp";
import sofa2 from "../assets/image/sofa-img2.webp";
import sofa3 from "../assets/image/sofa-img3.webp";
import sofa4 from "../assets/image/sofa-img4.webp";
import sofa5 from "../assets/image/sofa-img5.webp";
import sofa6 from "../assets/image/sofa-img6.webp";
import { Star } from "./Icons";
import Cartbtn from "./Cartbtn";
import Button from "./Button";


const Shopping = () => {
  const Myarry = [
    {
      id:1,
      img: sofa1,
      name: "Single Sofa",
      star: <Star />,
      pera: "Lorem ip sumdolor",
      rate: "₹1200.00",
      btn: <Cartbtn cart="ADD TO CART" />,
    },
    {
      id:2,
      img: sofa2,
      name: "Single Sofa",
      star: <Star />,
      pera: "Lorem ip sumdolor",
      rate: "₹1200.00",
      btn: <Cartbtn cart="ADD TO CART"/>,
    },
    {
      id:3,
      img: sofa3,
      name: "Single Sofa",
      star: <Star />,
      pera: "Lorem ip sumdolor",
      rate: "₹1200.00",
      btn: <Cartbtn cart="ADD TO CART"/>,
    },
    {
      id:4,
      img: sofa4,
      name: "Single Sofa",
      star: <Star />,
      pera: "Lorem ip sumdolor",
      rate: "₹1200.00",
      btn: <Cartbtn cart="ADD TO CART"/>,
    },
    {
      id:5,
      img: sofa5,
      name: "Single Sofa",
      star: <Star />,
      pera: "Lorem ip sumdolor",
      rate: "₹1200.00",
      btn: <Cartbtn cart="ADD TO CART"/>,
    },
    {
      id:6,
      img: sofa6,
      name: "Single Sofa",
      star: <Star />,
      pera: "Lorem ip sumdolor",
      rate: "₹1200.00",
      btn: <Cartbtn cart="ADD TO CART"/>,
    },
  ];
  const cardcomponent = Myarry.map((myarry) => (
  <div className=" w-full max-w-[422px] max-h-[483px] bg-[#fff] py-5 px-6 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] duration-300 group overflow-hidden">
             <img className="w-full group-hover:scale-[1.1] duration-300  " src={myarry.img} alt="sofa1" />
             <div className=" flex justify-between pt-4">
                <p className=" text-[20px] font-medium font-[poppins] text-black">{myarry.name}</p>
                <span>{myarry.star}</span>
             </div>
             <p className=" text-lg font-normal font-[poppins] text-[#4D4D4D] pt-4">{myarry.pera}</p>
             <div className=" flex justify-between pt-5 pb-[53px]">
                <p className=" text-[28px] font-semibold font-[poppins] text-black ">{myarry.rate}</p>
                <span>{myarry.btn}</span>
             </div>
        </div>
  ));
  return <div className=" max-w-[1320px] mx-auto px-3 pt-4 md:pt-[135px] pb-4 md:pb-[169px]">
    <h2 className="text-[#BD7D41] text-xl font-normal font-[poppins] relative before:absolute before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] pl-[110px]">
    Shopping Store
          </h2>
          <div className=" md:flex justify-between pb-[90px]">
            <p className="text-[#243040] text-[35px] font-bold font-poppins">Our Products</p>
            <Button name="VIEW ALL PRODUCT"/>
          </div>
    <div className=" grid  lg:grid-cols-3 md:grid-cols-2 gap-[42px]">{cardcomponent}</div>
    
  </div>;
};

export default Shopping;
