import React, { useEffect, useState } from "react";
import { Pagelogo } from "./Icons";

const Preloader = () => {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3500);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <div>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-[#010223] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
        >
          <div className="flex justify-center items-center flex-col text-center animate-bounce">
            <Pagelogo/>
            <h1 className=" text-white text-[33px] font-bold font-[roboto]">
              FURNITURE
            </h1>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
};

export default Preloader;
