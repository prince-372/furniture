import React from "react";
import Button from "./Button";
import bigsofa from "../assets/image/big-sofa-sec-img.webp";

const Woodensofa = () => {
  return (
    <div className='bg-[#F7F7F8] overflow-x-clip'>
    <div className='max-w-[1220px] px-3 mx-auto pt-4 md:pt-16 '>
        <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className=" col-span-1 flex flex-col justify-center items-center lg:items-start">
                <p className='text-[#BD7D41] text-xl font-normal font-poppins relative before:absolute before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] pl-[110px]'>Shopping Store</p>
                <h2 className='text-[#243040] text-[35px] font-bold font-poppins max-w-[436px] pb-14 pt-6'>Wooden Sofa Starts From ₹1200.00</h2>
                <Button name='SHOP NOW' />
            </div>
            <div className='relative col-span-2 lg:ml-20'>
                <img className=' md:-translate-x-[8px] relative z-[5] max-lg:pt-5' src={bigsofa} alt="sofa" />
                <div className='w-[741px] h-[270px] bg-[#243040] absolute bottom-[-25%] right-[-61%] max-lg:hidden'></div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Woodensofa;
