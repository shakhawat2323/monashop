import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "../input.css";
import CategoriesCollaps from "./CategoriesCollaps";

const Categories = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setDraweropen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Shop By Categories</h1>
        <button
          onClick={toggleDrawer(false)}
          className="text-2xl cursor-pointer p-2 hover:text-red-500 transition"
        >
          <IoClose />
        </button>
      </div>

      {/* Category List */}

      <CategoriesCollaps />
    </Box>
  );

  return (
    <Drawer open={props.idDraweropen} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
};

export default Categories;
