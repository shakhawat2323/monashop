import { Link } from "react-router";
import Img1 from "../../assets/product/product1.png";
import { Rating } from "@smastrom/react-rating";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

import "@smastrom/react-rating/style.css";
import { Button } from "@mui/material";

const Productitem = () => {
  return (
    <div>
      <div
        className="  shadow-2xl rounded-xl
       flex flex-col justify-center border-1 border-[rgba(0,0,0,0.1)] items-center"
      >
        <div className=" group relative   ">
          <Link to="/">
            <div className="w-[200px] h-[270px] overflow-hidden">
              <img
                className=" rounded-t-2xl"
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740650263/1740650262333_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-1-202201130044.jpg"
                alt=""
              />
              <img
                className=" rounded-t-2xl transition-all duration-200 absolute top-0 left-0 w-full opacity-0 group-hover:opacity-100"
                src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740650264/1740650262465_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-2-202201130044.jpg"
                alt=""
              />
            </div>
          </Link>
          <span className="text-white text-sm bg-primary rounded-full absolute top-4 left-2 p-1">
            10%
          </span>

          <div className="absolute top-[-200px] transition-all duration-200 group-hover:top-[30px] -right-[15px] z-50 flex items-center gap-2 flex-col w-[80px] opacity-0 group-hover:opacity-95">
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
        <div className="mt-1 ml-2 pb-3 py-3 ">
          <Link to="/">
            {" "}
            <p className="text-[13px] hover:text-[#ff5252] justify-start">
              {" "}
              Deel band
            </p>
          </Link>
          <Link to="/">
            {" "}
            <h1 className="text-[14px] hover:text-[#ff5252] font-medium w-full py-1">
              Deel Band Women Rayon Embroidered Kurta Pant ...
            </h1>
          </Link>
          <Rating style={{ maxWidth: 100 }} value={3} readOnly />

          <div className="py-2 px-2 flex items-center gap-7 ">
            <span className="line-through text-xl ">$50.00</span>
            <span className="text-red-500 text-xl font-medium">$40.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
