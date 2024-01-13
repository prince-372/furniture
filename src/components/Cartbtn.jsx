import React from 'react'

const Cartbtn = (props) => {
  return (
    <div>
          <button className='bg-[#BD7D41] py-[10px] px-3 text-[15px] sm:text-xl font-[poppins] font-medium  text-white z-[1] before:z-[-1] hover:text-[#BD7D41] border before:transition-all before:ease-linear before:hover:bg-white duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full border-none outline outline-[#BD7D41] relative overflow-hidden inline-block'>{props.cart}</button>
    </div>
  )
}

export default Cartbtn