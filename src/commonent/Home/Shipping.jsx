import React from "react";
import { FaShippingFast } from "react-icons/fa";
const Shipping = () => {
  return (
    <div className="py-5 text-white shadow-2xl">
      <div className=" text-black  w-full border-2 p-4 border-[#FF5252] ">
        <div className=" flex items-center justify-between w-11/12 mx-auto">
          <div className="col1 flex items-center  ">
            <FaShippingFast className="text-5xl " />
            <p className="text-xl font-bold">FREE SHIPPING</p>
          </div>
          <div className="col2">
            <p className="text-xl font-bold">
              Free delivery now on your first order and over $200
            </p>
          </div>
          <div className="col3">
            <p className="text-4xl font-bold">- ONLY $200*</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
