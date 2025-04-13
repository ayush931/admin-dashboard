import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { Button } from "@mui/material";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useContext, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MyContext } from "../App";
import { postData } from "../utils/api";

function ForgotPassword() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);

  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });
  console.log(localStorage.getItem("userEmail"))

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  const validateValue = Object.values(formFields).every((element) => element);

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);
    if (formFields.newPassword === "") {
      context.openAlertBox("error", "Please provide new password");
      context.setLoading(false);
      return false;
    }
    if (formFields.confirmPassword === "") {
      context.openAlertBox("error", "Please provide confirm password");
      context.setLoading(false);
      return false;
    }
    if (formFields.newPassword !== formFields.confirmPassword) {
      context.openAlertBox(
        "error",
        "New password and confirm password does not match"
      );
      context.setLoading(false);
      return false;
    }

    postData("/api/user/resetPassword", formFields).then((res) => {
      console.log(res);
      if (res?.error === false) {
        localStorage.removeItem("userEmail");
        localStorage.removeItem("actionType");
        navigate("/login");
        context.setLoading(false);
        context.openAlertBox("success", res?.message);
      } else {
        context.openAlertBox("error", res?.message);
      }
    });
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
          Having trouble to Login?
          <br />
          Reset your password
        </h1>

        <br />
        <form className="w-full p-8" onSubmit={handleSubmit}>
          <div className="form-group mb-4 w-full relative">
            <label htmlFor="email" className="text-[14px] font-[500] mb-1">
              New Password
            </label>
            <input
              type={isShowPassword === true ? "text" : "password"}
              placeholder="Enter your new password..."
              name="newPassword"
              value={formFields.newPassword}
              onChange={onChangeInput}
              required
              disabled={context.loading === true ? true : false}
              className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.2)] focus:border-primary focus:outline-none px-3 rounded-md"
            />
            <Button
              className="!absolute top-8 right-0 z-50 !rounded-full"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword === true ? (
                <IoMdEye className="!text-black" />
              ) : (
                <IoMdEyeOff className="!text-black" />
              )}
            </Button>
          </div>
          <div className="form-group mb-4 w-full relative">
            <label htmlFor="email" className="text-[14px] font-[500] mb-1">
              Confirm Password
            </label>
            <input
              type={isShowPassword2 === true ? "text" : "password"}
              name="confirmPassword"
              value={formFields.confirmPassword}
              onChange={onChangeInput}
              disabled={context.loading === true ? true : false}
              required
              placeholder="Enter your email..."
              className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.2)] focus:border-primary focus:outline-none px-3 rounded-md"
            />
            <Button
              className="!absolute top-8 right-0 z-50 !rounded-full"
              onClick={() => setIsShowPassword2(!isShowPassword2)}
            >
              {isShowPassword2 === true ? (
                <IoMdEye className="!text-black" />
              ) : (
                <IoMdEyeOff className="!text-black" />
              )}
            </Button>
          </div>
          <Button type="submit" disabled={!validateValue} className="btn-green btn-lg w-full">Reset Password</Button>
          <div className="text-center flex items-center justify-end gap-5 mt-4">
            <span>Don't want to reset?</span>
            <Link
              to={"/login"}
              className="text-primary font-[700] text-[15px] hover:underline hover:text-gray-700"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ForgotPassword;
