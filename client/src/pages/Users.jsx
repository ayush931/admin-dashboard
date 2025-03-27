import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import SearchBox from "../components/SearchBox";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const columns = [
  { id: "userImg", label: "User Image", minWidth: 50 },
  { id: "userName", label: "User Name", minWidth: 80 },
  { id: "userEmail", label: "Email", minWidth: 100 },
  { id: "userPhone", label: "Phone", minWidth: 70 },
  { id: "createdAt", label: "Created At", minWidth: 70 },
];

function createData(userImg, userName, userEmail, userPhone, createdAt) {
  return { userImg, userName, userEmail, userPhone, createdAt };
}

const rows = [
  createData(
    <div className="flex items-center gap-4 w-[70px]">
      <div className="img rounded-md h-[65px] w-[65px] overflow-hidden group">
        <Link to={"/product/463737"}>
          <img
            src="https://mui.com/static/images/avatar/1.jpg"
            alt=""
            className="w-fit group-hover:scale-105 transition-all"
          />
        </Link>
      </div>
    </div>,
    <td className="px-6 py-2">Aman Kumar Singh</td>,
    <div className="px-6 py-2 flex items-center gap-2 justify-start">
      <MdOutlineEmail />
      amansingh9315983@gmail.com
    </div>,
    <div className="flex gap-2 items-center justify-start">
      <MdOutlineLocalPhone />
      707047634
    </div>,
    <div className="flex gap-2 items-center justify-start">
      <SlCalender />
      10-05-25
    </div>
  ),
  
];
function Users() {
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
        <h1 className="font-[700] text-[20px] text-gray-800">Users List</h1>
      </div>
      <div className="card my-4 shadow-md sm:shadow-lg bg-white">
        <div className="flex items-center w-full pl-5 justify-between pr-5 mb-3">
          <div className="col w-[40%]">
            <h4 className="font-[600] text-[18px] mb-2">Users List</h4>
          </div>
          <div className="w-[40%] ml-auto flex items-center justify-end">
            <SearchBox />
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
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
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
    </>
  );
}

export default Users;
