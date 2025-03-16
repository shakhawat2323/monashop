import React from "react";
import Syidber from "./Syidebar/Syidber";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Productslider from "./Productslider";
import Productitem from "../Productitem";
const Productlisting = () => {
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
              <div className="sidebarwrapper  w-[21%] h-full   bg-white">
                <Syidber />
              </div>
              <div className="rightcontent w-[79%]">
                <div className="grid grid-cols-4 gap-5">
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Productlisting;
