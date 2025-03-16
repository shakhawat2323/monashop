import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Syidebar/Syidber.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import { Rating } from "@smastrom/react-rating";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const Syidber = () => {
  const [Open, setOpent] = useState(true);
  const [OpenAvailability, setOpentAvailability] = useState(true);
  const [OpenSize, setOpentOpenSize] = useState(true);
  const [count, setCount] = useState(0);

  return (
    <div className="sidbear py-5">
      <div className="box">
        <h1 className="text-[16px] w-full font-semibold mb-3 flex items-center gap-3">
          SHOP BY CATEGORY
          <Button
            className="!w-10 !min-w-10 !h-7 !rounded-full"
            onClick={() => setOpent(!Open)}
          >
            {Open === true ? (
              <FaAngleDown className="text-2xl " />
            ) : (
              <FaAngleUp className="text-2xl" />
            )}
          </Button>
        </h1>

        <Collapse isOpened={Open}>
          <div className="scroll px-4 relative -left-[10px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Electronics"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h1 className="text-[16px] uppercase w-full font-semibold mb-3 mt-5 flex items-center justify-between">
          Availability
          <Button
            className="!w-10 !min-w-10 !h-7 !rounded-full"
            onClick={() => setOpentAvailability(!OpenAvailability)}
          >
            {OpenAvailability === true ? (
              <FaAngleDown className="text-2xl " />
            ) : (
              <FaAngleUp className="text-2xl" />
            )}
          </Button>
        </h1>

        <Collapse isOpened={OpenAvailability}>
          <div className=" px-4 relative -left-[10px] ph-3">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available (17)"
              className="w-full py-1"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In stock (10)"
              className="w-full py-1"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not available (1)"
              className="w-full py-1"
            />
          </div>
        </Collapse>
      </div>
      <div className="box">
        <h1 className="text-[16px] uppercase w-full font-semibold mb-3 mt-5 flex items-center justify-between">
          Size
          <Button
            className="!w-10 !min-w-10 !h-7 !rounded-full"
            onClick={() => setOpentOpenSize(!OpenSize)}
          >
            {OpenSize === true ? (
              <FaAngleDown className="text-2xl " />
            ) : (
              <FaAngleUp className="text-2xl" />
            )}
          </Button>
        </h1>

        <Collapse isOpened={OpenSize}>
          <div className=" px-4 relative -left-[10px] ph-3">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label={` Small (${count})`}
              className="w-full py-1"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium (5)"
              className="w-full py-1"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large (7)"
              className="w-full py-1"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL   (1)"
              className="w-full py-1"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label=" XXL (3)"
              className="w-full py-1"
            />
            {/* <button onClick={() => setCount(count + 1)}>hi dos</button> */}
          </div>
        </Collapse>
        <h1 className="text-[16px]  w-full font-semibold mb-3 mt-5 flex items-center justify-between">
          Filter By Price
        </h1>

        <RangeSlider />
        <div className="flex items-center gap-5 pt-4 pb-2 ">
          <span className="text-[13px]">
            From: <strong>$: {100}</strong>
          </span>
          <span className="text-[13px]">
            From: <strong>$: {100}</strong>
          </span>
        </div>
        <h1 className="text-[16px]  w-full font-semibold mb-3 mt-5 flex items-center justify-between">
          Filter By Rating
        </h1>
        {/* <Rating style={{ maxWidth: 100 }} value={5} readOnly />
        <Rating style={{ maxWidth: 100 }} value={4} readOnly />
        <Rating style={{ maxWidth: 100 }} value={3} readOnly />
        <Rating style={{ maxWidth: 100 }} value={2} readOnly />
        <Rating style={{ maxWidth: 100 }} value={1} readOnly /> */}
        <div className="w-full">
          <Rating
            name="half-rating-read"
            defaultValue={5}
            precision={5}
            readOnly
          />
        </div>
        <div className="w-full">
          <Rating
            name="half-rating-read"
            defaultValue={4}
            precision={4}
            readOnly
          />
        </div>
        <div className="w-full">
          <Rating
            name="half-rating-read"
            defaultValue={3}
            precision={3}
            readOnly
          />
        </div>
        <div className="w-full">
          <Rating
            name="half-rating-read"
            defaultValue={2}
            precision={2}
            readOnly
          />
        </div>
        <div className="w-full">
          <Rating
            name="half-rating-read"
            defaultValue={1}
            precision={1}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default Syidber;
