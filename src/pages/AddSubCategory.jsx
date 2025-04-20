import { MdOutlineCloudUpload } from "react-icons/md";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import { fetchDataFromApi, postData } from "../utils/api";

function AddSubCategory() {
  const context = useContext(MyContext);
  const [productCategory, setProductCategory] = useState("");
  const [loadingThirdLevel, setLoadingThirdLevel] = useState(false);
  const [productCategoryThirdLevel, setProductCategoryThirdLevel] =
    useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    parentCategoryName: null,
    parentId: null,
  });

  const [formFieldsThirdLevel, setFormFieldsThirdLevel] = useState({
    name: "",
    parentCategoryName: null,
    parentId: null,
  });

  function handleChangeCategory(event) {
    setProductCategory(event.target.value);
    formFields.parentId = event.target.value;
  }

  function handleChangeCategoryThirdLevel(event) {
    setProductCategoryThirdLevel(event.target.value);
    formFieldsThirdLevel.parentId = event.target.value;
  }

  function onChangeInput(e) {
    const { name, value } = e.target;
    const categoryId = productCategory;
    setProductCategory(categoryId);
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  function onChangeInputThirdLevel(e) {
    const { name, value } = e.target;
    const thirdLevelCategoryId = productCategoryThirdLevel;
    setProductCategoryThirdLevel(thirdLevelCategoryId);
    setFormFieldsThirdLevel(() => {
      return {
        ...formFieldsThirdLevel,
        [name]: value,
      };
    });
  }

  function selectedCategory(categoryName) {
    formFields.parentCategoryName = categoryName;
  }

  function selectedCategoryThirdLevel(categoryName) {
    formFieldsThirdLevel.parentCategoryName = categoryName;
  }

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please provide category name");
      context.setLoading(false);
      return false;
    }
    if (productCategory === "") {
      context.openAlertBox("error", "Please provide parent category name");
      context.setLoading(false);
    }

    postData("/api/category/create", formFields).then((res) => {
      console.log(res);
      setTimeout(() => {
        context.setLoading(false);
      });
      context.openAlertBox("success", res?.message);
      fetchDataFromApi("/api/category").then((res) => {
        context.setCategoryData(res?.data);
      });
    });
  }

  function handleSubmitThirdLevel(e) {
    e.preventDefault();
    setLoadingThirdLevel(true);

    if (formFieldsThirdLevel.name === "") {
      context.openAlertBox("error", "Please provide category name");
      setLoadingThirdLevel(false);
      return false;
    }
    if (productCategoryThirdLevel === "") {
      context.openAlertBox("error", "Please provide parent category name");
      setLoadingThirdLevel(false);
    }

    postData("/api/category/create", formFieldsThirdLevel).then((res) => {
      console.log(res);
      setTimeout(() => {
        context.setLoading(false);
      });
      context.openAlertBox("success", res?.message);
    });
  }

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8" onSubmit={handleSubmit}>
        <h2 className="text-center mb-8">Add Sub category</h2>
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-2 mb-3 gap-5">
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
                    {context.categoryData.length !== 0 &&
                      context?.categoryData?.map((item, index) => {
                        return (
                          <MenuItem
                            key={index}
                            value={item?._id}
                            onClick={selectedCategory(item?.name)}
                          >
                            {item?.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-3 text-black">
                Sub Category Name
              </h3>
              <input
                type="text"
                name="name"
                onChange={onChangeInput}
                value={formFields.name}
                className="w-full h-[40px] border border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
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
      <form className="form py-3 p-8" onSubmit={handleSubmitThirdLevel}>
        <h2 className="text-center mt-5 mb-8">Add Third level category</h2>
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-2 mb-3 gap-5">
            <div className="col">
              <h3 className="font-[500] mb-1">Category</h3>
              <div className="mt-2">
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="productCategoryDropDown"
                    className="w-full"
                    size="small"
                    value={productCategoryThirdLevel}
                    onChange={handleChangeCategoryThirdLevel}
                  >
                    {context.categoryData.length !== 0 &&
                      context?.categoryData?.map((item, index) => {
                        return (
                          item?.children?.length !== 0 &&
                          item?.children?.map((itemChildren, indexChildren) => {
                            return (
                              <MenuItem
                                key={indexChildren}
                                value={itemChildren?._id}
                                onClick={() =>
                                  selectedCategoryThirdLevel(itemChildren?.name)
                                }
                              >
                                {itemChildren?.name}
                              </MenuItem>
                            );
                          })
                        );
                      })}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="text-[14px] font-[500] mb-3 text-black">
                Third level category
              </h3>
              <input
                type="text"
                name="name"
                onChange={onChangeInputThirdLevel}
                value={formFieldsThirdLevel.name}
                className="w-full h-[40px] border border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
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
