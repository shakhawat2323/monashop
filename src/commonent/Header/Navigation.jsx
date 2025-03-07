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
            <li className="relative">
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className=" m-1">
                  <Link className="list text-[17px]  font-[500px]">
                    <Button className="!bg-transparent !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                      Fashion
                    </Button>
                  </Link>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content  bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <div className="dropdown dropdown-hover relative ">
                      <div
                        tabIndex={0}
                        role="button"
                        className=" w-full
                       m-1"
                      >
                        <Link className=" text-[17px]  w-full  font-[500px]">
                          <Button className=" w-[190px] !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                            Men
                          </Button>
                        </Link>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content absolute left-[200px]  bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              T-Shirt
                            </Button>
                          </Link>
                        </li>
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              Jeans
                            </Button>
                          </Link>
                        </li>
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              Footwear
                            </Button>
                          </Link>
                        </li>
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              Watch
                            </Button>
                          </Link>
                        </li>
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              Pents
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown dropdown-hover relative ">
                      <div
                        tabIndex={0}
                        role="button"
                        className=" w-full
                       m-1"
                      >
                        <Link className=" text-[17px]  w-full  font-[500px]">
                          <Button className=" w-[190px] !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                            Women
                          </Button>
                        </Link>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content absolute left-[200px]  bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              twlo
                            </Button>
                          </Link>
                        </li>
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              three
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown dropdown-hover relative ">
                      <div
                        tabIndex={0}
                        role="button"
                        className=" w-full
                       m-1"
                      >
                        <Link className=" text-[17px]  w-full  font-[500px]">
                          <Button className=" w-[190px] !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                            Kids
                          </Button>
                        </Link>
                      </div>
                      <ul
                        tabIndex={0}
                        className="dropdown-content absolute left-[200px]  bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                      >
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              twlo
                            </Button>
                          </Link>
                        </li>
                        <li>
                          <Link className=" text-[17px]  font-[500px]">
                            <Button className=" w-full !justify-start !shadow-none !normal-case !text-black text-[17px] font-medium transition-colors duration-300 hover:!text-[#ff5252]">
                              three
                            </Button>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
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
