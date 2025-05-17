import { useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useContext, useState } from "react";
import Rating from "@mui/material/Rating";
import UploadBox from "../components/UploadBox";
import LazyLoad from "react-lazy-load";
import { IoIosClose } from "react-icons/io";
import { Button } from "@mui/material";
import { MdOutlineCloudUpload } from "react-icons/md";
import { MyContext } from "../App";
import { deleteImage, fetchDataFromApi, postData } from "../utils/api";

function AddProducts() {
  const [productCategory, setProductCategory] = useState("");
  const [productSubCategory, setProductSubCategory] = useState("");
  const [productThirdLevelCategory, setProductThirdLevelCategory] =
    useState("");
  const [productIsFeatured, setProductIsFeatured] = useState("");
  const [productRam, setProductRam] = useState([]);
  const [productRamData, setProductRamData] = useState([]);
  const [productWeight, setProductWeight] = useState([]);
  const [productWeightData, setProductWeightData] = useState([]);
  const [productSize, setProductSize] = useState([]);
  const [productSizeData, setProductSizeData] = useState([]);
  const [value, setValue] = useState(0);
  const [previews, setPreviews] = useState([]);

  const context = useContext(MyContext);

  const [formFields, setFormFields] = useState({
    name: "",
    description: "",
    images: [],
    brand: "",
    price: "",
    oldPrice: "",
    category: "",
    categoryName: "",
    categoryId: "",
    subCategory: "",
    subCategoryId: "",
    thirdSubCategory: "",
    thirdSubCategoryId: "",
    countInStock: "",
    rating: "",
    isFeatured: false,
    discount: "",
    productRam: [],
    size: [],
    productWeight: [],
  });

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    let mounted = true;
    fetchDataFromApi("/api/productRams/getRams").then((res) => {
      if (mounted && res?.error === false) {
        setProductRamData(res?.data);
      }
    });
    fetchDataFromApi("/api/productWeight/getWeights").then((res) => {
      if (mounted && res?.error === false) {
        setProductWeightData(res?.data);
      }
    });
    fetchDataFromApi("/api/productSize/getSizes").then((res) => {
      if (mounted && res?.error === false) {
        setProductSizeData(res?.data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleChangeCategory = (event) => {
    setProductCategory(event.target.value);
    formFields.categoryId = event.target.value;
    formFields.category = event.target.value;
  };

  const handleChangeSubCategory = (event) => {
    setProductSubCategory(event.target.value);
    formFields.subCategoryId = event.target.value;
  };

  const handleChangeThirdLevelCategory = (event) => {
    setProductThirdLevelCategory(event.target.value);
    formFields.thirdSubCategoryId = event.target.value;
  };

  const handleChangeIsFeatured = (event) => {
    setProductIsFeatured(event.target.value);
    formFields.isFeatured = event.target.value;
  };

  const handleChangeProductRam = (event) => {
    const {
      target: { value },
    } = event;
    setProductRam(typeof value === "string" ? value.split(",") : value);

    formFields.productRam = value;
  };

  const handleChangeProductWeight = (event) => {
    const {
      target: { value },
    } = event;
    setProductWeight(typeof value === "string" ? value.split(",") : value);

    formFields.productWeight = value;
  };

  const handleChangeProductSize = (event) => {
    const {
      target: { value },
    } = event;
    setProductSize(typeof value === "string" ? value.split(",") : value);

    setFormFields((prevFields) => ({
      ...prevFields,
      size: value,
    }));
  };

  function selectCategoryByName(categoryName) {
    formFields.categoryName = categoryName;
  }

  function selectSubCategoryByName(subCategoryName) {
    formFields.subCategory = subCategoryName;
  }

  function selectThirdLevelCategoryByName(thirdLevelCategoryName) {
    formFields.thirdSubCategory = thirdLevelCategoryName;
  }

  function removeImage(image, index) {
    let imagesArr = [];
    imagesArr = previews;
    deleteImage(`/api/product/deleteImage?img=${image}`).then((res) => {
      console.log(res);
      imagesArr.splice(index, 1);
      setPreviews([]);
      setTimeout(() => {
        setPreviews(imagesArr);
        formFields.images = imagesArr;
      }, 100);
      context.openAlertBox(
        "success",
        res?.message || "Image deleted from cloudinary"
      );
    });
  }
  function handleChange(event) {
    event.preventDefault();
    context.setLoading(true);
    console.log(formFields);
    postData("/api/product/create", formFields).then((res) => {
      console.log(res);
      if (res?.error === false) {
        context.setLoading(false);
        context.openAlertBox("success", res?.message);
        fetchDataFromApi("/api/category").then((res) => {
          context.setCategoryData(res?.data);
        });
      } else {
        context.setLoading(false);
        context.openAlertBox("error", res?.message);
      }
    });
  }

  return (
    <section>
      <form className="form py-3 p-8" onSubmit={handleChange}>
        <div className="scroll max-h-[75vh] overflow-y-scroll p-5">
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="font-[500] mb-1">Product Name</h3>
              <input
                type="text"
                name="name"
                value={formFields.name}
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 mb-3">
            <div className="col">
              <h3 className="font-[500] mb-1">Product Description</h3>
              <textarea
                type="text"
                name="description"
                value={formFields.description}
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
                className="w-full h-[100px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h3 className="font-[500] mb-1">Product Category</h3>
              {context?.categoryData?.length !== 0 && (
                <div className="mt-2">
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="productCategoryDropDown"
                      className="w-full"
                      size="small"
                      value={productCategory}
                      onChange={handleChangeCategory}
                      label={"category"}
                    >
                      {context?.categoryData?.map((category, index) => (
                        <MenuItem
                          onClick={() => selectCategoryByName(category?.name)}
                          key={index}
                          value={category?._id}
                        >
                          {category?.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              )}
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Sub category</h3>
              {context?.categoryData?.length !== 0 && (
                <div className="mt-2">
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="productSubCategoryDropDown"
                      className="w-full"
                      size="small"
                      value={productSubCategory}
                      onChange={handleChangeSubCategory}
                      label={"sub category"}
                    >
                      {context?.categoryData?.map(
                        (category) =>
                          category.children?.length !== 0 &&
                          category?.children?.map((subCategory, index_) => (
                            <MenuItem
                              onClick={() =>
                                selectSubCategoryByName(subCategory?.name)
                              }
                              key={index_}
                              value={subCategory?._id}
                            >
                              {subCategory?.name}
                            </MenuItem>
                          ))
                      )}
                    </Select>
                  </FormControl>
                </div>
              )}
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Third level sub category</h3>
              {context?.categoryData?.length !== 0 && (
                <div className="mt-2">
                  <FormControl fullWidth>
                    <Select
                      labelId="demo-simple-select-label"
                      id="productSubCategoryDropDown"
                      className="w-full"
                      size="small"
                      value={productThirdLevelCategory}
                      onChange={handleChangeThirdLevelCategory}
                      label={"Third level category"}
                    >
                      {context?.categoryData?.map(
                        (category) =>
                          category.children?.length !== 0 &&
                          category?.children?.map(
                            (subCategory) =>
                              subCategory?.children?.length !== 0 &&
                              subCategory?.children?.map(
                                (thirdLevelCategory, index_) => (
                                  <MenuItem
                                    key={index_}
                                    value={thirdLevelCategory?._id}
                                    onClick={() =>
                                      selectThirdLevelCategoryByName(
                                        thirdLevelCategory?.name
                                      )
                                    }
                                  >
                                    {thirdLevelCategory?.name}
                                  </MenuItem>
                                )
                              )
                          )
                      )}
                    </Select>
                  </FormControl>
                </div>
              )}
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product new price</h3>
              <input
                type="number"
                value={formFields.price}
                name="price"
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mb-3 gap-5">
            <div className="col">
              <h3 className="font-[500] mb-1">Product Ram</h3>
              <div className="mt-2">
                {productRamData?.length !== 0 && (
                  <FormControl fullWidth>
                    <Select
                      multiple
                      labelId="demo-simple-select-label"
                      id="productCategoryDropDown"
                      className="w-full"
                      size="small"
                      value={productRam}
                      onChange={handleChangeProductRam}
                    >
                      {productRamData?.map((item, index) => {
                        return (
                          <MenuItem value={item?.name} key={index}>
                            {item?.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product weight</h3>
              <div className="mt-2">
                {productWeightData?.length !== 0 && (
                  <FormControl fullWidth>
                    <Select
                      multiple
                      labelId="demo-simple-select-label"
                      id="productCategoryDropDown"
                      className="w-full"
                      size="small"
                      value={productWeight}
                      onChange={handleChangeProductWeight}
                    >
                      {productWeightData?.map((item, index) => {
                        return (
                          <MenuItem value={item?.name} key={index}>
                            {item?.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product size</h3>
              <div className="mt-2">
                {productSizeData?.length !== 0 && (
                  <FormControl fullWidth>
                    <Select
                      multiple
                      labelId="demo-simple-select-label"
                      id="productCategoryDropDown"
                      className="w-full"
                      size="small"
                      value={productSize}
                      onChange={handleChangeProductSize}
                    >
                      {productSizeData?.map((item, index) => {
                        return (
                          <MenuItem value={item?.name} key={index}>
                            {item?.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                )}
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product old price</h3>
              <input
                type="number"
                name="oldPrice"
                value={formFields.oldPrice}
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
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
                    <MenuItem value={true}>True</MenuItem>
                    <MenuItem value={false}>False</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product stock</h3>
              <input
                type="number"
                value={formFields.countInStock}
                name="countInStock"
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product Brand</h3>
              <input
                type="text"
                value={formFields.brand}
                name="brand"
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
            <div className="col">
              <h3 className="font-[500] mb-1">Product Discount</h3>
              <input
                type="number"
                value={formFields.discount}
                name="discount"
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3"
              />
            </div>
          </div>
          <div className="col">
            <h3 className="font-[500] mb-1">Rating</h3>
            <Rating
              name="simple-controlled"
              value={value}
              precision={0.1}
              onChange={(event, newValue) => {
                setValue(newValue);
                setFormFields((prevFields) => ({
                  ...prevFields,
                  rating: newValue,
                }));
              }}
              className="w-full h-[30px] focus:outline-none rounded-md p-2"
              defaultValue={2.2}
            />
          </div>
          <div className="col w-full p-5 px-0">
            <h3 className="text-[20px] font-[700] mb-3">Media and Images</h3>
            <div className="grid grid-cols-7 gap-2">
              {Array.isArray(previews) &&
                previews.length > 0 &&
                previews.map((image, index) => {
                  return (
                    <div className="uploadBoxWrapper relative" key={index}>
                      <span
                        className="absolute w-[25px] h-[25px] rounded-full overflow-hidden bg-red-700 top-0 -right-1 flex items-center justify-center z-50 cursor-pointer"
                        onClick={() => removeImage(image, index)}
                      >
                        <IoIosClose className="text-white text-[17px]" />
                      </span>
                      <div className="uploadBox p-0 rounded-md overflow-hidden border-2 border-dashed border-black h-[150px] w-[100%] mb-2 bg-gray-100 cursor-pointer hover:bg-gray-200 mt-3 flex items-center justify-center flex-col relative">
                        <LazyLoad className="h-full w-full object-cover">
                          <img src={image} className="h-full w-full" />
                        </LazyLoad>
                      </div>
                    </div>
                  );
                })}
              <UploadBox
                multiple={true}
                url="/api/product/uploadImages"
                setPreviews={setPreviews}
                name="images"
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

export default AddProducts;
