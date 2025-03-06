import Button from "@mui/material/Button";
import React from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import "../Header/input.css";
import { Link } from "react-router";

const Navigation = () => {
  return (
    <div>
      <div className="flex items-center justify-end w-11/12 mx-auto py-2 gap-8">
        <div className="col1 w-[25%]">
          <Button className="!text-black gap-2 text-[17px] font-bold">
            <RiMenu2Line className="text-[17px]" />
            Shop By Categories{" "}
            <FaAngleDown className="text-2xl ml-auto font-bold" />
          </Button>
        </div>
        <div className="col1  w-[75%]">
          <ul className="flex items-center gap-5">
            <li>
              <Link className="list text-[17px] font-[500px]">Home</Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">Home</Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">Home</Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">Home</Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">Home</Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">Home</Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
