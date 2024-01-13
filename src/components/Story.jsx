import React from "react";
import chair from "../assets/image/chair-img.webp";
import Button from "./Button";
import { Play } from "./Icons";
const Story = () => {
  return (
    <div className="max-w-[1320px] px-3 mx-auto">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 pt-2 md:pt-32 ">
        <div className="relative">
          <div className="relative inline-block">
            <img className="relative z-[3]" src={chair} alt="sofa img" />
            <div className=" px-4 flex items-center bg-white py-3 absolute bottom-[6%] right-[5%] z-[5]">
              <p className="relative before:absolute before:w-[66px] before:h-[1px] before:bg-black before:right-[10px] before:top-[56%] pr-[85px] text-[#243040] text-sm font-normal font-poppins">
                Explore Video
              </p>{" "}
              <Play />
            </div>
          </div>
          <div className="w-[416px] h-[336px] bg-gradient-to-l from-gray-300 to-gray-800 absolute top-[-10%] left-[-10%] hidden md:block"></div>
        </div>
        <div>
            <p className="text-[#BD7D41] text-xl font-normal font-poppins relative before:absolute before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] pl-[110px]">
                Welcome Our Story
            </p>
          <h2 className="text-[#243040] text-[35px] font-bold font-poppins max-w-[436px] pt-5">
            We create the product you tell us you wish existed.
          </h2>
          <p className="text-[#4D4D4D] text-lg font-normal font-poppins max-w-[596px] pt-5 pb-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus, urna at pulvinar porta, augue lorem ullamcorper orci, non
            rhoncus nisi neque sit amet nibh. Phasellus consectetur semper ante
            et mattis
          </p>
          <Button name="READ MORE" />
        </div>
      </div>
    </div>
  );
};

export default Story;
