import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { LuBellRing } from "react-icons/lu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext, useState } from "react";
import { Divider } from "@mui/material";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import { fetchDataFromApi } from "../utils/api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function Header() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };

  function logout() {
    setAnchorMyAcc(null);
    fetchDataFromApi(
      `/api/user/logout?accessToken=${localStorage.getItem("accessToken")}`,
      { withCredentials: true }
    ).then((res) => {
      console.log(res);
      if (res?.error === true) {
        context.openAlertBox("error", res.message);
      } else {
        context.setIsLogin(false);
        localStorage.removeItem("userEmail");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/")
      }
    });
  }
  return (
    <>
      <header
        className={`w-full h-[auto] py-2 ${
          context.isSidebarOpen ? "pl-72" : "pl-24"
        } pr-7 bg-[#fff] shadow-md flex items-center justify-between`}
      >
        <div className="part1">
          <Button
            className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-black"
            onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
          >
            {context.isSidebarOpen === true ? (
              <RiMenuFoldFill className="text-[18px] text-black" />
            ) : (
              <RiMenuUnfoldFill className="text-[18px] text-black" />
            )}
          </Button>
        </div>
        <div className="part2 w-[40%] flex items-center justify-end gap-5">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <LuBellRing />
            </StyledBadge>
          </IconButton>
          {context.isLogin === true ? (
            <div className="relative">
              <div
                className="rounded-full w-[35px] h-[34px] overflow-hidden cursor-pointer"
                onClick={handleClickMyAcc}
              >
                <img
                  src="/Ayush Photo 2.jpg"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <Menu
                anchorEl={anchorMyAcc}
                id="account-menu"
                open={openMyAcc}
                onClose={handleCloseMyAcc}
                onClick={handleCloseMyAcc}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full w-[35px] h-[34px] overflow-hidden cursor-pointer">
                      <img
                        src="/Ayush Photo 2.jpg"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="info">
                      <h3 className="text-[15px] font-[500] leading-5">
                        {context?.userData?.name}
                      </h3>
                      <p className="text-[12px] font-[400] opacity-70">
                        {context?.userData?.email}
                      </p>
                    </div>
                  </div>
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={handleCloseMyAcc}
                  className="flex items-center gap-3 justify-center"
                >
                  <FaRegCircleUser className="text-[14px]" />
                  <span className="text-[16px]">Profile</span>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseMyAcc}
                  className="flex items-center gap-3 justify-center"
                >
                  <IoSettingsOutline className="text-[14px]" />
                  <span className="text-[16px]">Account Setting</span>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseMyAcc}
                  className="flex items-center gap-3 justify-center"
                >
                  <FiActivity className="text-[14px]" />
                  <span className="text-[16px]">Activity Log</span>
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={logout}
                  className="flex items-center gap-3 justify-center"
                >
                  <MdLogout className="text-[14px]" />
                  <span className="text-[16px]">Sign out</span>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to={"/login"} className="btn-green btn-sm !rounded-full">
              Login
            </Link>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
