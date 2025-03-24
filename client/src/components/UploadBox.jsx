import { IoImagesOutline } from "react-icons/io5";

function UploadBox(props) {
  return (
    <div className="uploadBox p-3 rounded-md overflow-hidden border-2 border-dashed border-black h-[150px] w-[100%] mb-2 bg-gray-100 cursor-pointer hover:bg-gray-200 mt-3 flex items-center justify-center flex-col relative">
        <IoImagesOutline className="text-[30px] opacity-50 pointer-events-none" />
        <h4 className="text-[14px]">Image upload</h4>
      <input
        type="file"
        multiple={props.multiple !== undefined ? props.multiple : false}
        className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
      />
    </div>
  );
}

export default UploadBox;
