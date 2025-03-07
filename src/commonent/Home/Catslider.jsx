import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";

import Tshirt from "../../assets/Catliderimg/t-shirts.png";
import Smartwtch from "../../assets/Catliderimg/smart.png";
import Watch from "../../assets/Catliderimg/watch.png";
import Bage from "../../assets/Catliderimg/bage.png";

import Yoga from "../../assets/Catliderimg/bam.png";
import beauty from "../../assets/Catliderimg/beauty.png";
import Jeans from "../../assets/Catliderimg/janessssssss.png";
import Jewllery from "../../assets/Catliderimg/Jewellery.png";
import ring from "../../assets/Catliderimg/ring.png";
import Shoes from "../../assets/Catliderimg/sooj.png";

import { Link } from "react-router";
const Catslider = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Swiper
        slidesPerView={7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper  "
      >
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="" src={Tshirt} alt="" />
              <h1 className="text-xl ">T-Shirt</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="" src={Smartwtch} alt="" />
              <h1 className="text-xl ">Smart tablet</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  h-[170px] rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="" src={Watch} alt="" />
              <h1 className="text-xl mt-5">Watch</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="h-36" src={Bage} alt="" />
              <h1 className="text-xl ">Bage</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="h-36" src={Yoga} alt="" />
              <h1 className="text-xl ">Yoga</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="h-36" src={beauty} alt="" />
              <h1 className="text-xl ">Beauty</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="h-36" src={Jeans} alt="" />
              <h1 className="text-xl ">Jeans</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="h-36" src={Jewllery} alt="" />
              <h1 className="text-xl ">Jewllery</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="h-36" src={ring} alt="" />
              <h1 className="text-xl">Ring</h1>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide className="mt-3">
          <Link to="/">
            <div className="item bg-white  flex flex-col px-3 w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center ">
              <img className="h-36" src={Shoes} alt="" />
              <h1 className="text-xl ">Shoes</h1>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catslider;
