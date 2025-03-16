import React from "react";
import Syidber from "./Syidebar/Syidber";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
const Productlisting = () => {
  return (
    <div className="w-11/12 mx-auto">
      <section className="py-8">
        <div className="container">
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
          <div className="container flex gap-3">
            <div className="sidebarwrapper w-[20%] h-full   bg-white">
              <Syidber />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productlisting;
