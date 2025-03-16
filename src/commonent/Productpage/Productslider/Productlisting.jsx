import React, { useState } from "react";
import Syidber from "./Syidebar/Syidber";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Productslider from "./Productslider";
import Productitem from "../Productitem";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Productitemviews from "../Productitemviews";
const Productlisting = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [itemView, setItemview] = useState("grid");
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div className="">
        <section className="py-8">
          <div className="container px-3">
            <Breadcrumbs aria-label="breadcrumb">
              <Link
                underline="hover"
                color="inherit"
                href="/"
                className="list transition"
              >
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/"
                className="list transition"
              >
                Fashion
              </Link>
            </Breadcrumbs>
          </div>
          <div className="p-3 mt-4 bg-white">
            <div className=" flex justify-between gap-3">
              <div className="sidebarwrapper  w-[17%] h-full   bg-white">
                <Syidber />
              </div>
              <div className="rightcontent w-[82%] ">
                <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-2xl flex items-center justify-between">
                  <div className="col1  flex items-center gap-2 Activeasctionbtn">
                    <Button
                      onClick={() => setItemview("list")}
                      className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                        itemView === "list" && "active"
                      }`}
                    >
                      <FiMenu className="text-3xl" />
                    </Button>
                    <Button
                      onClick={() => setItemview("grid")}
                      className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black ${
                        itemView === "grid" && "active"
                      }`}
                    >
                      <IoGridSharp className="text-3xl" />
                    </Button>
                    <span className="text-[16px] pl-5 font-semibold">
                      There are 27 products.
                    </span>
                  </div>
                  <div className="col2 ml-auto flex items-center pr-5 justify-end">
                    <span className="text-[16px] pl-5 font-semibold">
                      Sort By
                    </span>
                    <div>
                      <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        className="!bg-white !text-sm !ml-2 !text-black !border-2 !border-black"
                      >
                        Sales, highest to lowest
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          Sales, highest to lowest
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Relevance</MenuItem>
                        <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                        <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                        <MenuItem onClick={handleClose}>
                          Price, low to high
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          Price, high to low
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
                <div
                  className={`grid ${
                    itemView === "grid"
                      ? "grid-cols-4 md:grid-cols-4 gap-5"
                      : " md:grid-cols-1 grid-cols-1 gap-5"
                  } `}
                >
                  {itemView === "grid" ? (
                    <>
                      <Productitem />
                      <Productitem />
                      <Productitem />
                      <Productitem />
                      <Productitem />
                      <Productitem />
                      <Productitem />
                      <Productitem />
                      <Productitem />
                      <Productitem />
                    </>
                  ) : (
                    <>
                      <Productitemviews />
                      <Productitemviews />
                      <Productitemviews />
                      <Productitemviews />
                      <Productitemviews />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-10 text-center flex items-center justify-center">
              <Pagination count={10} color="secondary" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productlisting;
