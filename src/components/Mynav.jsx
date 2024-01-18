import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cart, Pagelogo, Search } from "./Icons";

const Mynav = () => {

  const [first, setfirst] = useState(false);
  function MobileView() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  function CloseView() {
    setfirst(false);
    document.body.classList.remove("overflow-hidden");
  }
  const [data, setdata] = useState(false);
  function InputImg() {
    const newColor = data === "xyz" ? "otherColor" : "xyz";
    setdata(newColor);
  }
  return (
    <>
      <nav>
        <div className="flex justify-between items-center max-w-[1320px] mx-auto px-3 ">
          <div className="my-5 flex items-center">
            <Pagelogo/>
            <h1 className=" text-white text-2xl sm:text-[33px] font-bold font-[roboto]">FURNITURE</h1>
          </div>
          <ul
            className={` ${
              first ? "left-0" : "left-[-100%]"
            } flex items-center lg:gap-12 gap-5  duration-300 mobileview2`}
          >
            <li>
              <Link to={"/"}
                onClick={CloseView}
                href="#"
                className="text-white text-lg font-normal hover:font-bold  font-[roboto] relative after:absolute  after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/about"}
                onClick={CloseView}
                href="#"
                className="text-white  text-lg font-normal hover:font-bold font-[roboto] relative after:absolute  after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to={"/shop"}
                onClick={CloseView}
                href="#"
                className="text-white text-lg font-normal hover:font-bold font-[roboto] relative after:absolute  after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link to={"/contactus"}
                onClick={CloseView}
                href="#"
                className="text-white text-lg font-normal hover:font-bold font-[roboto]   relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                CONTACT US
              </Link>
            </li>
            <li className=" flex lg:gap-12 gap-5 cursor-pointer items-center">
                <span
                  className={`${data === "xyz"
                      ? "right-100 z-10 px-3 border border-slate-50  bg-transparent"
                      : "px-1 right-0"
                    }  rounded-[8px] items-center max-[380px]:max-w-[280px]   w-full sm:static top-[35px] sm:top-[8%] md:top-0 max-[640px]:w-[300px] right-[-46%] xs450px:right-[100%] justify-between absolute  py-1 flex  lg:h-unset lg:static lg:right-0 lg:bg-transparent z-[2] transition-all ease-linear duration-300`}
                >
                  <input
                    type="search"
                    placeholder="Search"
                    id="abc"
                    className={`${data === "xyz"
                        ? "max-[425px]:w-[100%] w-full duration-600"
                        : "w-0  duration-600"
                      } outline-none text-white bg-transparent font-medium  transition-all duration-500 `}
                  />
                </span>
                <span onClick={InputImg} className="group  cursor-pointer ps-3">
                < Search/>
                </span>
                <Cart/>
            </li>
            
          </ul>
          <label className=" md:hidden" onClick={MobileView}>
            {first ? (
              <div className="z-20 relative">
                <span className="flex bg-white absolute -left-7 duration-300 top-1 rotate-45 h-[2px] w-6"></span>
                <span className="flex bg-white absolute -left-7 duration-300 -rotate-45 h-[2px] w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-white h-[2px] duration-300 w-6"></span>
                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
              </div>
            )}
          </label>
        </div>
      </nav>
    </>
  );
};

export default Mynav;
