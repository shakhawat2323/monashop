import React from "react";
import "../Header/input.css";
import { IoSearchSharp } from "react-icons/io5";

const Input = () => {
  return (
    <div>
      <div className="bg-[#e5e5e5]  w-[400px] h-[50px] rounded-[5px] relative  py-2 ">
        <input
          type="text"
          placeholder="Search for products....."
          className="input w-full  focus:outline-none bg-inherit    border-none"
        />
        <button className=" btn bg-[#e5e5e5]  border-none  absolute -right-1  w-[50px]  h-[100%] top-0  ">
          <IoSearchSharp className="text-8xl font-bold" />
        </button>
      </div>
    </div>
  );
};

export default Input;
