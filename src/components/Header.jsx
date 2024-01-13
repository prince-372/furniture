import React from "react";
import Mynav from "./Mynav";
import Button from "./Button";
import laptop from '../assets/image/laptop.webp';

const Header = () => {
  return (
    <div className=' bg-[url("./assets/image/bg-header-img.webp")] bg-no-repeat bg-cover w-full min-h-[517px] sm:min-h-[932px] bg-center'>
      <Mynav />
      <div className=" mx-w-[1320px] mx-auto px-3 pt-4 sm:pt-[150px] relative">
        <div className=" max-w-[908px] mx-auto ">
          <h2 className=" text-white font-[poppins] text-[22px] sm:text-[48px] text-center font-bold ">
            Awesome Design Best Furniture For Your Interior
          </h2>
          <p className=" text-white font-[poppins] font-normal text-[20px] text-center pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus </p>
        </div>
        <div className="text-center pt-12"><Button name="SHOP NOW"/></div>
        <img className=" hidden sm:block absolute bottom-[-49%] left-[38%]" src={laptop} alt="" /> 
      </div>
    </div>
  );
};

export default Header;
