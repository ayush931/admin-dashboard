import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
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
import { useContext, useEffect, useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { HiPlusSm } from "react-icons/hi";
import { PiExportBold } from "react-icons/pi";
import SearchBox from "../components/SearchBox";
import { MyContext } from "../App";
import { deleteData, fetchDataFromApi } from "../utils/api";
import LazyLoad from "react-lazy-load";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "id", label: "ID", minWidth: 80 },
  { id: "product", label: "Product", minWidth: 170 },
  { id: "category", label: "Category", minWidth: 100 },
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

function Products() {
  const context = useContext(MyContext);
  const [categoryFilterValue, setCategoryFilterValue] = useState("");
  const [productData, setProductData] = useState([]);

  const handleChangeCategoryFilter = (event) => {
    setCategoryFilterValue(event.target.value);
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchDataFromApi("/api/product/getAllProducts").then((res) => {
      console.log(res);
      if (res?.error === false) {
        setProductData(res?.products);
      }
    });
  }, []);

  function deleteProduct(id) {
    deleteData(`/api/product/deleteProduct/${id}`).then((res) => {
      if (res?.error === false) {
        context.openAlertBox("success", "Product deleted");
      }
    });
  }

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
        <h1 className="font-[700] text-[20px] text-gray-800">Products</h1>
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
                model: "Add Products",
              })
            }
          >
            <HiPlusSm className="text-[20px]" />
            Add product
          </Button>
        </div>
      </div>
      <div className="card my-4 shadow-md sm:shadow-lg bg-white">
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
              <MenuItem value={"Men"}>Men</MenuItem>
              <MenuItem value={"Women"}>Women</MenuItem>
              <MenuItem value={"Kids"}>Kids</MenuItem>
            </Select>
          </div>
          <div className="w-[25%] ml-auto flex items-center justify-end">
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
              {productData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((product, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell>
                        <Checkbox {...label} size="small" />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-4 w-[350px]">
                          <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                            <Link to={`/product/${product?._id}`}>
                              <LazyLoad>
                                <img
                                  src={product.images}
                                  alt="images"
                                  className="w-full group-hover:scale-105 transition-all object-cover"
                                />
                              </LazyLoad>
                            </Link>
                          </div>
                          <div className="info w-[75%]">
                            <h3 className="font-[600] text-[14px] leading-4 hover:text-primary">
                              <Link to={`/product/${product?._id}`}>
                                {product?.name}
                              </Link>
                            </h3>
                            <span className="text-[12px]">
                              {product?.brand}
                            </span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <td className="px-6 py-2">{product?.categoryName}</td>
                      </TableCell>
                      <TableCell>
                        <td className="px-6 py-2">{product?.subCategory}</td>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1 w-[60px]">
                          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
                            &#x20b9; {product?.oldPrice}
                          </span>
                          <span className="price text-primary text-[15px] font-[600]">
                            &#x20b9; {product?.price}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <td className="px-6 py-2">
                          <p className="text-[14px]">
                            <span className="font-[600] mr-1">
                              {product?.sale}
                            </span>
                            sale
                          </p>
                        </td>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Tooltip title="Edit" placement="bottom">
                            <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]" onClick={() => context.setIsOpenFullSCreenPanel({
                              open: true,
                              model: "Edit Product",
                              id: product?._id
                            })}>
                              <FiEdit className="text-black text-[18px]" />
                            </Button>
                          </Tooltip>
                          <Tooltip title="View" placement="bottom">
                            <Button className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]">
                              <FaRegEye className="text-black text-[18px]" />
                            </Button>
                          </Tooltip>
                          <Tooltip title="Delete" placement="bottom">
                            <Button
                              className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]"
                              onClick={() => deleteProduct(product?._id)}
                            >
                              <FiTrash2 className="text-black text-[18px]" />
                            </Button>
                          </Tooltip>
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
          count={productData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
}

export default Products;
