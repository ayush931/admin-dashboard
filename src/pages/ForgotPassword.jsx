import { Link, NavLink } from "react-router-dom";
import { LuLogIn } from "react-icons/lu";
import { Button } from "@mui/material";
import { HiOutlineUserCircle } from "react-icons/hi2";

function ForgotPassword() {
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
        <form className="w-full p-8">
          <div className="form-group mb-4 w-full">
            <label htmlFor="email" className="text-[14px] font-[500] mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email..."
              className="w-full h-[40px] border-2 border-[rgba(0,0,0,0.2)] focus:border-primary focus:outline-none px-3 rounded-md"
            />
          </div>
          <Button className="btn-green btn-lg w-full">Reset Password</Button>
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
