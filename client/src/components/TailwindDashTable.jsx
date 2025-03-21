import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { FiEdit } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import { Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { PiExportBold } from "react-icons/pi";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TailwindDashTable() {
  const [categoryFilterValue, setCategoryFilterValue] = useState("");

  const handleChangeCategoryFilter = (event) => {
    setCategoryFilterValue(event.target.value);
  };
  return (
    <div className="card my-4 shadow-md sm:shadow-lg bg-white">
      <div className="flex items-center justify-between px-5 py-5">
        <h2 className="text-[20px] font-[600]">
          Products{" "}
          <span className="text-[12px] font-[400]">(Tailwindcss Table)</span>
        </h2>
      </div>
      <div className="flex items-center w-full pl-5 justify-between pr-5">
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
      <div className="relative overflow-x-auto mt-5 pb-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 bg-gray-50 text-center capitalize">
            <tr>
              <th scope="col" className="px-6 pr-0 py-2 whitespace-nowrap link">
                <div className="w-[20px]">
                  <Checkbox {...label} size="small" />
                </div>
              </th>
              <th scope="col" className="px-2 py-3 whitespace-nowrap">
                Products
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Category
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                SubCategory
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Price
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Sales
              </th>
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 pr-0 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} size="small" />
                </div>
              </td>
              <td className="px-2 py-2">
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
                </div>
              </td>
              <td className="px-6 py-2">Clothing</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">
                <div className="flex flex-col gap-1 w-[60px]">
                  <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                    $ 58.00
                  </span>
                  <span className="price text-primary text-[15px] font-[600]">
                    $ 41.00
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">
                <p className="text-[14px]">
                  <span className="font-[600] mr-1">234</span>sale
                </p>
                <div>
                  <ProgressBar value={90} type="warning" />
                </div>
              </td>
              <td className="px-6 py-2">
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
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 pr-0 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} size="small" />
                </div>
              </td>
              <td className="px-2 py-2">
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
                </div>
              </td>
              <td className="px-6 py-2">Clothing</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">
                <div className="flex flex-col gap-1 w-[60px]">
                  <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                    $ 58.00
                  </span>
                  <span className="price text-primary text-[15px] font-[600]">
                    $ 41.00
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">
                <p className="text-[14px]">
                  <span className="font-[600] mr-1">234</span>sale
                </p>
                <div>
                  <ProgressBar value={90} type="warning" />
                </div>
              </td>
              <td className="px-6 py-2">
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
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 pr-0 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} size="small" />
                </div>
              </td>
              <td className="px-2 py-2">
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
                </div>
              </td>
              <td className="px-6 py-2">Clothing</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">
                <div className="flex flex-col gap-1 w-[60px]">
                  <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                    $ 58.00
                  </span>
                  <span className="price text-primary text-[15px] font-[600]">
                    $ 41.00
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">
                <p className="text-[14px]">
                  <span className="font-[600] mr-1">234</span>sale
                </p>
                <div>
                  <ProgressBar value={90} type="warning" />
                </div>
              </td>
              <td className="px-6 py-2">
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
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 pr-0 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} size="small" />
                </div>
              </td>
              <td className="px-2 py-2">
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
                </div>
              </td>
              <td className="px-6 py-2">Clothing</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">
                <div className="flex flex-col gap-1 w-[60px]">
                  <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                    $ 58.00
                  </span>
                  <span className="price text-primary text-[15px] font-[600]">
                    $ 41.00
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">
                <p className="text-[14px]">
                  <span className="font-[600] mr-1">234</span>sale
                </p>
                <div>
                  <ProgressBar value={90} type="warning" />
                </div>
              </td>
              <td className="px-6 py-2">
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
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 pr-0 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} size="small" />
                </div>
              </td>
              <td className="px-2 py-2">
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
                </div>
              </td>
              <td className="px-6 py-2">Clothing</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">
                <div className="flex flex-col gap-1 w-[60px]">
                  <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                    $ 58.00
                  </span>
                  <span className="price text-primary text-[15px] font-[600]">
                    $ 41.00
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">
                <p className="text-[14px]">
                  <span className="font-[600] mr-1">234</span>sale
                </p>
                <div>
                  <ProgressBar value={90} type="warning" />
                </div>
              </td>
              <td className="px-6 py-2">
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
                </div>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700 border-gray-200">
              <td className="px-6 pr-0 py-2">
                <div className="w-[60px]">
                  <Checkbox {...label} size="small" />
                </div>
              </td>
              <td className="px-2 py-2">
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
                </div>
              </td>
              <td className="px-6 py-2">Clothing</td>
              <td className="px-6 py-2">Women</td>
              <td className="px-6 py-2">
                <div className="flex flex-col gap-1 w-[60px]">
                  <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                    $ 58.00
                  </span>
                  <span className="price text-primary text-[15px] font-[600]">
                    $ 41.00
                  </span>
                </div>
              </td>
              <td className="px-6 py-2">
                <p className="text-[14px]">
                  <span className="font-[600] mr-1">234</span>sale
                </p>
                <div>
                  <ProgressBar value={20} type="warning" />
                </div>
              </td>
              <td className="px-6 py-2">
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end pt-5 pb-5 px-4">
        <Pagination count={10} color="primary" />
      </div>
    </div>
  );
}

export default TailwindDashTable;
