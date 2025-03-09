// import LightGallery from "lightgallery/react";

// import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

// import "lightgallery/scss/lightgallery.scss";
// import "lightgallery/scss/lg-zoom.scss";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";
// import Img1 from "../../assets/gallery/gallery1.png";
// import Img2 from "../../assets/gallery/gallery2.png";
// import Img3 from "../../assets/gallery/gallery3.png";
// import Img4 from "../../assets/gallery/gallery4.png";
// import Img5 from "../../assets/gallery/gallery5.png";
// import Img6 from "../../assets/gallery/gallery6.png";
// import Img7 from "../../assets/gallery/gallery7.png";
// import Img8 from "../../assets/gallery/gallery8.png";
// import Img9 from "../../assets/gallery/gallery9.png";
// import Img10 from "../../assets/gallery/gallery10.png";

// const Gallerys = () => {
//   return (
//     <div>
//       <div className="">
//         <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
//           <a href="/src/assets/gallery/gallery1.png">
//             <img alt="img1" src={Img1} />
//           </a>
//           <a href="/src/assets/gallery/gallery2.png">
//             <img alt="img1" src={Img2} />
//           </a>
//           <a href="/src/assets/gallery/gallery3.png">
//             <img alt="img1" src={Img3} />
//           </a>
//           <a href="/src/assets/gallery/gallery4.png">
//             <img alt="img1" src={Img4} />
//           </a>
//           <a href="/src/assets/gallery/gallery5.png">
//             <img alt="img1" src={Img5} />
//           </a>
//           <a href="/src/assets/gallery/gallery6.png">
//             <img alt="img1" src={Img6} />
//           </a>
//           <a href="/src/assets/gallery/gallery7.png">
//             <img alt="img1" src={Img7} />
//           </a>
//           <a href="/src/assets/gallery/gallery8.png">
//             <img alt="img1" src={Img8} />
//           </a>
//           <a href="/src/assets/gallery/gallery9.png">
//             <img alt="img1" src={Img9} />
//           </a>
//           <a href="/src/assets/gallery/gallery10.png">
//             <img alt="img1" src={Img10} />
//           </a>
//         </LightGallery>
//       </div>
//     </div>
//   );
// };

// export default Gallerys;
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

import Img1 from "../../assets/gallery/gallery1.png";
import Img2 from "../../assets/gallery/gallery2.png";
import Img3 from "../../assets/gallery/gallery3.png";
import Img4 from "../../assets/gallery/gallery4.png";
import Img5 from "../../assets/gallery/gallery5.png";
import Img6 from "../../assets/gallery/gallery6.png";
import Img7 from "../../assets/gallery/gallery7.png";
import Img8 from "../../assets/gallery/gallery8.png";
import Img9 from "../../assets/gallery/gallery9.png";
import Img10 from "../../assets/gallery/gallery10.png";

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

const Gallerys = () => {
  return (
    <div>
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery1.png">
              <img alt="img1" src={Img1} />
            </a>
          </LightGallery>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery2.png">
              <img alt="img1" src={Img2} />
            </a>
          </LightGallery>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery3.png">
              <img alt="img1" src={Img3} />
            </a>
          </LightGallery>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery4.png">
              <img alt="img1" src={Img4} />
            </a>
          </LightGallery>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery5.png">
              <img alt="img1" src={Img5} />
            </a>
          </LightGallery>
        </SwiperSlide>
        {/* <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery6.png">
              <img alt="img1" src={Img6} />
            </a>
          </LightGallery>
        </SwiperSlide> */}
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery7.png">
              <img alt="img1" src={Img7} />
            </a>
          </LightGallery>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery8.png">
              <img alt="img1" src={Img8} />
            </a>
          </LightGallery>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery9.png">
              <img alt="img1" src={Img9} />
            </a>
          </LightGallery>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex w-[1500px]  gap-4"
          >
            <a href="/src/assets/gallery/gallery10.png">
              <img alt="img1" src={Img10} />
            </a>
          </LightGallery>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Gallerys;
