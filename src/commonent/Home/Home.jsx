import React from "react";
import Slider from "./Slider";
import Catslider from "./Catslider";
import Shipping from "./Shipping";
import Bannarslider from "./Bannarslider";
import Populerproduct from "./Populerproduct";
import Productslider from "../Productpage/Productslider/Productslider";
import Blog from "./Blog";
import Gallerys from "./Gallery";
import Delevary from "./Delevary";

const Home = () => {
  return (
    <>
      <div className="bg-[#F5F0F0]   py-5">
        <Slider />
        <h1 className="text-2xl font-bold text-center py-2">category</h1>
      </div>
      <div className="bg-[#F5F0F0]  ">
        <Catslider />
      </div>
      <div>
        <Populerproduct />
        <Productslider />
      </div>
      <div className="mt-5">
        <Shipping />
      </div>
      <div>
        <Bannarslider item={4} />
      </div>
      <div className="py-5 ">
        <h1 className="text-xl font-bold w-11/12 mx-auto">Latest Products</h1>
        <Productslider />
        <Bannarslider item={3} />
      </div>
      <div className="py-5 ">
        <h1 className="text-xl font-bold w-11/12 mx-auto">Featured Products</h1>
        <Productslider />
        <Bannarslider item={2} />
      </div>
      <div>
        <h1 className="text-xl font-bold w-11/12 mx-auto">From The Blog</h1>
        <Blog />
      </div>
      <div className="pb-10 bg-[#FAF5F5] ">
        <h1 className="text-2xl font-bold  py-5 text-center">
          Our Latest Gallery
        </h1>
        <Gallerys />
      </div>
      <div className="mt-5 pb-10 w-10/12 mx-auto">
        <Delevary />
      </div>
    </>
  );
};

export default Home;
