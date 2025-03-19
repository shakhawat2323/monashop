import { Rating } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import Quntity from "./Quntity";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductDetalseComponent = () => {
  const [productaction, setProductaction] = useState(null);
  const [ProductDetalspage, setProductDetalis] = useState(0);
  return (
    <div>
      <div className="procutcontent">
        <h1 className="text-2xl mb-2 text-[#332929] font-medium ">
          Tracksuit with Insert Pockets-Women
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-[15px]">
            Brands :{" "}
            <span className="font-[500] text-black opacity-85">
              House of Chikankari
            </span>
          </span>
          <Rating style={{ maxWidth: 100 }} value={4} size="small" readOnly />
          <span className="text-[13px] cursor-pointer text-gray-400">
            Review (5)
          </span>
        </div>
        <div className="py-2 px-2 flex items-center gap-7 ">
          <span className="line-through text-xl ">$50.00</span>
          <span className="text-red-500 text-xl font-medium">$40.00</span>
          <span className="text-[14px] text-gray-500">
            Available In Stock :{" "}
            <span className="text-green-600 font-bold">147 Items</span>{" "}
          </span>
        </div>

        <p className="text-[17px] pr-10 mb-5 opacity-75 linhight mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
          doloremque, pariatur, veniam, ipsum aliquam excepturi alias corrupti
          facere repudiandae laboriosam eius id dolorem beatae fugit aspernatur
          laudantium blanditiis animi numquam. corrupti facere repudiandae
          laboriosam eius id dolorem beatae fugit aspernatur laudantium
          blanditiis animi numquam.
        </p>
        <div className="flex items-center gap-3">
          <span className="text-[19px]">Size:</span>
          <div className="flex items-center gap-1 actions ">
            <Button
              className={`${
                productaction === 0 ? "!bg-[#ff5252] !text-white" : ""
              }`}
              onClick={() => setProductaction(0)}
            >
              S
            </Button>
            <Button
              className={`${
                productaction === 1 ? "!bg-[#ff5252] !text-white" : ""
              }`}
              onClick={() => setProductaction(1)}
            >
              M
            </Button>
            <Button
              className={`${
                productaction === 2 ? "!bg-[#ff5252] !text-white" : ""
              }`}
              onClick={() => setProductaction(2)}
            >
              L
            </Button>
            <Button
              className={`${
                productaction === 3 ? "!bg-[#ff5252] !text-white" : ""
              }`}
              onClick={() => setProductaction(3)}
            >
              XL
            </Button>
          </div>
        </div>
        <p className="mt-4 mb-4 text-[17px] opacity-75">
          Free Shipping (Est. Delivery Time 2-3 Days)
        </p>
        <div className="flex items-center gap-5 mt-4">
          <Quntity />

          <Button className="!bg-[#ff5252] h-8 hover:!bg-[#000]  !px-3 !text-white !font-bold flex items-center gap-1">
            {" "}
            <BsCart3 className="text-xl" />
            ADD TO CARD
          </Button>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <span className="flex items-center cursor-pointer transition transform duration-500 hover:text-[#ff5252] gap-2 ">
            <FaRegHeart className="text-2xl" /> Add to Wishlist
          </span>
          <span className="flex items-center cursor-pointer transition transform duration-500 hover:text-[#ff5252] gap-2 ">
            <IoGitCompareOutline className="text-2xl" /> Add to Compare
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetalseComponent;
