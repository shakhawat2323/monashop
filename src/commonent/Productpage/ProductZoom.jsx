import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { user } from "@heroui/theme";

const ProductZoom = () => {
  const [slideindex, setSlidder] = useState(0);
  const zoomsliderbig = useRef();
  const zoomslidersml = useRef();
  const goto = (index) => {
    setSlidder(index);
    zoomsliderbig.current.swiper.slideTo(index);
    zoomsliderbig.current.swiper.slideTo(index);
  };

  return (
    <>
      <div className="flex gap-5">
        <div className="w-[15%]">
          <Swiper
            ref={zoomslidersml}
            direction={"vertical"}
            spaceBetween={0}
            slidesPerView={5}
            navigation={true}
            modules={[Navigation]}
            className="zoomproductslider cursor-pointer h-[550px] overflow-hidden "
          >
            <SwiperSlide className="mt-3 ">
              <div
                className={`items rounded-md overflow-hidden group${
                  slideindex === 0 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(0)}
              >
                <img
                  className="w-full transition-all group-hover:scale-105"
                  src="https://service.spicezgold.com/download/1741864702486_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mt-3 ">
              <div
                className={`items rounded-md overflow-hidden group${
                  slideindex === 1 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(1)}
              >
                <img
                  className="w-full transition-all group-hover:scale-105"
                  src="https://service.spicezgold.com/download/1741864702492_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mt-3 ">
              <div
                className={`items rounded-md overflow-hidden group${
                  slideindex === 2 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(2)}
              >
                <img
                  className="w-full transition-all group-hover:scale-105"
                  src="https://service.spicezgold.com/download/1741864702494_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mt-3 ">
              <div
                className={`items rounded-md overflow-hidden group${
                  slideindex === 3 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(3)}
              >
                <img
                  className="w-full transition-all group-hover:scale-105"
                  src="https://service.spicezgold.com/download/1741864803604_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-0-202404071602.webp"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mt-3 ">
              <div
                className={`items rounded-md overflow-hidden group${
                  slideindex === 4 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(4)}
              >
                <img
                  className="w-full transition-all group-hover:scale-105"
                  src="https://service.spicezgold.com/download/1741864803607_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-2-202404071602.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="mt-3 ">
              <div
                className={`items rounded-md overflow-hidden group${
                  slideindex === 5 ? "opacity-1" : "opacity-30"
                }`}
                onClick={() => goto(5)}
              >
                <img
                  className="w-full transition-all group-hover:scale-105"
                  src="https://service.spicezgold.com/download/1741864803606_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-1-202404071602.jpg"
                  alt=""
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-[85%] !rounded-md cursor-pointer h-[550px] p-5 overflow-hidden py-3">
          <Swiper
            ref={zoomsliderbig}
            spaceBetween={0}
            slidesPerView={1}
            navigation={false}
          >
            <SwiperSlide>
              <InnerImageZoom
                zoomScale={1}
                zoomType="hover"
                src={
                  "https://service.spicezgold.com/download/1741864421324_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomScale={1}
                zoomType="hover"
                src={
                  "https://service.spicezgold.com/download/1741864702486_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomScale={1}
                zoomType="hover"
                src={
                  "https://service.spicezgold.com/download/1741864702492_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomScale={1}
                zoomType="hover"
                src={
                  "https://service.spicezgold.com/download/1741864702494_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomScale={1}
                zoomType="hover"
                src={
                  "https://service.spicezgold.com/download/1741864803607_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-2-202404071602.jpg"
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <InnerImageZoom
                zoomScale={1}
                zoomType="hover"
                src={
                  "https://service.spicezgold.com/download/1741860489351_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-0-202304131033.jpg"
                }
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ProductZoom;
// import React, { useRef, useState } from "react";
// import InnerImageZoom from "react-inner-image-zoom";
// import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// const ProductZoom = () => {
//   const [slideindex, setSlidder] = useState(0);
//   const zoomsliderbig = useRef(null);
//   const zoomslidersml = useRef(null);

//   const goto = (index) => {
//     setSlidder(index);
//     zoomsliderbig.current.swiper.slideTo(index);
//     zoomslidersml.current.swiper.slideTo(index);
//   };

//   return (
//     <div className="flex gap-5">

//       <div className="w-[15%]">
//         <Swiper
//           ref={zoomslidersml}
//           direction={"vertical"}
//           spaceBetween={10}
//           slidesPerView={4}
//           navigation={true}
//           modules={[Navigation]}
//           className="zoomproductslider cursor-pointer h-[500px] overflow-hidden"
//         >
//           <SwiperSlide className="mt-3">
//             <div
//               className="items rounded-md overflow-hidden group"
//               onClick={() => goto(0)}
//             >
//               <img
//                 className="w-full transition-all group-hover:scale-105"
//                 src="https://service.spicezgold.com/download/1741864702486_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
//                 alt="Thumbnail 1"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="mt-3">
//             <div
//               className="items rounded-md overflow-hidden group"
//               onClick={() => goto(1)}
//             >
//               <img
//                 className="w-full transition-all group-hover:scale-105"
//                 src="https://service.spicezgold.com/download/1741864702492_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
//                 alt="Thumbnail 2"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="mt-3">
//             <div
//               className="items rounded-md overflow-hidden group"
//               onClick={() => goto(2)}
//             >
//               <img
//                 className="w-full transition-all group-hover:scale-105"
//                 src="https://service.spicezgold.com/download/1741864702494_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
//                 alt="Thumbnail 3"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="mt-3">
//             <div
//               className="items rounded-md overflow-hidden group"
//               onClick={() => goto(3)}
//             >
//               <img
//                 className="w-full transition-all group-hover:scale-105"
//                 src="https://service.spicezgold.com/download/1741864803604_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-0-202404071602.webp"
//                 alt="Thumbnail 4"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="mt-3">
//             <div
//               className="items rounded-md overflow-hidden group"
//               onClick={() => goto(4)}
//             >
//               <img
//                 className="w-full transition-all group-hover:scale-105"
//                 src="https://service.spicezgold.com/download/1741864803607_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-2-202404071602.jpg"
//                 alt="Thumbnail 5"
//               />
//             </div>
//           </SwiperSlide>
//           <SwiperSlide className="mt-3">
//             <div
//               className="items rounded-md overflow-hidden group"
//               onClick={() => goto(5)}
//             >
//               <img
//                 className="w-full transition-all group-hover:scale-105"
//                 src="https://service.spicezgold.com/download/1741864803606_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-1-202404071602.jpg"
//                 alt="Thumbnail 6"
//               />
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="w-[85%] cursor-pointer h-[600px] overflow-hidden py-3">
//         <Swiper
//           ref={zoomsliderbig}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation={false}
//         >
//           <SwiperSlide>
//             <InnerImageZoom
//               zoomScale={1}
//               zoomType="hover"
//               src="https://service.spicezgold.com/download/1741864421324_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <InnerImageZoom
//               zoomScale={1}
//               zoomType="hover"
//               src="https://service.spicezgold.com/download/1741864702486_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <InnerImageZoom
//               zoomScale={1}
//               zoomType="hover"
//               src="https://service.spicezgold.com/download/1741864702492_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <InnerImageZoom
//               zoomScale={1}
//               zoomType="hover"
//               src="https://service.spicezgold.com/download/1741864702494_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <InnerImageZoom
//               zoomScale={1}
//               zoomType="hover"
//               src="https://service.spicezgold.com/download/1741864803607_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvz2bvyrm2-2-202404071602.jpg"
//             />
//           </SwiperSlide>
//           <SwiperSlide>
//             <InnerImageZoom
//               zoomScale={1}
//               zoomType="hover"
//               src="https://service.spicezgold.com/download/1741860489351_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-0-202304131033.jpg"
//             />
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// };

// export default ProductZoom;
