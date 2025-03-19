import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoBagCheckSharp, IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Caritems from "./Caritems";
import Fullcart from "./Fullcart";

const Cart = () => {
  return (
    <div className="py-7 px-5 bg-[#bb9595]">
      <div className="  flex  gap-5 ">
        <div className="w-[80%] max-w-[80%] ">
          <p className="text-xl font-medium py-3 text-white">Your Cart</p>
          <p className="text-white pb-5">
            There are{" "}
            <span className="font-bold mt-2 text-[#ff5252] "> 2 </span>
            porducts in your cart
          </p>
          <div>
            <Fullcart />
          </div>
        </div>
        <div className=" w-[30%] py-[95px]">
          <div className="shadown-2xl bg-white   rounded-md  p-5">
            <h3 className="pb-3 text-xl font-bold">Cart Totals</h3>
            <hr />
            <p className="flex  items-center justify-between mt-5">
              <span className="text-[17px] font-[500]">Subtotal</span>
              <span className="text-[#ff5252] font-bold">$1,300.00</span>
            </p>
            <p className="flex  items-center justify-between mt-5">
              <span className="text-[17px] font-[500]">Shipping</span>
              <span className=" font-bold">Free</span>
            </p>
            <p className="flex  items-center justify-between mt-5">
              <span className="text-[17px] font-[500]">Estimate for </span>
              <span className=" font-bold">United Kingdom</span>
            </p>
            <p className="flex  items-center justify-between mt-5">
              <span className="text-[17px] font-[500]">Total </span>
              <span className="text-[#ff5252] font-bold">$5000</span>
            </p>
            <div className="mt-5 flex items-center justify-center !w-full ">
              <Button className="!text-white !font-bold !flex gap-3 !items-center !bg-[#ff5252] hover:!bg-black hover:!text-white !px-6  ">
                <IoBagCheckSharp className="text-xl " /> Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
