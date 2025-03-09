import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Img1 from "../../assets/img/img/1.png";
// import Img2 from "../../assets/img/img/2.png";
// import Img3 from "../../assets/img/img/4.png";
// import Img4 from "../../assets/img/img/5.png";
// import Img5 from "../../assets/img/img/8.png";
// import Img6 from "../../assets/img/img/7.png";
// import Img7 from "../../assets/img/img/10.png";
import Fast from "../../assets/slider/fast.jpg";
import Secend from "../../assets/slider/scend.jpg";
// import Three from "../../assets/slider//10001.jpg";
// import Fore from "../../assets/slider/10002.jpg";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-[75%] px-3">
      {/* <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Img1} alt="bannar" className="w-full h-[500px]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Img2} alt="bannar" className="w-full h-[500px]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Img4} alt="bannar" className="w-full h-[500px]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Img5} alt="bannar" className="w-full h-[500px]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Img6} alt="bannar" className="w-full h-[500px]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Img3} alt="bannar" className="w-full h-[500px]" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Img7} alt="bannar" className="w-full h-[500px]" />
        </SwiperSlide>
      </Swiper> */}
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full overflow-hidden rounded-md">
              <img src={Fast} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full overflow-hidden rounded-md">
              <img src={Secend} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
