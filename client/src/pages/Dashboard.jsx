import { Button } from "@mui/material";
import DashboardBoxes from "../components/DashboardBoxes";
import { HiPlusSm } from "react-icons/hi";

function Dashboard() {
  return (
    <>
      <div className="w-full py-2 px-5 p-5 border border-black flex items-center gap-8 mb-5 justify-between rounded-md bg-white">
        <div className="info">
          <h1 className="flex items-center text-[35px] font-bold leading-10 gap-20 mb-3">
            Good morning, <br /> Cameron
            <img
              src="https://www.svgrepo.com/show/433961/waving-hand.svg"
              alt=""
              className="h-[60px] w-[60px]"
            />
          </h1>
          <p>Here's What happening on your store today. See the statistics at once.</p>
          <br />
          <Button className="btn-green !capitalize !gap-1 flex items-center justify-center"><HiPlusSm className="text-[20px]" />Add product</Button>
        </div>
        <img src="/pexels-suzyhazelwood-2536965.jpg" alt="" className="w-[250px]" />
      </div>
      <DashboardBoxes />
    </>
  );
}

export default Dashboard;
