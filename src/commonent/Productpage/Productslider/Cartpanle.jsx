import Button from "@mui/material/Button";
import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const Cartpanle = () => {
  return (
    <div>
      <div className=" w-full max-h-[500px] overflow-y-scroll !overflow-x-hidden ">
        <div className="cartItem w-full flex items-center mb-8 border-b pb-3 border-[rgba(0,0,0,0,0.2)]">
          <div className="img w-[25%] overflow-hidden rounded-md h-[100px]">
            <img
              className=""
              src="https://service.spicezgold.com/download/1742214471850_dfdf1.jpg"
              alt=""
            />
          </div>
          <div className="w-[85%] px-2 relative ">
            <h4 className="text-[16px] font-[500] mb-2">
              Cotton Slim-Fit Single-Breasted Blazer
            </h4>
            <p className="flex items-center gap-3">
              <span>
                Qyt : <span>2</span>
              </span>
              <span className="text-[#ff5252] text-sm font-bold">
                Price: $<span>200</span>{" "}
              </span>
            </p>
            <div className="absolute cursor-pointer top-1 right-2">
              <MdOutlineDelete className="text-xl text-red-600" />
            </div>
          </div>
        </div>
        <div className="cartItem w-full flex items-center mb-8 border-b pb-3 border-[rgba(0,0,0,0,0.2)]">
          <div className="img w-[25%] overflow-hidden rounded-md h-[100px]">
            <img
              className=""
              src="https://service.spicezgold.com/download/1742214471850_dfdf1.jpg"
              alt=""
            />
          </div>
          <div className="w-[85%] px-2 relative ">
            <h4 className="text-[16px] font-[500] mb-2">
              Cotton Slim-Fit Single-Breasted Blazer
            </h4>
            <p className="flex items-center gap-3">
              <span>
                Qyt : <span>2</span>
              </span>
              <span className="text-[#ff5252] text-sm font-bold">
                Price: $<span>200</span>{" "}
              </span>
            </p>
            <div className="absolute cursor-pointer top-1 right-2">
              <MdOutlineDelete className="text-xl text-red-600" />
            </div>
          </div>
        </div>
        <div className="cartItem w-full flex items-center mb-8 border-b pb-3 border-[rgba(0,0,0,0,0.2)]">
          <div className="img w-[25%] overflow-hidden rounded-md h-[100px]">
            <img
              className=""
              src="https://service.spicezgold.com/download/1742214471850_dfdf1.jpg"
              alt=""
            />
          </div>
          <div className="w-[85%] px-2 relative ">
            <h4 className="text-[16px] font-[500] mb-2">
              Cotton Slim-Fit Single-Breasted Blazer
            </h4>
            <p className="flex items-center gap-3">
              <span>
                Qyt : <span>2</span>
              </span>
              <span className="text-[#ff5252] text-sm font-bold">
                Price: $<span>200</span>{" "}
              </span>
            </p>
            <div className="absolute cursor-pointer top-1 right-2">
              <MdOutlineDelete className="text-xl text-red-600" />
            </div>
          </div>
        </div>
        <div className="cartItem w-full flex items-center mb-8 border-b pb-3 border-[rgba(0,0,0,0,0.2)]">
          <div className="img w-[25%] overflow-hidden rounded-md h-[100px]">
            <img
              className=""
              src="https://service.spicezgold.com/download/1742214471850_dfdf1.jpg"
              alt=""
            />
          </div>
          <div className="w-[85%] px-2 relative ">
            <h4 className="text-[16px] font-[500] mb-2">
              Cotton Slim-Fit Single-Breasted Blazer
            </h4>
            <p className="flex items-center gap-3">
              <span>
                Qyt : <span>2</span>
              </span>
              <span className="text-[#ff5252] text-sm font-bold">
                Price: $<span>200</span>{" "}
              </span>
            </p>
            <div className="absolute cursor-pointer top-1 right-2">
              <MdOutlineDelete className="text-xl text-red-600" />
            </div>
          </div>
        </div>
        <div className="cartItem w-full flex items-center mb-8 border-b pb-3 border-[rgba(0,0,0,0,0.2)]">
          <div className="img w-[25%] overflow-hidden rounded-md h-[100px]">
            <img
              className=""
              src="https://service.spicezgold.com/download/1742214471850_dfdf1.jpg"
              alt=""
            />
          </div>
          <div className="w-[85%] px-2 relative ">
            <h4 className="text-[16px] font-[500] mb-2">
              Cotton Slim-Fit Single-Breasted Blazer
            </h4>
            <p className="flex items-center gap-3">
              <span>
                Qyt : <span>2</span>
              </span>
              <span className="text-[#ff5252] text-sm font-bold">
                Price: $<span>200</span>{" "}
              </span>
            </p>
            <div className="absolute cursor-pointer top-1 right-2">
              <MdOutlineDelete className="text-xl text-red-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-3  w-[95%] px-8  flex  absolute  bottom-0 flex-col items-center justify-baseline ">
        <div className="flex flex-col items-center  justify-between w-full border-t border-[rgba(0,0,0,0.1)] pt-5 pb-3">
          <div className="flex w-full items-center justify-between mb-2">
            <span className="text-[14px] font-[600]"> 1 items</span>
            <span className="text-[#ff5252] font-bold">$93.00</span>
          </div>
          <div className="flex w-full items-center justify-between">
            <span className="text-[14px] font-[600]">Shipping</span>
            <span className="text-[#ff5252] font-bold">$3.00</span>
          </div>
        </div>

        <div className="flex items-center justify-between w-full border-t border-[rgba(0,0,0,0.1)] pt-5">
          <span className="text-[14px] font-[600]">Total (tax excl.)</span>
          <span className="text-[#ff5252] font-bold">$93.00</span>
        </div>
        <div className="!flex !items-center justify-between w-full pt-8">
          <Button className="!text-white !font-bold !bg-[#ff5252] hover:!bg-black hover:!text-white !px-6 ">
            View Cart
          </Button>
          <Button className="!text-white !font-bold !bg-[#ff5252] hover:!bg-black hover:!text-white !px-6  ">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cartpanle;
