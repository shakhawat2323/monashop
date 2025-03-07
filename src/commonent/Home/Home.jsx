import React from "react";
import Slider from "./Slider";
import Catslider from "./Catslider";

const Home = () => {
  return (
    <div className="bg-[#F5F0F0] h-screen">
      <Slider />
      <h1 className="text-2xl font-bold text-center py-2">category</h1>
      <Catslider />
    </div>
  );
};

export default Home;
