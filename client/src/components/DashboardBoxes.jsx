import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FiGift } from "react-icons/fi";
import { SiSoundcharts } from "react-icons/si";
import { PiChartPieSliceDuotone } from "react-icons/pi";
import { BsBank } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";

function DashboardBoxes() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div className="box p-5  bg-white cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[#000] flex items-center gap-4">
            <FiGift className="text-[40px] text-[#3872fa]" />
            <div className="info w-[70%]">
              <h3>New Orders</h3>
              <p>1500</p>
            </div>
            <SiSoundcharts className="text-[50px] text-[#3872fa]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5  bg-white cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[#000] flex items-center gap-4">
            <PiChartPieSliceDuotone className="text-[40px] text-[#10b981]" />
            <div className="info w-[70%]">
              <h3>Sales</h3>
              <p>1500</p>
            </div>
            <SiSoundcharts className="text-[50px] text-[#10b981]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5  bg-white cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[#000] flex items-center gap-4">
            <BsBank className="text-[40px] text-[#7928ca]" />
            <div className="info w-[70%]">
              <h3>Revenue</h3>
              <p>1500</p>
            </div>
            <SiSoundcharts className="text-[50px] text-[#7928ca]" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box p-5  bg-white cursor-pointer hover:bg-[#f1f1f1] rounded-md border border-[#000] flex items-center gap-4">
            <RiProductHuntLine className="text-[40px] text-[#3872fa]" />
            <div className="info w-[70%]">
              <h3>Total Products</h3>
              <p>1500</p>
            </div>
            <SiSoundcharts className="text-[30px] text-[#3872fa]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default DashboardBoxes;
