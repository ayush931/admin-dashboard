import { Button, MenuItem, Select } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { MyContext } from "../App";
import LoadingCircle from "../components/LoadingCircle";
import { deleteData, editData, fetchDataFromApi } from "../utils/api";

function EditSubCategoryBox(props) {
  const [editMode, setEditMode] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const context = useContext(MyContext);
  const [formFields, setFormFields] = useState({
    name: "",
    parentCategoryName: "",
    parentId: "",
  });

  useEffect(() => {
    formFields.name = props?.name;
    formFields.parentCategoryName = props?.selectedCategoryName;
    formFields.parentId = props?.selectedCategory;
    setSelectValue(props?.selectedCategory);
  }, []);

  function onChangeInput(event) {
    const { name, value } = event.target;

    const categoryId = selectValue;
    setSelectValue(categoryId);

    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  const handleChange = (event) => {
    setSelectValue(event.target.value);
    formFields.parentId = event.target.value;
  };

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);
    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter category name");
      context.setLoading(false);
      return false;
    }

    editData(`/api/category/updateCategory/${props?.id}`, formFields).then(
      (res) => {
        setTimeout(() => {
          fetchDataFromApi("/api/category").then((categoryRes) => {
            context.setCategoryData(categoryRes.data);
            context.openAlertBox("success", res?.message);
            context.setLoading(false);
          });
        }, 1000);
      }
    );
  }

  function deleteCategory(id) {
    deleteData(`/api/category/deleteCategory/${id}`).then((res) => {
      setTimeout(() => {
        fetchDataFromApi("/api/category").then((categoryRes) => {
          context.setCategoryData(categoryRes.data);
          context.openAlertBox("success", res?.message);
          context.setLoading(false);
        });
      }, 1000);
    });
  }

  return (
    <form
      className="w-100 flex items-center gap-3 p-0 px-4"
      onSubmit={handleSubmit}
    >
      {editMode === true && (
        <>
          <div className="flex items-center justify-between py-2 gap-4">
            <div className="w-[150px]">
              <Select
                style={{ zoom: "75%" }}
                className="w-full"
                size="small"
                value={selectValue}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                {props?.categoryData?.length !== 0 &&
                  props?.categoryData?.map((item, index) => {
                    return (
                      <MenuItem
                        value={item?._id}
                        key={index}
                        onClick={() => {
                          formFields.parentCategoryName = item?.name;
                        }}
                      >
                        {item?.name}
                      </MenuItem>
                    );
                  })}
              </Select>
            </div>
            <input
              type="text"
              className="w-full h-[30px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              name="name"
              value={formFields?.name}
              onChange={onChangeInput}
            />
            <div className="flex items-center gap-2">
              <Button
                size="small"
                className="btn-sm"
                type="submit"
                variant="contained"
              >
                {context.loading === true ? (
                  <LoadingCircle color="inherit" />
                ) : (
                  <>Edit</>
                )}
              </Button>
              <Button
                size="small"
                variant="outlined"
                onClick={() => setEditMode(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </>
      )}
      {editMode === false && (
        <>
          <span className="font-[500] text-[14px]">{props?.name}</span>
          <div className="flex items-center ml-auto gap-2">
            <Button
              className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
              onClick={() => {
                setEditMode(true);
              }}
            >
              <MdOutlineModeEdit />
            </Button>
          </div>
          <Button
            onClick={() => deleteCategory(props?.id)}
            className="!min-w-[35px] !w-[35px] !h-[35px] !rounded-full !text-black"
          >
            <FaRegTrashAlt />
          </Button>
        </>
      )}
    </form>
  );
}

export default EditSubCategoryBox;
