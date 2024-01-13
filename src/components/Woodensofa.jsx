import React from "react";
import Button from "./Button";
import bigsofa from "../assets/image/big-sofa-sec-img.webp";

const Woodensofa = () => {
  return (
    <div className='bg-[#F7F7F8] overflow-x-clip'>
    <div className='max-w-[1220px] px-3 mx-auto pt-16 pb-[110px]'>
        <div className="grid lg:grid-cols-2 md:grid-cols-1">
            <div>
                <p className='text-[#BD7D41] text-xl font-normal font-poppins relative before:absolute before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] pl-[110px]'>Shopping Store</p>
                <h2 className='text-[#243040] text-[35px] font-bold font-poppins max-w-[436px] pb-14 pt-6'>Wooden Sofa Starts From ₹1200.00</h2>
                <Button name='SHOP NOW' />
            </div>
            <div className='relative'>
                <img className=' -translate-x-32 relative z-[5]' src={bigsofa} alt="sofa" />
                <div className='w-[741px] h-[270px] bg-[#243040] absolute bottom-[-25%] right-[-61%]'></div>
            </div>
        </div>
    </div>
</div>
  );
};

export default Woodensofa;
