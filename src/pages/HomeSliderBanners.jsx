import { Button, Checkbox } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useContext, useEffect, useState } from "react";
import { HiPlusSm } from "react-icons/hi";
import { PiExportBold } from "react-icons/pi";
import { MyContext } from "../App";
import { deleteData, fetchDataFromApi } from "../utils/api";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "image", label: "Image", minWidth: 80 },
  { id: "action", label: "Action", minWidth: 170 },
];

function HomeSliderBanners() {
  const context = useContext(MyContext);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [slidesData, setSlideData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function deleteSlide(id) {
    deleteData(`/api/homeSlide/deleteSlide/${id}`).then((res) => {
      console.log(res);
      if (res.error === false) {
        context.openAlertBox("success", "Slide deleted");
      }
    });
  }

  useEffect(() => {
    fetchDataFromApi("/api/homeSlide/getAll").then((res) => {
      console.log(res);
      setSlideData(res?.data);
    });
  }, [context.isOpenFullScreenPanel]);

  return (
    <>
      <div className="h-screen">
        <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
          <h1 className="font-[700] text-[20px] text-gray-800">
            Home Slider Banner
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
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 80 }}>
                    <Checkbox
                      {...label}
                      size="small"
                      style={{ color: "white" }}
                      checked={
                        slidesData?.length !== 0
                          ? slidesData.every((item) => item.checked)
                          : false
                      }
                    />
                  </TableCell>
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
                {slidesData?.length !== 0 &&
                  slidesData?.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell width={50}>
                          <Checkbox {...label} size="small" />
                        </TableCell>
                        <TableCell width={300}>
                          <div className="flex items-center gap-4 w-[300px]">
                            <div className="img w-full rounded-md overflow-hidden group">
                              <img
                                src={item.images}
                                className="w-full group-hover:scale-105 transition-all"
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell width={100}>
                          <div className="flex items-center gap-1">
                            <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]">
                              <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                            </Button>
                            <Button
                              className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]"
                              onClick={() => deleteSlide(item?._id)}
                            >
                              <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={10}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </div>
    </>
  );
}

export default HomeSliderBanners;
