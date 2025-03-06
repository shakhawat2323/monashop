import React from "react";
import { Link } from "react-router";
import Input from "./Input";
import Badge from "@mui/material/Badge";
import "../Header/input.css";
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className="">
      <section className="py-1 mt-2 border-t  border-b border-[#E5E5E5]">
        <div className="flex items-center justify-between w-11/12 mx-auto ">
          <div className="">
            <h1 className="text-sm font-[400] text-[#7f888d]">
              Get up to 50% off new season styles, limited time only
            </h1>
          </div>
          <div className="text-sm font-[400] text-[#7f888d] ">
            <ul className="flex flex-row gap-5 ">
              <Link to="#">
                {" "}
                <li className="list ">About Us</li>
              </Link>
              <Link to="#">
                <li className="list">Blog</li>
              </Link>
              <Link to="#">
                <li className="list">Contact Us</li>
              </Link>
              <Link to="#">
                {" "}
                <li className="list">FAQs</li>
              </Link>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex  items-center px-4">
        <div className="col1 flex items-center">
          <img
            className=" w-24"
            src="/src/assets/img/Logo/monasop.png"
            alt="Logo"
          />
          <div>
            <p className="text-4xl">𝕸𝖔𝖓𝖆𝖘𝖍𝖔𝖕</p>
            <p className="text-xs">
              ＢＩＧ <span className="text-[#aa1ce8]">ＭＥＧＡ</span> ＳＴＯＲＥ
            </p>
          </div>
        </div>
        <div className="col2 ml-32">
          <Input />
        </div>
        <div className="col3 ml-7 ">
          <ul className="flex items-center gap-5">
            <li className="flex gap-1 ">
              <Link className="list text-xl font-[500px] ">Login</Link>
              <span className="text-xl font-[500px]">|</span>
              <Link className="list text-xl font-[500px]">Register</Link>
            </li>
            <li>
              <Badge badgeContent={1} uiBadge-badge>
                <MdOutlineShoppingCart className="text-4xl" color="action" />
              </Badge>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Header;
