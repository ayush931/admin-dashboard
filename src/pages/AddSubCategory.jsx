import { MdOutlineCloudUpload } from "react-icons/md";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function AddSubCategory() {
  const [productCategory, setProductCategory] = useState("");
  const handleChangeCategory = (event) => {
    setProductCategory(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8 ">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
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
              <h3 className="text-[14px] font-[500] mb-3 text-black">Sub Category Name</h3>
              <input type="text" className="w-full h-[40px] border border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm" />
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

export default AddSubCategory;
