import { MdOutlineCloudUpload } from "react-icons/md";
import UploadBox from "../components/UploadBox";
import { IoIosClose } from "react-icons/io";
import LazyLoad from "react-lazy-load";
import { Button } from "@mui/material";

function AddHomeSlide() {
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8">
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
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
