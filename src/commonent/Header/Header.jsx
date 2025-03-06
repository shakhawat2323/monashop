import React from "react";
import { Link } from "react-router";
import Input from "./Input";
import Badge from "@mui/material/Badge";
import "../Header/input.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from "@mui/material/Tooltip";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <div className="bg-[#FFFFFF]">
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

      <section className="flex justify-between border-b border-[#E5E5E5] items-center px-4">
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
        <div className="col2 ">
          <Input />
        </div>
        <div className="col3  ">
          <ul className="flex items-center gap-6">
            <li className="list">
              <Tooltip title="Compare">
                <Badge badgeContent={1} uiBadge-badge>
                  <IoIosGitCompare className="text-4xl" color="action" />
                </Badge>
              </Tooltip>
            </li>
            <li className="list">
              <Tooltip title="Wishlist">
                <Badge badgeContent={1} uiBadge-badge>
                  <FaRegHeart className="text-4xl" color="action" />
                </Badge>
              </Tooltip>
            </li>
            <li className="list">
              <Tooltip title="Cart">
                <Badge badgeContent={1} uiBadge-badge>
                  <MdOutlineShoppingCart className="text-4xl" color="action" />
                </Badge>
              </Tooltip>
            </li>
            <li className="flex gap-1 ">
              <Link className="list text-xl font-[500px] ">Login</Link>
              <span className="text-xl font-[500px]">|</span>
              <Link className="list text-xl font-[500px]">Register</Link>
            </li>
            {/* <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div> */}
          </ul>
        </div>
      </section>
      <section>
        <Navigation />
      </section>
    </div>
  );
};

export default Header;
