import { Button } from "@mui/material";
import DashboardBoxes from "../components/DashboardBoxes";
import { HiPlusSm } from "react-icons/hi";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Badge from "../components/Badge";
import TailwindDashTable from "../components/TailwindDashTable";
import MaterialUiTable from "../components/MaterialUiTable";

function Dashboard() {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(null);

  function isShowOrderedProduct(index) {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  }
  return (
    <div className="w-[100%]">
      <div className={`w-full py-2 px-5 p-5 border border-black flex items-center gap-8 mb-5 justify-between rounded-md bg-white`}>
        <div className="info">
          <h1 className="flex items-center text-[35px] font-bold leading-10 gap-20 mb-3">
            Good morning, <br /> Ayush
            <img
              src="https://www.svgrepo.com/show/433961/waving-hand.svg"
              alt=""
              className="h-[60px] w-[60px]"
            />
          </h1>
          <p>
            Here's What happening on your store today. See the statistics at
            once.
          </p>
          <br />
          <Button className="btn-green !capitalize !gap-1 flex items-center justify-center">
            <HiPlusSm className="text-[20px]" />
            Add product
          </Button>
        </div>
        <img
          src="/pexels-suzyhazelwood-2536965.jpg"
          alt=""
          className="w-[250px]"
        />
      </div>
      <DashboardBoxes />
      <TailwindDashTable />
      <MaterialUiTable />
      <div className="card my-4 shadow-md sm:shadow-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[20px] font-[600]">Recent Orders</h2>
        </div>
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 bg-gray-50 text-center capitalize">
              <tr>
                <th scope="col" className="px-6 py-3 whitespace-nowrap link">
                  &nbsp;
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Payment ID
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Phone Number
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Address
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Pincode
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Total Amount
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  UserId
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Order Status
                </th>
                <th scope="col" className="px-6 py-3 whitespace-nowrap">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-200 text-center">
                <td className="px-6 py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#e4f0d4]"
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct === 0 ? (
                      <FaAngleUp className="text-[18px] text-primary" />
                    ) : (
                      <FaAngleDown className="text-[18px] text-primary" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Ayush Kumar
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    6j75738hrh478h784474
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    pay_id_6j75738hrh478h784474
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">7777777777</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="block w-[400px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, quidem?
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">800020</td>
                <td className="px-6 py-4 font-[500]">5200</td>
                <td className="px-6 py-4 font-[500]">ayush@gmail.com</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    7349t84ru23rn2r823ru823r9
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <Badge status="pending" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2025-02-09
                </td>
              </tr>
              {isOpenOrderedProduct === 0 && (
                <tr>
                  <td className="bg-white" colSpan={6}>
                    <div className="relative overflow-x-auto myOrderTable">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 bg-gray-50 text-center capitalize">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product ID
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b border-gray-200 text-center">
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <span className="text-primary font-[600]">
                                pid_vv8av79av8asdv8sdv9
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Viscose Rayon Kurta Pant And Dupatta Set
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(75,94)"
                                alt=""
                                className="w-[50px] h-[50px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">7</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                            <td className="px-6 py-4 font-[500]">10000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200 text-center">
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <span className="text-primary font-[600]">
                                pid_vv8av79av8asdv8sdv9
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Viscose Rayon Kurta Pant And Dupatta Set
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(75,94)"
                                alt=""
                                className="w-[50px] h-[50px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">7</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                            <td className="px-6 py-4 font-[500]">10000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
              <tr className="bg-white border-b border-gray-200 text-center">
                <td className="px-6 py-4 font-[500]">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#e4f0d4]"
                    onClick={() => isShowOrderedProduct(1)}
                  >
                    {isOpenOrderedProduct === 1 ? (
                      <FaAngleUp className="text-[18px] text-primary" />
                    ) : (
                      <FaAngleDown className="text-[18px] text-primary" />
                    )}
                  </Button>
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  Ayush Kumar
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    6j75738hrh478h784474
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    pay_id_6j75738hrh478h784474
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">7777777777</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="block w-[400px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, quidem?
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">800020</td>
                <td className="px-6 py-4 font-[500]">5200</td>
                <td className="px-6 py-4 font-[500]">ayush@gmail.com</td>
                <td className="px-6 py-4 font-[500]">
                  <span className="text-primary font-[600]">
                    7349t84ru23rn2r823ru823r9
                  </span>
                </td>
                <td className="px-6 py-4 font-[500]">
                  <Badge status="confirm" />
                </td>
                <td className="px-6 py-4 font-[500] whitespace-nowrap">
                  2025-02-09
                </td>
              </tr>
              {isOpenOrderedProduct === 1 && (
                <tr>
                  <td className="bg-white" colSpan={6}>
                    <div className="relative overflow-x-auto myOrderTable">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 bg-gray-50 text-center capitalize">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product ID
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 whitespace-nowrap"
                            >
                              Subtotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-white border-b border-gray-200 text-center">
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <span className="text-primary font-[600]">
                                pid_vv8av79av8asdv8sdv9
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Viscose Rayon Kurta Pant And Dupatta Set
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(75,94)"
                                alt=""
                                className="w-[50px] h-[50px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">7</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                            <td className="px-6 py-4 font-[500]">10000</td>
                          </tr>
                          <tr className="bg-white border-b border-gray-200 text-center">
                            <td className="px-6 py-4 font-[500] whitespace-nowrap">
                              <span className="text-primary font-[600]">
                                pid_vv8av79av8asdv8sdv9
                              </span>
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              Viscose Rayon Kurta Pant And Dupatta Set
                            </td>
                            <td className="px-6 py-4 font-[500]">
                              <img
                                src="https://www.jiomart.com/images/product/original/rvmllpijku/keitra-women-maroon-printed-viscose-rayon-kurta-pant-and-dupatta-set-kurta-set-women-product-images-rvmllpijku-2-202409271044.jpg?im=Resize=(75,94)"
                                alt=""
                                className="w-[50px] h-[50px] object-cover rounded-md"
                              />
                            </td>
                            <td className="px-6 py-4 font-[500]">7</td>
                            <td className="px-6 py-4 font-[500]">1500</td>
                            <td className="px-6 py-4 font-[500]">10000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
