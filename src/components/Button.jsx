import React from 'react'

const Button = (props) => {
  return (
    <div>
          <button className='bg-[#BD7D41] py-[19px] px-12 text-xl font-[poppins] font-semibold  text-white z-[1] before:z-[-1] hover:text-[#BD7D41] border before:transition-all before:ease-linear before:hover:bg-white duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full border-none outline outline-[#BD7D41] relative overflow-hidden inline-block'>{props.name}</button>
    </div>
  )
}

export default Button