import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import sofa1 from "../assets/image/sofa-img1.webp";
import { Star } from './Icons';
import Cartbtn from './Cartbtn';

const Sidebar = ({ isOpen, onClose }) => {
   
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target.classList.contains('cart-sidebar-overlay')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);
   
  const myarry = [
    {
        id:1,
        img: sofa1,
        name: "Single Sofa",
        star: <Star />,
        pera: "Lorem ip sumdolor",
        rate: "₹1200.00",
        btn: <Cartbtn cart="ADD TO CART" />,
      },
   
  ]
  const cardcomponent = myarry.map((myarry) => (
    <div className=" w-full max-w-[422px] max-h-[483px] bg-[#fff] py-5 px-6 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] duration-300 group overflow-hidden">
               <img className="w-full group-hover:scale-[1.1] duration-300  " src={myarry.img} alt="sofa1" />
               <div className=" flex justify-between pt-4">
                  <p className=" text-[20px] font-medium font-[poppins] text-black">{myarry.name}</p>
                  <span>{myarry.star}</span>
               </div>
               <p className=" text-lg font-normal font-[poppins] text-[#4D4D4D] pt-4">{myarry.pera}</p>
               <div className=" flex justify-between pt-5 pb-[53px]">
                  <p className=" text-2xl sm:text-[28px] font-semibold font-[poppins] text-black ">{myarry.rate}</p>
                  <span>{myarry.btn}</span>
               </div>
          </div>));

  return isOpen
    ? createPortal(
      <div className=" max-h-screen z-30 max-w-[500px] fixed inset-0 bg-slate-500">
        <div  className=" relative cursor-pointer group cart-sidebar-overlay flex items-center justify-center ">
            <span className="flex bg-white right-3 absolute top-6 duration-500  rotate-45 h-[2px] w-9"></span>
              <span className="flex bg-white  absolute right-3 top-6 duration-500 -rotate-45 h-[2px] w-9 "></span>
            <div className='pt-[80%]'>{cardcomponent}</div>
        </div>
      </div>,
      document.body
    )
    : null;
};

export default Sidebar
