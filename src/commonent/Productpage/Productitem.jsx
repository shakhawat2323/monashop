import { Link } from "react-router";
import Img1 from "../../assets/product/product1.png";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Productitem = () => {
  return (
    <div>
      <div
        className=" w-[200px] h-96 shadow-2xl rounded-xl
       flex flex-col justify-center border-1 border-[rgba(0,0,0,0.1)] items-center"
      >
        <div className="  w- ">
          <img
            className=" rounded-md "
            src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1740650263/1740650262333_buynewtrend-women-maroon-cotton-blend-top-product-images-rvb22aqlk7-1-202201130044.jpg"
            alt=""
          />
        </div>
        <div className="mt-1 ml-2 pb-3 ">
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

          <div className="py-2">
            <span>$500</span>
            <span>$300</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productitem;
