import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import UploadBox from "../components/UploadBox";
import LazyLoad from "react-lazy-load";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import { MdOutlineCloudUpload } from "react-icons/md";

function AddProducts() {
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productIsFeatured, setProductIsFeatured] = useState("");
  const [productRam, setProductRam] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");
  const [value, setValue] = useState(0);

  const handleChangeCategory = (event) => {
    setProductCategory(event.target.value);
  };

  const handleChangeSubCategory = (event) => {
    setProductSubCategory(event.target.value);
  };

  const handleChangeIsFeatured = (event) => {
    setProductIsFeatured(event.target.value);
  };

  const handleChangeProductRam = (event) => {
    setProductRam(event.target.value);
  };

  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section>
      <form className="form py-3 p-8">
        <div className="scroll max-h-[75vh] overflow-y-scroll p-5">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="font-[500] mb-1">Product Name</h3>
              <input
                type="text"
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="font-[500] mb-1">Product Description</h3>
              <textarea
                type="text"
                className="w-full h-[100px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h3 className="font-[500] mb-1">Category</h3>
              <div className="mt-2">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategoryDropDown"
                    className="w-full"
                    size="small"
                    value={productCategory}
                    onChange={handleChangeCategory}
                  >
                    <MenuItem value={10}>Cloths</MenuItem>
                    <MenuItem value={20}>Medicines</MenuItem>
                    <MenuItem value={30}>Grocery</MenuItem>
                    <MenuItem value={""}>None</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Sub category</h3>
              <div className="mt-2">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategoryDropDown"
                    className="w-full"
                    size="small"
                    value={productSubCategory}
                    onChange={handleChangeSubCategory}
                  >
                    <MenuItem value={10}>Cloths</MenuItem>
                    <MenuItem value={20}>Medicines</MenuItem>
                    <MenuItem value={30}>Grocery</MenuItem>
                    <MenuItem value={""}>None</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product new price</h3>
              <input
                type="number"
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product old price</h3>
              <input
                type="number"
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h3 className="font-[500] mb-1">Is Featured ?</h3>
              <div className="mt-2">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategoryDropDown"
                    className="w-full"
                    size="small"
                    value={productIsFeatured}
                    onChange={handleChangeIsFeatured}
                  >
                    <MenuItem value={10}>True</MenuItem>
                    <MenuItem value={20}>False</MenuItem>
                    <MenuItem value={30}>Grocery</MenuItem>
                    <MenuItem value={""}>None</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product stock</h3>
              <input
                type="number"
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product Brand</h3>
              <input
                type="text"
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product Discount</h3>
              <input
                type="number"
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h3 className="font-[500] mb-1">Product Ram</h3>
              <div className="mt-2">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategoryDropDown"
                    className="w-full"
                    size="small"
                    value={productRam}
                    onChange={handleChangeProductRam}
                  >
                    <MenuItem value={10}>2 GB</MenuItem>
                    <MenuItem value={20}>2 GB</MenuItem>
                    <MenuItem value={30}>2 GB</MenuItem>
                    <MenuItem value={""}>None</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product weight</h3>
              <div className="mt-2">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategoryDropDown"
                    className="w-full"
                    size="small"
                    value={productWeight}
                    onChange={handleChangeProductWeight}
                  >
                    <MenuItem value={10}>1 kg</MenuItem>
                    <MenuItem value={20}>2 kg</MenuItem>
                    <MenuItem value={30}>3 kg</MenuItem>
                    <MenuItem value={""}>None</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product size</h3>
              <div className="mt-2">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategoryDropDown"
                    className="w-full"
                    size="small"
                    value={productSize}
                    onChange={handleChangeProductSize}
                  >
                    <MenuItem value={10}>Small</MenuItem>
                    <MenuItem value={20}>Medium</MenuItem>
                    <MenuItem value={30}>Large</MenuItem>
                    <MenuItem value={""}>None</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product old price</h3>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                precision={0.1}
                className="w-full h-[30px] focus:outline-none rounded-md p-2"
                defaultValue={2.2}
              />
            </div>
          </div>
          <div className="col w-full p-5 px-0">
            <h3 className="text-[20px] font-[700] mb-3">Media and Images</h3>
            <div className="grid grid-cols-7 gap-2">
              <div className="uploadBoxWrapper relative">
                <span className="absolute w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700 top-0 -right-1 flex items-center justify-center z-50 cursor-pointer">
                  <IoIosClose className="text-white text-[17px]" />
                </span>
                <div className="uploadBox p-0 rounded-md overflow-hidden border-2 border-dashed border-black h-[150px] w-[100%] mb-2 bg-gray-100 cursor-pointer hover:bg-gray-200 mt-3 flex items-center justify-center flex-col relative">
                  <LazyLoad className="h-full w-full object-cover">
                    <img
                      src="https://www.jiomart.com/images/product/original/494494543/samsung-galaxy-f06-5g-128-gb-4-gb-ram-bahama-blue-mobile-phone-digital-o494494543-p611153288-0-202503131909.jpeg?im=Resize=(150,150)"
                      className="h-full w-full"
                    />
                  </LazyLoad>
                </div>
              </div>
              <UploadBox />
            </div>
          </div>
          <br />
        </div>
        <hr />
        <div className="p-5 flex items-center justify-center">
          <Button className="btn-green btn-lg gap-3" type="submit">
            <MdOutlineCloudUpload className="text-[25px]" /> Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddProducts;
