import { Link, NavLink } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { Button } from "@mui/material";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { MyContext } from "../App";
import LoadingCircle from "../components/LoadingCircle";

function Login() {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const context = useContext(MyContext);

  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  function handleClickFacebook() {
    setLoadingFacebook(true);
  }

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        [name]: value,
      };
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);
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
          Login with your credentials
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
            Login with Google
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
            Login with Facebook
          </Button>
        </div>
        <br />
        <div className="w-full flex items-center justify-center">
          <span className="flex items-start w-[100px] h-[1px] bg-slate-500"></span>
          <span className="text-[14px] px-5 py-2 font-[500]">
            Login with email
          </span>
          <span className="flex items-start w-[100px] h-[1px] bg-slate-500"></span>
        </div>
        <form className="w-full p-8" onSubmit={handleSubmit}>
          <div className="form-group mb-4 w-full">
            <label htmlFor="email" className="text-[14px] font-[500] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formFields.value}
              onChange={onChangeInput}
              disabled={context.loading === true ? true : false}
              className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.2)] focus:border-primary focus:outline-none px-3 rounded-md"
            />
          </div>
          <div className="form-group mb-4 w-full">
            <label htmlFor="password" className="text-[14px] font-[500] mb-1">
              Password
            </label>
            <div className="relative w-full">
              <input
                type={isShowPassword ? "text" : "password"}
                name="password"
                value={formFields.password}
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
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
          <Button type="submit" className="btn-green btn-lg w-full">
            {context.loading === true ? <LoadingCircle /> : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Login;
