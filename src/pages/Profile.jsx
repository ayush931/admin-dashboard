import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import {
  editData,
  fetchDataFromApi,
  postData,
  uploadImage,
} from "../utils/api";
import { MdOutlineCloudUpload } from "react-icons/md";
import LoadingCircle from "../components/LoadingCircle";
import { useNavigate } from "react-router-dom";
import { Button, Radio, TextField } from "@mui/material";
import { Collapse } from "react-collapse";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Profile() {
  const context = useContext(MyContext);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [address, setAddress] = useState([]);

  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [loading2, setLoading2] = useState(false);
  const [isChangePasswordFormShow, setIsChangePasswordFormShow] =
    useState(false);

  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token === null) {
      navigate("/");
    }
  }, [context.isLogin]);

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
    setChangePassword(() => {
      return {
        ...changePassword,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    if (context?.userData?._id !== "" && context?.userData?._id !== undefined) {
      fetchDataFromApi(
        `/api/address/get?userId=${context?.userData?._id}`
      ).then((res) => {
        console.log(res)
        setAddress(res.data);
      });
      setUserId(context?.userData?._id);
      setFormFields({
        name: context?.userData?.name,
        email: context?.userData?.email,
        phone: context?.userData?.phone,
      });

      setChangePassword({
        email: context?.userData?.email,
      });
    }
  }, [context?.userData]);

  console.log(context?.userData?.name);
  console.log(context?.userData?.email);

  const validateValue = Object.values(formFields).every((element) => element);
  const validateValue2 = Object.values(formFields).every((element) => element);

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);

    if (formFields.name === "") {
      context.openAlertBox("error", "Please enter the Full name");
      context.setLoading(false);
    }
    if (formFields.email === "") {
      context.openAlertBox("error", "Please enter email address");
      context.setLoading(false);
    }
    if (formFields.phone === "") {
      context.openAlertBox("error", "Please enter the phone number");
      context.setLoading(false);
    }
    editData(`/api/user/update/${userId}`, formFields, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);

      if (res?.error !== true) {
        context.setLoading(false);
        context.openAlertBox("success", res?.data?.message);
      } else {
        context.openAlertBox("error", res?.data?.message);
      }
    });
  }

  function handleSubmitChangePassword(e) {
    e.preventDefault();
    setLoading2(true);

    if (changePassword.oldPassword === "") {
      context.openAlertBox("error", "Please enter the old password");
    }
    if (changePassword.newPassword === "") {
      context.openAlertBox("error", "Please enter new password");
    }
    if (changePassword.confirmPassword === "") {
      context.openAlertBox("error", "Please enter the confirm password");
    }

    if (changePassword.confirmPassword !== changePassword.newPassword) {
      context.openAlertBox(
        "error",
        "New password and Confirm password is not same"
      );
    }
    postData(`/api/user/resetPassword`, changePassword, {
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      if (res?.error !== true) {
        setLoading2(false);
        context.openAlertBox("success", res?.message);
      } else {
        setLoading2(false);
        context.openAlertBox("error", res?.message);
      }
    });
  }
  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.avatar !== 0 &&
      context?.userData?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

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
          formdata.append(`avatar`, file);
          uploadImage("/api/user/userAvatar", formdata).then((res) => {
            setUploading(false);
            let avatar = [];
            avatar.push(res?.data?.avatar);
            setPreviews(avatar);
            console.log(res);
          });
        } else {
          context.openAlertBox("error", "Upload correct format file");
          setUploading(false);
          return false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  console.log()
  return (
    <>
      <div className="card my-4 pt-5 w-[65%] shadow-md sm:shadow-lg bg-white px-5 pb-5">
        <div className="flex items-center justify-center">
          <h2 className="text-[18px] font-[600]">User Profile</h2>
          <Button
            className="!ml-auto !text-primary"
            onClick={() =>
              setIsChangePasswordFormShow(!isChangePasswordFormShow)
            }
          >
            Change Password
          </Button>
        </div>
        <br />
        <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center justify-center bg-gray-200">
          {uploading === true ? (
            <LoadingCircle />
          ) : previews?.length !== 0 ? (
            previews?.map((img, index) => {
              return (
                <img
                  src={img}
                  key={index}
                  className="w-full h-full object-cover"
                />
              );
            })
          ) : (
            <img src={"/user.png"} alt="" />
          )}

          <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)] flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
            <input
              type="file"
              className="absolute top-0 left-0 w-full h-full opacity-0"
              onChange={(e) => {
                onChangeFile(e, "/api/user/userAvatar");
              }}
              name="avatar"
            />
            <MdOutlineCloudUpload className="text-[#fff] text-[25px]" />
          </div>
        </div>
        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-5">
            <div className="w-[50%]">
              <TextField
                label="Full Name"
                variant="outlined"
                size="small"
                className="w-full"
                type="text"
                name="name"
                value={formFields.name}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
            <div className="w-[50%]">
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                className="w-full"
                type="email"
                name="email"
                value={formFields.email}
                disabled={true}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div className="flex items-center gap-5 mt-4">
            <div className="w-[50%]">
              <TextField
                label="Phone Number"
                variant="outlined"
                size="small"
                className="w-full"
                type="number"
                name="phone"
                value={formFields.phone}
                disabled={context.loading === true ? true : false}
                onChange={onChangeInput}
              />
            </div>
          </div>
          <br />
          <div
            className="flex items-center justify-center p-5 border border-dashed border-[rgba(0,0,0,0.2)] bg-[#f1faff] hover:bg-[#e7f3f9] cursor-pointer"
            onClick={() =>
              context.setIsOpenFullSCreenPanel({
                open: true,
                model: "Add New Address",
              })
            }
          >
            <span className="text-[14px] font-[500]">Add address</span>
          </div>
          <div className="flex gap-2 flex-col mt-4">
            {address?.length > 0 &&
              address?.map((address, index) => {
                return (
                  <>
                    <label className="addressBox w-full flex items-center justify-center bg-[#f1f1f1] p-3 rounded-md cursor-pointer">
                      <Radio {...label} name="add" />
                      <span>Hello</span>
                    </label>
                  </>
                );
              })}
          </div>
          <br />
          <div className="flex items-center gap-4">
            <Button
              type="submit"
              className="btn-green btn-lg w-full"
              disabled={!validateValue}
            >
              {context.loading === true ? <LoadingCircle /> : "Update profile"}
            </Button>
          </div>
        </form>
        <Collapse isOpened={isChangePasswordFormShow}>
          <div className="card bg-white p-5 shadow-md rounded-md">
            <div className="flex items-center pb-3">
              <h2 className="pb-0">Change Password</h2>
            </div>
            <hr />
            <form className="mt-8" onSubmit={handleSubmitChangePassword}>
              <div className="flex items-center gap-5">
                <div className="w-[50%]">
                  <TextField
                    label="New Password"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="text"
                    name="newPassword"
                    value={changePassword.newPassword}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <div className="flex items-center gap-5 mt-4">
                <div className="w-[50%]">
                  <TextField
                    label="Confirm Password"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    type="text"
                    name="confirmPassword"
                    value={changePassword.confirmPassword}
                    onChange={onChangeInput}
                  />
                </div>
              </div>
              <br />
              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  className="btn-green btn-lg w-full"
                  disabled={!validateValue2}
                >
                  {loading2 === true ? <LoadingCircle /> : "Change Password"}
                </Button>
              </div>
            </form>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Profile;
