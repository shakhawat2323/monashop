import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
const CategoriesCollaps = () => {
  const toggleDrawer = (newOpen) => () => {
    props.setDraweropen(newOpen);
  };

  const [opensubmenus, setOpensubmenus] = useState(null);
  const [innersubmenus, setInnersubmenus] = useState(null);

  const openSubmenu = (index) => {
    setOpensubmenus(opensubmenus === index ? null : index);
  };

  const innerSubmenu = (index) => {
    setInnersubmenus(innersubmenus === index ? null : index);
  };
  return (
    <div>
      <div className="w-full py-2">
        <ul className="px-3">
          {/* Fashion Category */}
          <li className="relative  py-2">
            <div className="flex justify-between items-center">
              <Button className="text-xl w-full !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
              {opensubmenus === 0 ? (
                <FiMinusSquare
                  className="text-xl cursor-pointer hover:text-red-500 transition"
                  onClick={() => openSubmenu(0)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-xl cursor-pointer hover:text-green-500 transition"
                  onClick={() => openSubmenu(0)}
                />
              )}
            </div>

            {opensubmenus === 0 && (
              <ul className="submenu bg-gray-100 rounded-lg mt-2 p-2">
                <li className="relative flex justify-between items-center">
                  <Button className="text-lg !text-left !text-gray-700">
                    Apparel
                  </Button>
                  {innersubmenus === 0 ? (
                    <FiMinusSquare
                      className="text-xl cursor-pointer hover:text-red-500 transition"
                      onClick={() => innerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="text-xl cursor-pointer hover:text-green-500 transition"
                      onClick={() => innerSubmenu(0)}
                    />
                  )}
                </li>

                {innersubmenus === 0 && (
                  <ul className="pl-4 mt-2">
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Smart Tablet
                      </Button>
                    </li>
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Crepe T-shirt
                      </Button>
                    </li>
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Leathar Watch
                      </Button>
                    </li>
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Rolling Diamond
                      </Button>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          {/* Computer Category */}
          <li className="relative py-2">
            <div className="flex ab justify-between items-center">
              <Button className="text-xl w-full !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                Computer
              </Button>
              {opensubmenus === 1 ? (
                <FiMinusSquare
                  className="text-xl cursor-pointer hover:text-red-500 transition"
                  onClick={() => openSubmenu(1)}
                />
              ) : (
                <FaRegSquarePlus
                  className="text-xl cursor-pointer hover:text-green-500 transition"
                  onClick={() => openSubmenu(1)}
                />
              )}
            </div>

            {opensubmenus === 1 && (
              <ul className="submenu bg-gray-100 rounded-lg mt-2 p-2">
                <li className="relative flex justify-between items-center">
                  <Button className="text-lg !text-left !text-gray-700">
                    Accessories
                  </Button>
                  {innersubmenus === 1 ? (
                    <FiMinusSquare
                      className="text-xl cursor-pointer hover:text-red-500 transition"
                      onClick={() => innerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="text-xl cursor-pointer hover:text-green-500 transition"
                      onClick={() => innerSubmenu(1)}
                    />
                  )}
                </li>

                {innersubmenus === 1 && (
                  <ul className="pl-4 mt-2">
                    <li className="list-none flex items-center pl-2">
                      {" "}
                      <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                        Smart Tablet
                      </Button>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoriesCollaps;
