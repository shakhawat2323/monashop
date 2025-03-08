import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";
import "../Home/Home.css";

const Populerproduct = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-5 w-11/12 mx-auto">
      <div>
        <div className="flex justify-between items-center">
          <div className="left">
            <h1 className="text-2xl font-bold">Popular Products</h1>
            <p className="font-medium">
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <div className="right w-[60%]">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Fashion " />
              <Tab label="Electronics " />
              <Tab label="Bags " />
              <Tab label="Footwear " />
              <Tab label="Beauty " />
              <Tab label="Wellness " />
              <Tab label="Jewellery" />
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Populerproduct;
