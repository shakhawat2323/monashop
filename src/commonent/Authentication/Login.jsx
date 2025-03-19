import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import Button from "@mui/material/Button";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [isMdEyechange, setIsMdKyeChange] = useState(false);
  return (
    <div className="section py-10 block mx-aut">
      <section className="">
        <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-5 px-10">
          <h1 className="text-center text-2xl font-semibold text-black ">
            Login to your account
          </h1>
          <form className="w-full mt-5">
            <div className="w-full mb-7 from-group">
              <TextField
                type="email"
                name="email"
                id="outlined-basic"
                label="Enter your Email"
                variant="outlined"
                className="w-full "
              />
            </div>
            <div className="w-full mb-5 from-group relative ">
              <TextField
                type={`${isMdEyechange === true ? "password" : "text"}`}
                name="Password"
                id="outlined-basic"
                label="Enter your Password"
                variant="outlined"
                className="w-full "
              />
              <Button
                onClick={() => setIsMdKyeChange(!isMdEyechange)}
                className="!w-[35px] !top-[10px] !right-[10px] !min-w-[35px] !h-[35px] !text-black !rounded-full !absolute"
              >
                {isMdEyechange === true ? (
                  <IoMdEyeOff className="text-3xl" />
                ) : (
                  <IoMdEye className="text-3xl" />
                )}
              </Button>
            </div>
            <Link className="list text-xl font-medium">Forgot Password</Link>
            <div className="!text-center mt-3 mb-3 py-2 ">
              <Button className="!text-center !w-full !bg-[#ff5252] !text-white !text-2xl">
                LOGIN
              </Button>
            </div>
            <p className="text-center text-[16px] pb-3">
              Not Registered?{" "}
              <Link to="/register" className="text-[#ff5252]">
                Sign Up
              </Link>
            </p>
            <p className="text-center pb-3 ">Or continue with social account</p>
            <div>
              <Button className="!text-center !flex !items-center !gap-5 !w-full !bg-[#f1f1f1] !text-black ">
                <FcGoogle className="text-3xl " /> LOGIN WITH GOOGLE
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
