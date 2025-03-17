import Button from "@mui/material/Button";
import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Quntity = () => {
  // const [Background, setBackground] = useState(null);
  const [count, setCount] = useState(1);
  const Plasbtn = () => {
    setCount(count + 1);
  };
  const Mainsebtn = () => {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex items-center relative">
      <input
        value={count}
        type="number"
        className="w-[60px]  px-3 h-8 focus:outline-none border border-[rgba(0,0,0,0.1)] rounded-md"
      />
      <div className="flex items-center flex-col justify-between h-[30px] absolute top-0 right-0 z-50">
        <Button
          onClick={Plasbtn}
          className="!min-w-[30px] !w-[30px] !h-[10px] !text-black !rounded-none"
        >
          <FaAngleUp />
        </Button>
        <Button
          onClick={Mainsebtn}
          className="!min-w-[30px] !w-[30px] !h-[10px] !text-black !rounded-none"
        >
          <FaAngleDown className="!w-[10px]" />
        </Button>
      </div>
    </div>
  );
};

export default Quntity;
