import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import Img1 from "../../assets/img/slider/img1.png";
import Img2 from "../../assets/img/slider/img2.png";
import Img3 from "../../assets/img/slider/img3.png";
import Img4 from "../../assets/img/slider/img4.png";
import Img5 from "../../assets/img/slider/img5.png";
import Img6 from "../../assets/img/slider/img6.png";
import Img7 from "../../assets/img/slider/img7.png";
import Img8 from "../../assets/img/slider/img8.png";

import Img10 from "../../assets/img/slider/img11.png";
import Img11 from "../../assets/img/slider/img10.png";
import { Link } from "react-router";

const Bannarslider = (props) => {
  return (
    <div className="mt-5 ">
      <Swiper
        slidesPerView={props.item}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to="/">
            <img
              className="w-full bg-white h-52 flex flex-col rounded-lg shadow-md hover:scale-105 transition-transform items-center"
              src={Img1}
              alt=""
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img2}
              alt=""
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img4}
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img5}
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img6}
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img7}
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img8}
              alt=""
            />
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img10}
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to="/">
            <img
              className="  bg-white h-52 flex flex-col  w-full  rounded-lg shadow-md hover:scale-105 transition-transform  items-center "
              src={Img11}
              alt=""
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Bannarslider;
