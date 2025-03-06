import Button from "@mui/material/Button";
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import "../Header/input.css";
import { Link } from "react-router";
import Categories from "./Categories/Categories";

const Navigation = () => {
  const [idDraweropen, setDraweropen] = useState(false);

  const Droaweropens = () => {
    setDraweropen(true);
  };
  return (
    <div>
      <div className="flex items-center justify-end w-11/12 mx-auto py-2 gap-8">
        <div className="col1 w-[25%]">
          <Button
            className="!text-black gap-2 text-[17px] font-bold"
            onClick={Droaweropens}
          >
            <RiMenu2Line className="text-[17px]" />
            Shop By Categories
            <FaAngleDown className="text-2xl ml-auto font-bold" />
          </Button>
        </div>
        <div className="col1  w-[75%]">
          <ul className="flex items-center gap-5">
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Fashion
                </Button>
              </Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Electronics
                </Button>
              </Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Bags
                </Button>
              </Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Footwear
                </Button>
              </Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Beauty
                </Button>
              </Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Wellness
                </Button>
              </Link>
            </li>
            <li>
              <Link className="list text-[17px] font-[500px]">
                <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                  Jewellery
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section>
        <Categories setDraweropen={setDraweropen} idDraweropen={idDraweropen} />
      </section>
    </div>
  );
};

export default Navigation;
