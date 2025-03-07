import React from "react";
import Slider from "./Slider";
import Catslider from "./Catslider";
import Shipping from "./Shipping";
import Bannarslider from "./Bannarslider";

const Home = () => {
  return (
    <>
      <div className="bg-[#F5F0F0]  py-5">
        <Slider />
        <h1 className="text-2xl font-bold text-center py-2">category</h1>
        <Catslider />
      </div>
      <div>
        <Shipping />
      </div>
      <div>
        <Bannarslider />
      </div>
    </>
  );
};

export default Home;
