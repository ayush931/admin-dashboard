import UploadBox from "../components/UploadBox";
import { IoIosClose } from "react-icons/io";
import LazyLoad from "react-lazy-load";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { deleteImage, postData } from "../utils/api";
import { MyContext } from "../App";
import LoadingCircle from "../components/LoadingCircle";

function AddCategory() {
  const context = useContext(MyContext);
  const [formFields, setFormFields] = useState({
    name: "",
    images: [],
  });

  const [previews, setPreviews] = useState([]);

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  function removeImage(image, index) {
    let imagesArr = [];
    imagesArr = previews;
    deleteImage(`/api/category/deleteImage?img=${image}`).then((res) => {
      console.log(res);
      imagesArr.splice(index, 1);
      setPreviews([])
      setTimeout(() => {
        setPreviews(imagesArr)
        formFields.images = imagesArr
      }, 100)
      context.openAlertBox(
        "success",
        res?.message || "Image deleted from cloudinary"
      );
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true)

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter category name")
      context.setLoading(false)
      return false
    }

    if (previews?.length === 0) {
      context.openAlertBox("error", "Please select category image")
      return false;
    }

    postData("/api/category/create", formFields).then((res) => {
      console.log(res)
      context.setLoading(false)
      context.openAlertBox("success", res?.message)
      // context.setIsOpenFullSCreenPanel({
      //   open: false,
      //   model: "Add New Category"
      // })
    })
  }

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8" onSubmit={handleSubmit}>
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col w-[50%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">
                Category Name
              </h3>
              <input
                type="text"
                name="name"
                value={formFields.name}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
                onChange={onChangeInput}
              />
            </div>
          </div>
          <br />
          <h3 className="text-[18px] font-[500] mb-1 text-black">
            Category Image
          </h3>
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
              url="/api/category/uploadImages"
              setPreviews={setPreviews}
              name="images"
            />
          </div>
        </div>
        <hr />
        <div className="p-5 flex items-center justify-center">
          <Button className="btn-green btn-lg gap-3" type="submit">
            {
              context.loading === true ? <LoadingCircle /> : "Create category"
            }
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddCategory;
