import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Caritems from "./Caritems";

const Fullcart = () => {
  return (
    <div className="shadow-md rounded-md p-5 bg-white">
      <div className="w-full p-3 flex items-center gap-4  pb-5 border-b border-[rgba(0,0,0,0,0.1)]">
        <div className="img w-[15%] gorup">
          <img
            className="group-hover:scale-105 transition-all rounded-md"
            src="https://service.spicezgold.com/download/1742281991809_ascscscscccswefsdvdd1.jpg"
            alt=""
          />
        </div>
        <div className="w-[85%] relative ">
          <div className="absolute top-0 right-0 cursor-pointer">
            <IoCloseSharp className="text-xl  text-red-600  " />
          </div>

          <p className="text-[14px] text-gray-400"> Koskii</p>
          <h1 className="text-[16px] text-[#524545] font-semibold ">
            Beads and Stones Zari Saree
          </h1>
          <Caritems Size="S" Qty={1} />
          <div className="py-2 px-2 flex items-center gap-3 ">
            <span className=" text-[15px] font-medium">$40.00</span>
            <span className="line-through  text-[15px] ">$50.00</span>
            <span className="  text-[15px] text-blue-600 font-medium">
              40% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fullcart;
