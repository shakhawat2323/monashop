import { Link } from "react-router";
import Img1 from "../../assets/product/product1.png";
import { Rating } from "@smastrom/react-rating";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";

import "@smastrom/react-rating/style.css";
import { Button } from "@mui/material";

const Productitem = () => {
  return (
    <div>
      <div
        className="  shadow-2xl rounded-xl
       flex   border-1 border-[rgba(0,0,0,0.1)] items-center"
      >
        <div className="group relative w-[30%]     overflow-hidden">
          <Link to="/">
            <div className="h-[270px]  img overflow-hidden relative">
              <img
                className="rounded-t-2xl w-full"
                src="https://service.spicezgold.com/download/1741864702486_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                alt=""
              />
              <img
                className="rounded-t-2xl absolute top-0 left-0 w-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                src="https://service.spicezgold.com/download/1741864702492_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
                alt=""
              />
            </div>
          </Link>
          <span className="text-white text-sm bg-primary rounded-full absolute top-4 left-2 p-1">
            10%
          </span>

          <div className="absolute top-[-200px] overflow-hidden transition-all duration-500 group-hover:top-[30px] -right-[15px] z-50 flex items-center gap-2 flex-col w-[80px] opacity-0 group-hover:opacity-95">
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] !hover:text-black !group">
              <MdOutlineZoomOutMap className="text-[18px] text-black hover:text-white group" />
            </Button>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] !hover:text-black !group">
              <IoIosGitCompare className="text-[18px] text-black hover:text-white" />
            </Button>
            <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] !hover:text-black !group">
              <FaRegHeart className="text-[18px] text-black hover:text-white" />
            </Button>
          </div>
        </div>

        <div className="mt-1 ml-2 px-10 pb-3 py-3 w-[70%] ">
          <Link to="/">
            {" "}
            <p className="text-[13px] hover:text-[#ff5252] justify-start">
              {" "}
              Deel band
            </p>
          </Link>
          <Link to="/">
            {" "}
            <h1 className="text-[20px] mt-2 mb-2 hover:text-[#ff5252] font-medium w-full py-1 ">
              Deel Band Women Rayon Embroidered Kurta Pant ...
            </h1>
          </Link>
          <Rating style={{ maxWidth: 100 }} value={3} readOnly />
          <p className="text-[14px] mt-2 mb-2">
            The unibody model debuted in October 2008 in 13- and 15-inch
            variants, with a 17-inch variant added in January 2009. Called the
            "unibody"
          </p>

          <div className="py-2 px-2 flex items-center gap-7 ">
            <span className="line-through text-xl ">$50.00</span>
            <span className="text-red-500 text-xl font-medium">$40.00</span>
          </div>
          <div className="mt-3">
            <Button className="!bg-[#ff5252] hover:!bg-[#000]  !px-3 !text-white !font-bold flex items-center gap-1">
              {" "}
              <BsCart3 className="text-xl" />
              ADD TO CARD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
