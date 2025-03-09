import React from "react";
import { Link } from "react-router";
import { IoChatboxOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" border-t-[1px] border-[rgba(0,0,0,0.1)] py-5 w-11/12 mx-auto grid grid-cols-1 grid-cols-4">
        <div className=" flex flex-col ">
          <p className="text-2xl font-bold py-3">Contact us</p>
          <p className="text-[15px] py-4">
            Classyshop - Mega Super Store
            <br /> 507-Union Trade Centre France
          </p>
          <Link to="shakhawathossain208@gmail.com" className="text-sm ">
            shakhawathossain208@gmail.com
          </Link>
          <p className="text-2xl font-bold text-[#ff5252] py-3">
            +8801749888203
          </p>
          <div className="flex items-center gap-3">
            <IoChatboxOutline className="text-3xl text-prymary " />
            <p className="text-2xl font-bold">
              Online Chat <br />
              Get Expert Help
            </p>
          </div>
        </div>
        <div>
          <div>
            <p className="text-2xl font-bold py-3">Contact us</p>
            <ul className="py-3">
              <li className="pb-3 colors">
                <Link>Prices drop</Link>
              </li>
              <li className="pb-3 colors">
                <Link>New products</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Best sales</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Contact us</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Sitemap</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Stores</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p className="text-2xl font-bold py-3">Our company</p>
            <ul className="py-3">
              <li className="pb-3 colors">
                <Link>Delivery</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Legal Notice</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Terms and conditions of use</Link>
              </li>
              <li className="pb-3 colors">
                <Link>About us</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Secure payment</Link>
              </li>
              <li className="pb-3 colors">
                <Link>Login</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <p className="text-2xl font-bold py-3">Subscribe to newsletter</p>
            <p className="text-sm font-sans py-3">
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>

            <form className="py-5">
              <input
                type="text"
                className="border w-full h-12 px-5"
                placeholder="Your Email Address"
              />
            </form>
            <button className="btn btn-error text-white hover:bg-black">
              SUBSCRIBE
            </button>
            <div className="flex py-5 gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-error"
              />
              <p>I agree to the terms and conditions and the privacy policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-[rgba(0,0,0,0.1)] py-5 ">
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <ul className="flex items-center gap-5">
            <li>
              <Link to="" className=" ">
                <FaFacebookF className="text-2xl bg-white shadow-2xl w-10 h-10 p-2 rounded-full border-1 border-[rgba(0,0,0,0.1)] " />
              </Link>
            </li>
            <li>
              <Link to="" className=" ">
                <FaYoutube className="text-2xl bg-white shadow-2xl w-10 h-10 p-2 rounded-full border-1 border-[rgba(0,0,0,0.1)] " />
              </Link>
            </li>
            <li>
              <Link to="" className=" ">
                <FaLinkedin className="text-2xl bg-white shadow-2xl w-10 h-10 p-2 rounded-full border-1 border-[rgba(0,0,0,0.1)] " />
              </Link>
            </li>
            <li>
              <Link to="" className=" ">
                <IoLogoGithub className="text-2xl bg-white shadow-2xl w-10 h-10 p-2 rounded-full border-1 border-[rgba(0,0,0,0.1)] " />
              </Link>
            </li>
          </ul>
          <div>
            <p>©2025 www.monashop.com - All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-1">
            <img className="w-14" src="/src/assets/pyment/pyment1.png" alt="" />
            <img className="w-14" src="/src/assets/pyment/pyment2.png" alt="" />
            <img className="w-14" src="/src/assets/pyment/pyment3.png" alt="" />
            <img className="w-14" src="/src/assets/pyment/pyment4.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
