import { useContext, useState } from "react";
import { MyContext } from "../App";
import { PiExportBold } from "react-icons/pi";
import { Button } from "@mui/material";
import { HiPlusSm } from "react-icons/hi";
import { FaAngleDown } from "react-icons/fa6";
import EditSubCategoryBox from "./EditSubCategory";

function SubCategoryList() {
  const [isOpen, setIsOpen] = useState(0);
  const context = useContext(MyContext);

  function expand(index) {
    if (isOpen === index) {
      setIsOpen(!isOpen);
    } else {
      setIsOpen(index);
    }
  }

  return (
    <>
      <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
        <h1 className="font-[700] text-[20px] text-gray-800">Category List</h1>
        <div className="w-[30%] ml-auto flex items-center gap-3">
          <Button className="btn-green btn-sm flex items-center justify-center gap-2">
            <PiExportBold className="text-[18px] mb-0.5" />
            Export
          </Button>
          <Button
            className="!bg-blue-700 btn-sm !text-white !capitalize flex items-center justify-center"
            onClick={() =>
              context.setIsOpenFullSCreenPanel({
                open: true,
                model: "Add New Sub Category",
              })
            }
          >
            <HiPlusSm className="text-[20px]" />
            Add New Sub Category
          </Button>
        </div>
      </div>
      <div className="card my-4 pt-5 pb-5 px-5 shadow-md sm:rounded-lg bg-white">
        {context.categoryData.length !== 0 && (
          <ul className="w-full">
            {context.categoryData?.map((firstLevelCategory, index) => {
              return (
                <li className="w-full mb-1" key={index}>
                  <div className="flex items-center w-full p-2 bg-[#f1f1f1] rounded-sm px-4">
                    <span className="font-[500] flex items-center gap-4 text-[14px]">
                      {firstLevelCategory?.name}
                    </span>
                    <Button
                      className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black !ml-auto"
                      onClick={() => expand(index)}
                    >
                      <FaAngleDown />
                    </Button>
                  </div>
                  {isOpen === index && (
                    <>
                      {firstLevelCategory?.children?.length !== 0 && (
                        <ul className="w-full">
                          {firstLevelCategory?.children?.map(
                            (subCategory, index_) => {
                              return (
                                <li className="w-full py-1" key={index_}>
                                  <EditSubCategoryBox
                                    name={subCategory?.name}
                                    id={subCategory?._id}
                                    categoryData={context?.categoryData}
                                    index={index_}
                                    selectedCategory={subCategory?.parentId}
                                    selectedCategoryName={
                                      subCategory?.parentCategoryName
                                    }
                                  />
                                  {subCategory?.children?.length !== 0 && (
                                    <ul className="pl-4">
                                      {subCategory?.children?.map(
                                        (thirdLevel, index_) => {
                                          return (
                                            <li
                                              key={index_}
                                              className="w-full hover:bg-[#f1f1f1]"
                                            >
                                              <EditSubCategoryBox
                                                name={thirdLevel.name}
                                                categoryData={
                                                  firstLevelCategory?.children
                                                }
                                                index={index_}
                                                selectedCategory={
                                                  thirdLevel?.parentId
                                                }
                                                selectedCategoryName={
                                                  thirdLevel?.parentCategoryName
                                                }
                                                id={thirdLevel?._id}
                                              />
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  )}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}

export default SubCategoryList;
