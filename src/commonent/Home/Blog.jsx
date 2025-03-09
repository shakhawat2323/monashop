import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import Img1 from "../../assets/Blog/bo.png";
import Img2 from "../../assets/Blog/bolog2.png";
import Img3 from "../../assets/Blog/bolog3.png";
import Img4 from "../../assets/Blog/bolog4.png";
import Img5 from "../../assets/Blog/bolog5.png";
import Img6 from "../../assets/Blog/bolog1.png";

import Blogcard from "./Blogcard";

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto mt-5 pb-10">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Blogcard img={Img1} />
        </SwiperSlide>
        <SwiperSlide>
          <Blogcard img={Img2} />
        </SwiperSlide>
        <SwiperSlide>
          <Blogcard img={Img3} />
        </SwiperSlide>
        <SwiperSlide>
          <Blogcard img={Img4} />
        </SwiperSlide>
        <SwiperSlide>
          <Blogcard img={Img5} />
        </SwiperSlide>
        <SwiperSlide>
          <Blogcard img={Img6} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
