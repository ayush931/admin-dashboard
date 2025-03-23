import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { FiEdit } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { HiPlusSm } from "react-icons/hi";
import { PiExportBold } from "react-icons/pi";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "id", label: "ID", minWidth: 80 },
  { id: "product", label: "Product", minWidth: 170 },
  { id: "category", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "subCategory",
    label: "Sub Category",
    minWidth: 150,
    align: "center",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 150,
  },
  {
    id: "sales",
    label: "Sales",
    minWidth: 150,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 150,
  },
];

function createData(id, product, category, subCategory, price, sales, action) {
  return { id, product, category, subCategory, price, sales, action };
}

const rows = [
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
  createData(
    <Checkbox {...label} size="small" />,
    <div className="flex items-center gap-4 w-[350px]">
      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
            alt=""
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
      <div className="info w-[75%]">
        <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
          <Link to={"/product/463737"}>
            Women Printed Viscose Rayon A-line Kurta (Yellow)
          </Link>
        </h3>
        <span className="text-[12px]">AVAASA MIX N' MATCH</span>
      </div>
    </div>,
    <td className="px-6 py-2">Clothing</td>,
    <td className="px-6 py-2">Women</td>,
    <div className="flex flex-col gap-1 w-[60px]">
      <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
        $ 58.00
      </span>
      <span className="price text-primary text-[15px] font-[600]">$ 41.00</span>
    </div>,
    <td className="px-6 py-2">
      <p className="text-[14px]">
        <span className="font-[600] mr-1">234</span>sale
      </p>
      <div>
        <ProgressBar value={90} type="warning" />
      </div>
    </td>,
    <div className="flex items-center gap-1">
      <Tooltip title="Edit" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiEdit className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="View" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FaRegEye className="text-black text-[18px]" />
        </Button>
      </Tooltip>
      <Tooltip title="Delete" placement="bottom">
        <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
          <FiTrash2 className="text-black text-[18px]" />
        </Button>
      </Tooltip>
    </div>,
  ),
];

function MaterialUiTable() {
  const [categoryFilterValue, setCategoryFilterValue] = useState("");

  const handleChangeCategoryFilter = (event) => {
    setCategoryFilterValue(event.target.value);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div className="card my-4 shadow-md sm:shadow-lg bg-white">
      <div className="flex items-center justify-between px-5 py-5">
        <h2 className="text-[20px] font-[600]">
          Products{" "}
          <span className="text-[12px] font-[400]">(Material UI Table)</span>
        </h2>
      </div>
      <div className="flex items-center w-full pl-5 justify-between pr-5 mb-3">
        <div className="col w-[20%]">
          <h4 className="font-[600] text-[13px] mb-2">Category</h4>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={categoryFilterValue}
            onChange={handleChangeCategoryFilter}
            label="Category"
            className="mt-3 w-full"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Men</MenuItem>
            <MenuItem value={20}>Women</MenuItem>
            <MenuItem value={30}>Kids</MenuItem>
          </Select>
        </div>
        <div className="w-[25%] ml-auto flex items-center gap-3">
          <Button className="btn-green btn-sm flex items-center justify-center gap-2">
            <PiExportBold className="text-[18px] mb-0.5" />
            Export
          </Button>
          <Button className="!bg-blue-700 btn-sm !text-white !capitalize flex items-center justify-center">
            <HiPlusSm className="text-[20px]" />
            Add product
          </Button>
        </div>
      </div>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default MaterialUiTable;
