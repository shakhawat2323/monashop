import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Syidebar/Syidber.css";
import { Collapse } from "react-collapse";
import Button from "@mui/material/Button";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
const Syidber = () => {
  const [Open, setOpent] = useState(true);

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
    </div>
  );
};

export default Syidber;
