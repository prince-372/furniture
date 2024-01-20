import React, { useEffect, useState } from "react";
import sofa1 from "../assets/image/sofa-img1.webp";
import sofa2 from "../assets/image/sofa-img2.webp";
import sofa3 from "../assets/image/sofa-img3.webp";
import sofa4 from "../assets/image/sofa-img4.webp";
import sofa5 from "../assets/image/sofa-img5.webp";
import sofa6 from "../assets/image/sofa-img6.webp";
import { CrossIcon, Star } from "./Icons";
import Cartbtn from "./Cartbtn";
import Button from "./Button";


const Shopping = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState("");
  const [clear, setClear] = useState(false);
  useEffect(() => {
      if (isOpen) {
          document.body.classList.add('overflow-hidden');
      } else {
          document.body.classList.remove('overflow-hidden');
      }
  }, [isOpen]);

  const addToCart = (el) => {
      let AddItems = true
      for (let i = 0; i < cart.length; i++) {
          if (cart[i].id === el.id) { }
      }
      if (AddItems) {
          setCart([...cart, el]);
          setIsOpen(true);
          setClear(false);
      }
      else setAlert(`${el.productName} is already in your cart`)
  };
  const clearAll = () => {
      setClear(true);
  };
  const removeToCart = (el) => {
      let items = [...cart]
      items = items.filter(cartItem => cartItem.id !== el.id)
      setCart(items)
      setAlert("");
  };
  const closeCart = () => {
      setIsOpen(false);
  };

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
  const cardcomponent = Myarry.map((el) => (
  <div className=" w-full max-w-[422px] max-h-[483px] bg-[#fff] py-5 px-6 hover:shadow-[6px_13px_38px_0px_rgba(0,0,0,0.12)] duration-300 group overflow-hidden">
             <img className="w-full group-hover:scale-[1.1] duration-300  " src={el.img} alt="sofa1" />
             <div className=" flex justify-between pt-4">
                <p className=" text-[20px] font-medium font-[poppins] text-black">{el.name}</p>
                <span>{el.star}</span>
             </div>
             <p className=" text-lg font-normal font-[poppins] text-[#4D4D4D] pt-4">{el.pera}</p>
             <div className=" flex justify-between pt-5 pb-[53px]">
                <p className=" text-2xl sm:text-[28px] font-semibold font-[poppins] text-black ">{el.rate}</p>
                <div onClick={() => addToCart(el)}>{el.btn}</div>        </div>
        </div>
  ));

  return <div className=" max-w-[1320px] mx-auto px-3 pt-4 md:pt-[135px] pb-4 md:pb-[169px]">
    <h2 className="text-[#BD7D41] text-xl font-normal font-[poppins] relative before:absolute before:w-[96px] before:h-[1px] before:bg-black before:left-0 before:top-[45%] pl-[110px]">
    Shopping Store
          </h2>
          <div className=" md:flex justify-between pb-[30px] sm:pb-[90px]">
            <p className="text-[#243040] text-[35px] font-bold font-poppins pt-5 pb-5">Our Products</p>
              <Button name="VIEW ALL PRODUCT"/>
          </div>
    <div className=" grid  lg:grid-cols-3 md:grid-cols-2 gap-[42px] items-center justify-center">{cardcomponent}</div>
    {isOpen && (
                <div className='bg-white sm:max-w-[450px]  md:max-w-[500px] shadow-2xl h-full fixed z-50 w-full  top-0 right-0'>
                    <div className='p-8 flex flex-col justify-between h-full gap-20 overflow-y-scroll'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <div onClick={closeCart} className="cursor-pointer pr-4">
                                    <Cartbtn cart="close" />
                                </div>
                                <div onClick={clearAll}>
                                    <Cartbtn cart="Clear All" />
                                </div>
                            </div>
                            <h2 className='text-[#243040] text-2xl sm:text-3xl lg:text-[35px] font-Poppins font-bold max-w-[436px] mt-3 md:mt-4 lg:mt-6 leading-normal'>Products</h2>
                            <p className='text-[#243040] text-xl sm:text-2xl lg:text-3xl font-Poppins font-medium max-w-[436px] mt-7 md:mt-10 lg:mt-12 leading-normal'>Checkout</p>
                            {clear ? (<div></div>) : (<div>
                                {
                                    cart.map((el) => (
                                        <div key={el.id}>
                                            <div className='bg-white rounded-lg shadow mt-6'>
                                                <div className='py-2 px-2 flex  xs:flex-row w-full relative'>
                                                    <img className=' rounded-xl max-w-[200px]' src={el.img} alt="cart-items" />
                                                    <div className='flex w-full flex-col mt-3 sm:mt-0 ml-4'>
                                                        <div className='flex justify-between  items-center '>
                                                            <p className='text-[20px] font-medium font-[poppins] text-black max-w-[436px] leading-normal'>{el.name}</p>
                                                            <span onClick={() => removeToCart(el)} className=' cursor-pointer absolute top-[3%] right-[2%]'>
                                                                <CrossIcon/>
                                                            </span>
                                                        </div>
                                                        <p className='text-lg font-normal font-[poppins] text-[#4D4D4D] mt-1 leading-normal'>{el.pera}</p>
                                                        <div className='flex'>
                                                            <p className='text-2xl sm:text-[28px] font-semibold font-[poppins] text-black leading-normal'>{el.rate}</p>
                                                            <p className='text-black text-[11px] xl:text-[12px] mt-2 font-Poppins opacity-60 ml-2 font-normal leading-normal line-through'>₹ 2000.00</p>
                                                        </div>
                                                        <div className='flex gap-2 mt-2'>
                                                            <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-medium leading-normal'>Quantity :</p>
                                                            <p className='text-black text-xs xl:text-[13px] mt-1 font-Poppins font-normal leading-normal'>1</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>)
                            }
                        </div>
                        <Button name="Buy Now" />
                    </div>
                </div>
            )}
  </div>
};

export default Shopping;
