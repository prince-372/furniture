import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Pagelogo, Twitter } from './Icons'

const Footer = () => {
    return (
        <div className='bg-[#243040] overflow-hidden'>
            <div className='max-w-[1320px] mx-auto px-3 pt-[87px]'>
                <div className="grid lg:grid-cols-2  pb-20 after:w-[1920px] after:h-[1px] relative after:absolute after:bottom-0 after:left-[-24%] after:right-0 after:bg-[#91979F]">
                    <div >
                        <Link to={"/"} className='flex items-center gap-2'><Pagelogo/> <p className='text-white font-bold'>FURNITURE</p></Link>
                        <p className=' text-sm font-[roboto] font-normal text-white max-w-[338px] pt-8 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat nunc in leo vestibulum, at congue erat accumsan. Suspendisse potenti. Suspendisse vitae vestibulum sapien.</p>
                        <div className="flex gap-3">
                            <a href="https://www.instagram.com/" target='_blank' rel='noreferrer' className=' hover:scale-[0.9] duration-300'> <Instagram/> </a>
                             <a href="https://twitter.com/login" target='_blank' rel='noreferrer' className=' hover:scale-[0.9] duration-300'> <Twitter/> </a>
                              <a href="https://www.facebook.com/"  target='_blank' rel='noreferrer' className=' hover:scale-[0.9] duration-300'><Facebook/></a>
                        </div>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-3 grid-cols-2  pt-5">
                            <div className=' '>
                                <ul>
                                    <li className='text-white font-[roboto] text-sm font-semibold pb-6 relative after:absolute after:w-[130px] after:h-[1px] after:bg-[#BD7D41] after:bottom-[22px] after:left-0'>ABOUT STORE</li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Home</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Shop</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Product</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Festival Offer</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Log In</a></li>
                                </ul>
                            </div>
                            <div className=' '>
                                <ul >
                                    <li className='text-white font-[roboto] text-sm font-semibold pb-6 relative after:absolute after:w-[130px] after:h-[1px] after:bg-[#BD7D41] after:bottom-[22px] after:left-0'>BRANDS</li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Album</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Shop</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Product</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Festival Offer</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Log In</a></li>
                                </ul>
                            </div>
                            <div className=' '>
                                <ul>
                                    <li className='text-white font-[roboto] text-sm font-semibold pb-6 relative after:absolute after:w-[130px] after:h-[1px] after:bg-[#BD7D41] after:bottom-[22px] after:left-0'>CATEGORIES</li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Single</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Aleeper Sofas</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Accent Chairs</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal font-[roboto] relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Festival Offer</a></li>
                                    <li className='pb-[13px]'><a href="" className=' text-white text-sm font-normal relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-5 after:left-0'>Log In</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center text-sm font-[roboto] font-normal text-white py-8'>@copyright{(new Date().getFullYear())}</p>
            </div>
        </div>
    )
}

export default Footer