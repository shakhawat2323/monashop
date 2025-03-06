import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FaRegSquarePlus } from "react-icons/fa6";

import { IoClose } from "react-icons/io5";

const Categories = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setDraweropen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <div className="flex items-center justify-between">
        <h1 className="text-xl  px-2 py-3">Shop By Categories</h1>
        <button
          onClick={toggleDrawer(false)}
          className="text-3xl  cursor-pointer p-2 "
        >
          <IoClose />
        </button>
      </div>

      <div className="scrol w-full">
        <ul className="px-3">
          <li className="flex items-center w-full relative ">
            <Button className="text-xl w-full !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
              Fashion
            </Button>
            <FaRegSquarePlus className="absolute right-1 cursor-pointer" />
            <ul className="submenu absolute top-[100%] left-0 w-full pl-2">
              <li className="list-none flex items-center reletive">
                {" "}
                <Button className="text-xltransition-colors duration-300 hover:!text-[#ff5252] w-full  !text-left  !justify-start !text-[rgba(0,0,0,0.8)]">
                  Fashion
                </Button>
                <FaRegSquarePlus className="cursor-pointer absolute right-0" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer open={props.idDraweropen} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Categories;
