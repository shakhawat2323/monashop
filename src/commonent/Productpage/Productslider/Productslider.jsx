import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router";
import Productitem from "../Productitem";

const Productslider = (props) => {
  return (
    <div className=" ">
      <div>
        <Swiper
          navigation={true}
          slidesPerView={props.item}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper  "
        >
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
          <SwiperSlide className="mt-3">
            <Productitem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Productslider;
