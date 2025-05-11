import { Button, Checkbox, Tooltip } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MyContext } from "../App";
import { deleteData, editData, fetchDataFromApi, postData } from "../utils/api";

const label = { inputProps: { "arial-label": "Checkbox demo" } };

function AddRams() {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetchDataFromApi("/api/productRams/getRams").then((res) => {
      console.log(res);
      if (res?.error === false) {
        setData(res?.data);
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "") {
      context.openAlertBox("error", "Please enter product name");
      return false;
    }

    postData("/api/productRams/create", {
      name: name,
    }).then((res) => {
      console.log(res);
    });
  }

  function deleteProductRams(id) {
    deleteData(`/api/productRams/delete/${id}`).then((res) => {
      if (res?.error === false) {
        getData();
        context.openAlertBox("success", "Item deleted");
      }
    });
  }

  function editProductRams(id) {
    editData("/api/productRams/updateRams/");
  }

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Add Product RAMS</h2>
      </div>
      <div className="card my-4 pt-5 shadow-sm sm:rounded-lg bg-white w-[65%]">
        <form className="form py-3 p-6" onSubmit={handleSubmit}>
          <div className="col mb-4">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product RAM
            </h3>
            <input
              type="text"
              className="w-full h-[40px] p-5 border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm text-sm"
              name="name"
              onChange={(event) => setName(event.target.value)}
              value={name}
            />
          </div>
          <Button className="btn-green btn-lg w-full flex gap-2" type="submit">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Publish and View
          </Button>
        </form>
      </div>
      {data?.length !== 0 && (
        <div className="card my-4 pt-5 shadow-sm sm:rounded-lg bg-white w-[65%]">
          <div className="relative overflow-x-auto myOrderTable">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 bg-gray-100 text-center capitalize">
                <tr>
                  <th scope="col" className="px-6 pr-0 py-3" width="10%">
                    <div className="w-[60%]">
                      <Checkbox {...label} size="small" />
                    </div>
                  </th>
                  <th className="px-6 py-3" width="60%">
                    Product RAM
                  </th>
                  <th className="px-6 py-3" width="30%">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.map((item, index) => {
                  return (
                    <tr className="bg-white border-b text-center" key={index}>
                      <td className="px-6 pr-0 py-2">
                        <div className="w-[60%]">
                          <Checkbox {...label} size="small" />
                        </div>
                      </td>
                      <td className="px-0 py-2">{item?.name}</td>
                      <td className="px-6 py-2">
                        <Tooltip title="Edit" placement="bottom">
                          <Button
                            className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]"
                            onClick={() => editProductRams()}
                          >
                            <FiEdit className="text-black text-[18px]" />
                          </Button>
                        </Tooltip>
                        <Tooltip title="Delete" placement="bottom">
                          <Button
                            className="!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-black !rounded-full hover:!bg-[#ccc] !min-w-[35px]"
                            onClick={() => deleteProductRams(item?._id)}
                          >
                            <FiTrash2 className="text-black text-[18px]" />
                          </Button>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default AddRams;
