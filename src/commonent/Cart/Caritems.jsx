import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoBagCheckSharp, IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Caritems = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [seletedsix, setSeletedsize] = useState(props.Size);
  const [quntity, setQuntity] = useState(null);
  const [seleteQuntity, setSeleteQuntity] = useState(props.Qty);
  const open = Boolean(anchorEl);
  const opensqty = Boolean(quntity);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (value) => {
    setAnchorEl(null);
    if (value !== null) {
      setSeletedsize(value);
    }
  };
  const Handaleclosebtn = (event) => {
    setQuntity(event.currentTarget);
  };
  const Handalclose = (value) => {
    setQuntity(null);
    if (value !== null) {
      setSeleteQuntity(value);
    }
  };
  return (
    <div className="flex items-center gap-4 mt-2">
      <div>
        <div>
          <span
            onClick={handleClick}
            className="flex items-center justify-center px-1 gap-1 bg-[#f1f1f1] text-[12px] font-[600] py-1 rounded-md cursor-pointer"
          >
            Sixe: {seletedsix} <FaAngleDown />
          </span>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => handleClose(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleClose("S")}>S</MenuItem>
            <MenuItem onClick={() => handleClose("M")}>M</MenuItem>
            <MenuItem onClick={() => handleClose("L")}>L</MenuItem>
            <MenuItem onClick={() => handleClose("XL")}>XL</MenuItem>
            <MenuItem onClick={() => handleClose("XXl")}>XXL</MenuItem>
          </Menu>
        </div>
      </div>

      <div>
        <span
          onClick={Handaleclosebtn}
          className="flex items-center justify-center gap-1 bg-[#f1f1f1] text-[12px] font-[600] py-1 rounded-md cursor-pointer"
        >
          Qty: {seleteQuntity} <FaAngleDown />
        </span>
        <Menu
          id="basic-menu"
          anchorEl={quntity}
          open={opensqty}
          onClose={() => Handalclose(null)}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => Handalclose(1)}>1</MenuItem>
          <MenuItem onClick={() => Handalclose(2)}>2</MenuItem>
          <MenuItem onClick={() => Handalclose(3)}>3</MenuItem>
          <MenuItem onClick={() => Handalclose(4)}>4</MenuItem>
          <MenuItem onClick={() => Handalclose(5)}>5</MenuItem>
          <MenuItem onClick={() => Handalclose(6)}>6</MenuItem>
          <MenuItem onClick={() => Handalclose(7)}>7</MenuItem>
          <MenuItem onClick={() => Handalclose(8)}>8</MenuItem>
          <MenuItem onClick={() => Handalclose(9)}>9</MenuItem>
          <MenuItem onClick={() => Handalclose(10)}>10</MenuItem>
          <MenuItem onClick={() => Handalclose(11)}>11</MenuItem>
          <MenuItem onClick={() => Handalclose(12)}>12</MenuItem>
          <MenuItem onClick={() => Handalclose(13)}>13</MenuItem>
          <MenuItem onClick={() => Handalclose(14)}>14</MenuItem>
          <MenuItem onClick={() => Handalclose(15)}>15</MenuItem>
          <MenuItem onClick={() => Handalclose(16)}>16</MenuItem>
          <MenuItem onClick={() => Handalclose(17)}>17</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Caritems;
