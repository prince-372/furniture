import React from 'react'
import Cartbtn from './Cartbtn'
const Festival = () => {
  return (
    <div className='max-w-[1320px] mx-auto px-3 pb-5 md:pb-28  pt-6 sm:pt-16 md:pt-[138px] overflow-hidden'>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-9">
        <div data-aos="flip-left" className='bg-[url("./assets/image/chair-with-light-img1.webp")] bg-no-repeat bg-cover bg-center ps-3 md:ps-[107px] pb-3 md:pb-[71px]'>
            <p className='text-black font-normal text-xl font-poppins pb-5 pt-8'>Festival Offer</p>
            <h2 className='text-[#BD7D41] text-[35px] font-bold font-poppins pb-4'>Upto 40% Off</h2>
            <p className='max-w-[262px] text-[#3F3F3E] text-lg font-normal pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Cartbtn cart='ADD TO CART'/>
        </div>
        <div data-aos="flip-right" className='bg-[url("./assets/image/chair-with-light-img2.webp")] bg-no-repeat bg-cover bg-center ps-3 md:ps-[107px] pb-3 md:pb-[71px]'>
            <p className='text-black font-normal text-xl font-poppins pb-5 pt-8'>Festival Offer</p>
            <h2 className='text-[#BD7D41] text-[35px] font-bold font-poppins pb-4'>Upto 40% Off</h2>
            <p className='max-w-[262px] text-[#3F3F3E] text-lg font-normal pb-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Cartbtn cart='ADD TO CART'/>
        </div>
      </div>
    </div>
  )
}

export default Festival
