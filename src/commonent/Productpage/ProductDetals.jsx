import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import ProductZoom from "./ProductZoom";

const ProductDetals = () => {
  return (
    <>
      <div>
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
      </div>

      <section className="bg-white py-5 px-5">
        <div className=" flex gap-4">
          <div className="productZoomContainer  w-[36%] ">
            <ProductZoom />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetals;
