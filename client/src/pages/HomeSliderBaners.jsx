import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import Tooltip from "@mui/material/Tooltip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useContext, useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { PiExportBold } from "react-icons/pi";
import MyContext from "../context/MyContext";

const columns = [
  { id: "image", label: "Image", minWidth: 80 },
  { id: "action", label: "Actions", minWidth: 60 },
];

function createData(image, action) {
  return { image, action };
}

const rows = [
  createData(
    <div className="flex items-center justify-between mt-3">
      <div className="flex items-center gap-4 w-[300px] mt-2">
        <div className="img w-[200px] h-[100px] rounded-md overflow-hidden group">
          <Link to={"/product/463737"}>
            <img
              src="https://www.jiomart.com/images/product/original/443003268_seagreen/floral-butta-straight-kurta-model2-443003268_seagreen-2-202303291406.jpg"
              alt=""
              className="w-full h-full object-contain group-hover:scale-105 transition-all"
            />
          </Link>
        </div>
      </div>
      <div className="flex">
        <Tooltip title="Edit" placement="bottom">
          <Button className="!w-[35px] !h-[35px] !border !border-black !rounded-full !min-w-[35px]">
            <FiEdit className="text-black text-[18px]" />
          </Button>
        </Tooltip>
        <Tooltip title="View" placement="bottom">
          <Button className="!w-[35px] !h-[35px] !border !border-black !rounded-full !min-w-[35px]">
            <FaRegEye className="text-black text-[18px]" />
          </Button>
        </Tooltip>
        <Tooltip title="Delete" placement="bottom">
          <Button className="!w-[35px] !h-[35px] !border !border-black !rounded-full !min-w-[35px]">
            <FiTrash2 className="text-black text-[18px]" />
          </Button>
        </Tooltip>
      </div>
    </div>
  ),
];

function HomeSliderBaners() {
  const context = useContext(MyContext);
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
    <>
      <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
        <h1 className="font-[700] text-[20px] text-gray-800">
          Home Slider Banners
        </h1>
        <div className="w-[25%] ml-auto flex items-center gap-3">
          <Button className="btn-green btn-sm flex items-center justify-center gap-2">
            <PiExportBold className="text-[18px] mb-0.5" />
            Export
          </Button>
          <Button
            className="!bg-blue-700 btn-sm !text-white !capitalize flex items-center justify-center"
            onClick={() =>
              context.setIsOpenFullSCreenPanel({
                open: true,
                model: "Add Home Slide",
              })
            }
          >
            <HiPlusSm className="text-[20px]" />
            Add Home Slide
          </Button>
        </div>
      </div>
      <div className="card my-4 shadow-md sm:shadow-lg bg-white">
        <div className="flex items-center w-full pl-5 justify-between pr-5 mb-3"></div>
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            width={column.minWidth}
                          >
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
    </>
  );
}

export default HomeSliderBaners;
