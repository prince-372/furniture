import React, { useState } from "react";
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
  return (
    <>
      <nav>
        <div className="flex justify-between items-center max-w-[1320px] mx-auto px-3 ">
          <div className="my-5 flex items-center">
            <Pagelogo/>
            <h1 className=" text-white text-[33px] font-bold font-[roboto]">FURNITURE</h1>
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
                className="text-white text-lg font-bold font-[roboto] relative after:absolute  after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/about"}
                onClick={CloseView}
                href="#"
                className="text-white  text-lg font-bold font-[roboto] relative after:absolute  after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                ABOUT US
              </Link>
            </li>
            <li>
              <Link
                onClick={CloseView}
                href="#"
                className="text-white text-lg font-bold font-[roboto] relative after:absolute  after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                SHOP
              </Link>
            </li>
            <li>
              <Link to={"/contactus"}
                onClick={CloseView}
                href="#"
                className="text-white text-lg font-bold font-[roboto]   relative after:absolute after:bg-[#BD7D41] after:w-0 hover:after:w-full after:h-[2px]  after:duration-700 after:top-7 after:left-0"
              >
                CONTACT US
              </Link>
            </li>
            <li className=" flex lg:gap-12 gap-5 cursor-pointer">
                <Search/>
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
