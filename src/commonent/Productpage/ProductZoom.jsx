import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const ProductZoom = () => {
  return (
    <>
      <div className="flex gap-5">
        <div className="w-[15%]">
          <Swiper
            direction={"vertical"}
            spaceBetween={10}
            slidesPerView={4}
            navigation={true}
            modules={[Navigation]}
            className="zoomproductslider h-[500px] overflow-hidden"
          >
            <SwiperSlide className="mt-3 ">
              <div className="items rounded-md overflow-hidden">
                <img
                  src="https://service.spicezgold.com/download/1741860019073_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items ">
                <img
                  src="https://service.spicezgold.com/download/1741860019073_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items ">
                <img
                  src="https://service.spicezgold.com/download/1741860019073_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items ">
                <img
                  src="https://service.spicezgold.com/download/1741860019073_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items ">
                <img
                  src="https://service.spicezgold.com/download/1741860019073_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items">
                <img
                  src="https://service.spicezgold.com/download/1741860019073_gespo-peach-solid-mandarin-collar-half-sleeve-casual-t-shirt-product-images-rvrtzhyumb-0-202304080900.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[85%] h-[500px] overflow-hidden py-3">
          <InnerImageZoom
            zoomScale={1}
            zoomType="hover"
            src={
              "https://service.spicezgold.com/download/1741864421324_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp"
            }
          />
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
