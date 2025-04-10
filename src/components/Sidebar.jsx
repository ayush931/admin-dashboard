import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { IoImageOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategoryPlus } from "react-icons/tb";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdOutlineLogout } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { Collapse } from "react-collapse";
import { useContext, useState } from "react";
import { MyContext } from "../App";

function Sidebar() {
  const context = useContext(MyContext);
  const [subMenuIndex, setSubMenuIndex] = useState(null);

  function isOpenSubMenu(index) {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  }

  return (
    <>
      <div
        className={`sidebar fixed top-0 left-0 bg-[#fff] ${
          context.isSidebarOpen === true ? "w-[18%]" : "w-[0px] !px-0 !hidden"
        } h-full border-r border-black py-1 px-2`}
      >
        <div className="py-2 w-full">
          <Link to={"/"}>
            <img src="/logoHeader.png" alt="" className="w-[150px]" />
          </Link>
        </div>
        <ul className="mt-4">
          <li>
            <Link to={"/"}>
              <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-black !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]">
                <RxDashboard className="text-[16px]" />
                <span>Dashboard</span>
              </Button>
            </Link>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-black !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(1)}
            >
              <IoImageOutline className="text-[16px]" />
              <span>Home Slides</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 1 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 1 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Home Banner List
                  </Button>
                </li>
                <li className="w-full">
                  <Button className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block !w-[5px] !h-[5px] !rounded-full !bg-[rgba(0,0,0,0.2)]"></span>
                    Add Slide List
                  </Button>
                </li>
              </ul>
            </Collapse>
            <Link to={"/users"}>
              <Button href="/users" className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-black !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]">
                <FiUsers className="text-[16px]" />
                <span>Users</span>
              </Button>
            </Link>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-black !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(3)}
            >
              <RiProductHuntLine className="text-[16px]" />
              <span>Products</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 3 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 3 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button
                    href="/products"
                    className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                  >
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Product List
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullSCreenPanel({
                        open: true,
                        model: "Add Products",
                      })
                    }
                  >
                    <span className="block !w-[5px] !h-[5px] !rounded-full !bg-[rgba(0,0,0,0.2)]"></span>
                    Product upload
                  </Button>
                </li>
              </ul>
            </Collapse>
            <Button
              className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-black !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]"
              onClick={() => isOpenSubMenu(4)}
            >
              <TbCategoryPlus className="text-[16px]" />
              <span>Category</span>
              <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center">
                <FaAngleDown
                  className={`transition-all ${
                    subMenuIndex === 4 ? "rotate-180" : ""
                  }`}
                />
              </span>
            </Button>
            <Collapse isOpened={subMenuIndex === 4 ? true : false}>
              <ul className="w-full">
                <li className="w-full">
                  <Button href="/category/list" className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                    Category List
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullSCreenPanel({
                        open: true,
                        model: "Add New Category",
                      })
                    }
                  >
                    <span className="block !w-[5px] !h-[5px] !rounded-full !bg-[rgba(0,0,0,0.2)]"></span>
                    Add a category
                  </Button>
                </li>
                <li className="w-full">
                  <Button href="/subcategory/list" className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
                    <span className="block !w-[5px] !h-[5px] !rounded-full !bg-[rgba(0,0,0,0.2)]"></span>
                    Sub category List
                  </Button>
                </li>
                <li className="w-full">
                  <Button
                    className="!text-black !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3"
                    onClick={() =>
                      context.setIsOpenFullSCreenPanel({
                        open: true,
                        model: "Add New Sub Category",
                      })
                    }
                  >
                    <span className="block !w-[5px] !h-[5px] !rounded-full !bg-[rgba(0,0,0,0.2)]"></span>
                    Add a sub category
                  </Button>
                </li>
              </ul>
            </Collapse>
            <Button href="/orders" className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-black !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]">
              <IoBagCheckOutline className="text-[16px]" />
              <span>Orders</span>
            </Button>
            <Button className="w-full !capitalize !justify-start flex gap-3 !text-[14px] !text-black !font-[600] items-center !py-2 hover:!bg-[#f1f1f1]">
              <MdOutlineLogout className="text-[16px]" />
              <span>Logout</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
