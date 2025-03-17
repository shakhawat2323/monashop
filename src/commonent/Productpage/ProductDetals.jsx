import { Breadcrumbs, Rating } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router";
import ProductZoom from "./ProductZoom";
import Quntity from "./Quntity";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Productitem from "./Productitem";
import Productslider from "./Productslider/Productslider";
const ProductDetals = () => {
  const [productaction, setProductaction] = useState(null);
  const [ProductDetalspage, setProductDetalis] = useState(0);

  return (
    <>
      <div>
        <div className="container px-3">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="list transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="list transition"
            >
              Fashion
            </Link>
            <Link underline="hover" color="inherit" className="list transition">
              Cropped satin bomber jacket
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <section className="bg-white py-5 px-5">
        <div className=" flex items-center gap-8">
          <div className="productZoomContainer  w-[40%] ">
            <ProductZoom />
          </div>
          <div className="procutcontent w-[60%]">
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
              <Rating
                style={{ maxWidth: 100 }}
                value={4}
                size="small"
                readOnly
              />
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
              doloremque, pariatur, veniam, ipsum aliquam excepturi alias
              corrupti facere repudiandae laboriosam eius id dolorem beatae
              fugit aspernatur laudantium blanditiis animi numquam. corrupti
              facere repudiandae laboriosam eius id dolorem beatae fugit
              aspernatur laudantium blanditiis animi numquam.
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
                <IoGitCompareOutline className="text-2xl" /> Add to Wishlist
              </span>
            </div>
          </div>
        </div>
        <div className="pt-5 px-5 ">
          <div className="flex items-center gap-8">
            <span
              onClick={() => setProductDetalis(0)}
              className={`list text-[17px] cursor-pointer font-[500] ${
                ProductDetalspage === 0 && "text-[#ff5252]"
              }`}
            >
              Description
            </span>
            <span
              onClick={() => setProductDetalis(1)}
              className={`list text-[17px] cursor-pointer font-[500] ${
                ProductDetalspage === 1 && "text-[#ff5252]"
              }`}
            >
              Product Details
            </span>
            <span
              onClick={() => setProductDetalis(2)}
              className={`list text-[17px] cursor-pointer font-[500] ${
                ProductDetalspage === 2 && "text-[#ff5252]"
              }`}
            >
              Reviews (5)
            </span>
          </div>
          {ProductDetalspage === 0 && (
            <div className="shadow-md bg-[#F7F2FF] mt-5 w-full py-5 p-8 rounded-md">
              <h1 className="text-xl font-semibold py-2">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className=" opacity-75 pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, quia. Quos officiis consequatur mollitia quam? Sunt,
                tempora dicta nam atque mollitia obcaecati saepe, et, quo quasi
                magni culpa sit praesentium?
              </p>
              <h1 className="text-xl font-semibold py-2">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className=" opacity-75 pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, quia. Quos officiis consequatur mollitia quam? Sunt,
                tempora dicta nam atque mollitia obcaecati saepe, et, quo quasi
                magni culpa sit praesentium?
              </p>
              <h1 className="text-xl font-semibold py-2">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className=" opacity-75 pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, quia. Quos officiis consequatur mollitia quam? Sunt,
                tempora dicta nam atque mollitia obcaecati saepe, et, quo quasi
                magni culpa sit praesentium?
              </p>
              <h1 className="text-xl font-semibold py-2">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className=" opacity-75 pr-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Impedit, quia. Quos officiis consequatur mollitia quam? Sunt,
                tempora dicta nam atque mollitia obcaecati saepe, et, quo quasi
                magni culpa sit praesentium?
              </p>
            </div>
          )}
          {ProductDetalspage === 1 && (
            <div className="shadow-md mt-5 bg-[#F7F2FF] w-full py-5 p-8 rounded-md">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Stand Up</th>
                      <th>35″L x 24″W x 37-45″H(front to back wheel)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Folded (w/o wheels)</td>
                      <td>32.5″L x 18.5″W x 16.5″H</td>
                    </tr>
                    {/* row 2 */}
                    <tr>
                      <td>Folded (w/ wheels)</td>
                      <td>32.5″L x 24″W x 18.5″H</td>
                    </tr>

                    <tr>
                      <td>Frame</td>
                      <td>Aluminum</td>
                    </tr>
                    <tr>
                      <td>Weight (w/o wheels)</td>
                      <td>20 LBS</td>
                    </tr>
                    <tr>
                      <td>Weight Capacity</td>
                      <td>60 LBS</td>
                    </tr>
                    <tr>
                      <td>Width</td>
                      <td>24″</td>
                    </tr>
                    <tr>
                      <td>Handle height (ground to handle)</td>
                      <td>37-45″</td>
                    </tr>
                    <tr>
                      <td>Wheels</td>
                      <td>12″ air / wide track slick tread</td>
                    </tr>
                    <tr>
                      <td>Seat back height</td>
                      <td>21.5″</td>
                    </tr>
                    <tr>
                      <td>Head room (inside canopy)</td>
                      <td>25″</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Black, Blue, Red, White</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>M, S</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {ProductDetalspage === 2 && (
            <div className="shadow-md mt-5 bg-[#F7F2FF] w-full py-5 p-8 rounded-md">
              <p className="text-xl font-medium">
                Customer questions & answers
              </p>
              <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden">
                <div className="review mt-5 pb-5 border-b border-[rgba(0,0,0,0.1)] w-full flex items-center justify-between">
                  <div className="info w-[60%] flex  gap-2">
                    <div className="img">
                      <div className="avatar p-5 ">
                        <div className="  w-20 rounded-full  ">
                          <img src="https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png" />
                        </div>
                      </div>
                    </div>

                    <div className="w-[70%] mt-10 ">
                      <h1 className="font-semibold">Rinku Verma</h1>
                      <h1 className="text-sm opacity-80 mt-2 mb-2">
                        2024-12-01
                      </h1>

                      <p className="text-sm opacity-75">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Tempore eius architecto odio perferendis aliquid
                      </p>
                    </div>
                  </div>
                  <div className="pr-20">
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={5}
                      size="small"
                      readOnly
                    />
                  </div>
                </div>
                <br />
                <div className="revewfrom bg-[#afafafe7] p-2 rounded-md pr-2">
                  <h1 className="text-xl">Add a review</h1>
                </div>
              </div>
              <form action="" className="mt-5">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Write a review"
                  multiline
                  className="w-8/12 !mb-5 "
                  rows={4}
                />
              </form>
              <Rating style={{ maxWidth: 100 }} value={5} size="small" />
              <div className="mt-3">
                <Button className="!bg-[#ff5252] hover:!bg-[#000]  !px-3 !text-white !font-bold flex items-center gap-1">
                  {" "}
                  SUBMIT REVIEW
                </Button>
              </div>
              <div className="pt-8">
                <h1 className="text-xl font-semibold">Related Products</h1>
                <Productslider item={5} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ProductDetals;
