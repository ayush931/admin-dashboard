import { Link, NavLink, useNavigate } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { Button } from "@mui/material";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import LoadingCircle from "../components/LoadingCircle";
import { postData } from "../utils/api";
import { MyContext } from "../App";

function Signup() {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const context = useContext(MyContext);
  const navigate = useNavigate();

  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  function handleClickFacebook() {
    setLoadingFacebook(true);
  }

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const validateValue = Object.values(formFields).every((el) => el);

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);
    if (formFields.name === "") {
      context.openAlertBox("error", "Please add Full Name");
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email");
    }
    if (formFields.password === "") {
      context.openAlertBox("error", "Please enter password");
    }
    postData("/api/user/register", formFields).then((res) => {
      context.setLoading(false);
      setFormFields({
        name: "",
        email: "",
        password: "",
      });
      if (res.error === true) {
        context.openAlertBox("error", res.message);
      } else {
        localStorage.setItem("userEmail", formFields.email);
        context.openAlertBox("success", res.message);
        navigate("/verifyAccount");
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
          Sign up with your credentials
        </h1>
        <div className="flex items-center justify-center w-full mt-5 gap-7">
          <Button
            size="medium"
            onClick={handleClickGoogle}
            startIcon={<FcGoogle className="" />}
            loading={loadingGoogle}
            loadingPosition="end"
            variant="contained"
            className="!bg-white !text-black !capitalize"
          >
            Sign up with Google
          </Button>
          <Button
            size="medium"
            onClick={handleClickFacebook}
            startIcon={<FaFacebookSquare className="" />}
            loading={loadingFacebook}
            loadingPosition="end"
            variant="contained"
            className="!bg-white !text-black !capitalize"
          >
            Sign up with Facebook
          </Button>
        </div>
        <br />
        <div className="w-full flex items-center justify-center">
          <span className="flex items-start w-[100px] h-[1px] bg-slate-500"></span>
          <span className="text-[14px] px-5 py-2 font-[500]">
            Sign up with email
          </span>
          <span className="flex items-start w-[100px] h-[1px] bg-slate-500"></span>
        </div>
        <form className="w-full p-8" onSubmit={handleSubmit}>
          <div className="form-group mb-4 w-full">
            <label htmlFor="email" className="text-[14px] font-[500] mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.2)] focus:border-primary focus:outline-none px-3 rounded-md"
              name="name"
              value={formFields.name}
              // disabled={context.loading === true ? true : false}
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group mb-4 w-full">
            <label htmlFor="email" className="text-[14px] font-[500] mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.2)] focus:border-primary focus:outline-none px-3 rounded-md"
              name="email"
              value={formFields.email}
              // disabled={context.loading === true ? true : false}
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group mb-4 w-full">
            <label htmlFor="password" className="text-[14px] font-[500] mb-1">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={isShowPassword ? "text" : "password"}
                value={formFields.password}
                onChange={onChangeInput}
                name="password"
                // disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.2)] focus:border-primary focus:outline-none px-3 rounded-md"
              />
              <Button
                className="btn-lg !absolute !top-[4px] !right-[0px] !z-50 !text-primary !rounded-full"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword === false ? <IoMdEyeOff /> : <IoMdEye />}
              </Button>
            </div>
          </div>
          <div className="form-group mb-4 w-full flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Checkbox defaultChecked className="!text-primary" />
              <span>Remember me</span>
            </div>
            <Link
              to={"/forgotPassword"}
              className="text-primary font-[700] text-[15px] hover:underline"
            >
              Forgot Password ?
            </Link>
          </div>
          <Button
            type="submit"
            disabled={!validateValue}
            className="btn-green btn-lg w-full"
          >
            {context.loading === true ? <LoadingCircle /> : "Register"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
