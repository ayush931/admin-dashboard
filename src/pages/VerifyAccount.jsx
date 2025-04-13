import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { Button } from "@mui/material";
import { HiOutlineUserCircle } from "react-icons/hi2";
import OtpBox from "../components/OtpBox";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import { postData } from "../utils/api";
import LoadingCircle from "../components/LoadingCircle";

function VerifyAccount() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  function handleOtpChange(value) {
    setOtp(value);
  }

  const userEmail = localStorage.getItem("userEmail");

  function verifyOtp(e) {
    e.preventDefault();
    const actionType = localStorage.getItem("actionType");
    if (actionType !== "forgot-password") {
      context.setLoading(true);
      postData("/api/user/verifyEmail", {
        email: userEmail,
        otp: otp,
      }).then((res) => {
        if (res?.error === false) {
          context.openAlertBox("success", res?.message);
          localStorage.removeItem("userEmail");
          navigate("/login");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
      context.setLoading(false);
    }
    else {
      context.setLoading(true);
      postData("/api/user/verifyForgotPasswordOtp", {
        email: userEmail,
        otp: otp
      }).then((res) => {
        if (res?.error === false) {
          context.openAlertBox("success", res?.message);
          navigate("/forgotPassword");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
      context.setLoading(false);
    }
  }
  return (
    <section className="w-full">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to={"/"}>
          <img src="/logoHeader.png" alt="" className="w-[200px] h-[100px]" />
        </Link>
        <div className="flex items-center gap-4">
          <NavLink to={"/login"} end>
            <Button className="btn-green btn-sm !rounded-full !px-5 !gap-2">
              <LuLogIn className="text-[18px] gap-2" /> Login
            </Button>
          </NavLink>
          <NavLink to={"/signup"} end>
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
          <span className="text-primary font-bold">&nbsp;{userEmail}</span>
        </p>
        <form onSubmit={verifyOtp}>
          <div className="text-center flex items-center justify-center flex-col mt-5">
            <OtpBox length={6} onChange={handleOtpChange} />
          </div>

          <div className="w-[300px] m-auto mt-5">
            <Button type="submit" className="btn-green w-full">
              {context.loading === true ? <LoadingCircle /> : "Verify OTP"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default VerifyAccount;
