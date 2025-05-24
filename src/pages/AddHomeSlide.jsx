import { MdOutlineCloudUpload } from "react-icons/md";
import UploadBox from "../components/UploadBox";
import { IoIosClose } from "react-icons/io";
import LazyLoad from "react-lazy-load";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { deleteImage, postData } from "../utils/api";

function AddHomeSlide() {
  const [formFields, setFormFields] = useState({
    images: [],
  });

  const [previews, setPreviews] = useState([]);
  const context = useContext(MyContext);

  const setPreviewsFunction = (previewsArr) => {
    const imgArr = previews;
    for (let i = 0; i < previewsArr.length; i++) {
      imgArr.push(previewsArr[i]);
    }

    setPreviews([]);
    setTimeout(() => {
      setPreviews(imgArr);
      formFields.images = imgArr;
    }, 10);
  };



  const removeImage = (image, index) => {
    var imageArr = [];
    imageArr = previews;

    deleteImage(`/api/homeSlide/deleteSlide?img=${image}`).then((res) => {
      imageArr.splice(index, 1);
      setPreviews([]);
      setTimeout(() => {
        setPreviews(imageArr);
        formFields.images = imageArr;
      }, 100);
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);

    if (previews?.length === 0) {
      context.openAlertBox("error", "Please select category image");
      return false;
    }

    postData("/api/homeSlide/addSlider", formFields).then((res) => {
      console.log(res);
      context.setLoading(false);
      context.openAlertBox("success", res?.message);
      // context.setIsOpenFullSCreenPanel({
      //   open: false,
      //   model: "Add New Category"
      // })
    });
  }

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8" onSubmit={handleSubmit}>
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
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
              url="/api/homeSlide/uploadImages"
              setPreviews={setPreviewsFunction}
              name="images"
            />
          </div>
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

export default AddHomeSlide;
