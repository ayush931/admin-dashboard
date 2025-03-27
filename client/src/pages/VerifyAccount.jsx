import { Link, NavLink } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { Button } from "@mui/material";
import { HiOutlineUserCircle } from "react-icons/hi2";
import OtpBox from "../components/OtpBox";
import { useState } from "react";

function VerifyAccount() {
  const [otp, setOtp] = useState("");
  function handleOtpChange(value) {
    setOtp(value);
  }
  return (
    <section className="w-full">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to={"/"}>
          <img src="/logoHeader.png" alt="" className="w-[200px] h-[100px]" />
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to={"/login"} exact={true} activeClassName={"isActive"}>
            <Button className="btn-green btn-sm !rounded-full !px-5 !gap-2">
              <LuLogIn className="text-[18px] gap-2" /> Login
            </Button>
          </NavLink>
          <NavLink to={"/signup"} exact={true} activeClassName={"isActive"}>
            <Button className="btn-green btn-sm !rounded-full !px-5 !gap-2">
              <HiOutlineUserCircle className="text-[18px] gap-2" /> Signup
            </Button>
          </NavLink>
        </div>
      </header>
      <img
        src="/sarah-dorweiler-x2Tmfd1-SgA-unsplash.jpg"
        alt=""
        className="w-auto top-0 left-0 opacity-10 fixed"
      />
      <div className="loginBox card w-[600px] h-[300px] mx-auto mt-16 relative z-50">
        <div className="text-center">
          <img
            src="/logoHeader.png"
            alt=""
            className="h-[100px] w-[200px] text-center ml-48"
          />
        </div>
        <h1 className="text-center text-[35px] font-[800]">
          Welcome Back,
          <br />
          Please verify your account
        </h1>
        <br />
        <p className="text-center text-[15px]">
          OTP send to
          <span className="text-primary font-bold">
            &nbsp;ayushkumar9315983@gmail.com
          </span>
        </p>
        <div className="text-center flex items-center justify-center flex-col mt-5">
          <OtpBox length={6} onChange={handleOtpChange} />
        </div>
        <div className="w-[300px] m-auto mt-5">
          <Button className="btn-green w-full">Verify OTP</Button>
        </div>
      </div>
    </section>
  );
}

export default VerifyAccount;
