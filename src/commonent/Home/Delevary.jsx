import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { PiKeyReturnLight } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

const Delevary = () => {
  return (
    <div className="bg-white">
      <div className="contenar flex justify-center items-center gap-14">
        <div className="flex flex-col items-center justify-center group w-[20%]">
          <TbTruckDelivery className="text-7xl font-bold transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
          <p className="text-lg font-semibold py-2">Free Shipping</p>
          <p className="text-sm">For all Orders Over $100</p>
        </div>
        <div className="flex flex-col items-center justify-center group w-[20%]">
          <PiKeyReturnLight className="text-7xl font-bold transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
          <p className="text-lg font-semibold py-2">30 Days Returns</p>
          <p className="text-sm">For an Exchange Products</p>
        </div>
        <div className="flex flex-col items-center justify-center group w-[20%]">
          <IoWalletOutline className="text-7xl font-bold transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
          <p className="text-lg font-semibold py-2">Secured Payment</p>
          <p className="text-sm">Payment Cards Accepted</p>
        </div>
        <div className="flex flex-col items-center justify-center group w-[20%]">
          <IoGiftSharp className="text-7xl font-bold transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
          <p className="text-lg font-semibold py-2">Special Gifts</p>
          <p className="text-sm">Our First Product Order</p>
        </div>
        <div className="flex flex-col items-center justify-center group w-[20%]">
          <BiSupport className="text-7xl font-bold transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-3" />
          <p className="text-lg font-semibold py-2">Support 24/7</p>
          <p className="text-sm">Contact us Anytime</p>
        </div>
      </div>
    </div>
  );
};

export default Delevary;
