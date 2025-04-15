import { useContext, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { uploadImages } from "../utils/api";
import { MyContext } from "../App";
import LoadingCircle from "./LoadingCircle";

function UploadBox(props) {
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const context = useContext(MyContext);

  let selectedImage = [];

  const formdata = new FormData();

  async function onChangeFile(e, apiEndPoint) {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);
      console.log(files);
      for (let i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImage.push(file);
          formdata.append("images", file);
        } else {
          context.openAlertBox("error", "Upload correct format file");
          setUploading(false);
          return false;
        }
      }
      uploadImages(apiEndPoint, formdata).then((res) => {
        console.log(res);
        setUploading(false);
        props.setPreviews(res?.data?.images);
        // props.setPreviewsFun(res?.data?.images)
      });
    } catch (error) {
      console.log(error);
    }
  }

  console.log(formdata);

  return (
    <div className="uploadBox p-3 rounded-md overflow-hidden border-2 border-dashed border-black h-[150px] w-[100%] mb-2 bg-gray-100 cursor-pointer hover:bg-gray-200 mt-3 flex items-center justify-center flex-col relative">
      {uploading === true ? (
        <LoadingCircle />
      ) : (
        <>
          <IoImagesOutline className="text-[30px] opacity-50 pointer-events-none" />
          <h4 className="text-[14px]">Image upload</h4>
          <input
            type="file"
            accept="image/*"
            multiple={props.multiple !== undefined ? props.multiple : false}
            className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
            onChange={(e) => {
              onChangeFile(e, props?.url);
            }}
            name="images"
          />
        </>
      )}
    </div>
  );
}

export default UploadBox;
