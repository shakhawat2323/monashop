import React from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};

export default Root;
