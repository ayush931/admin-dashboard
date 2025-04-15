import { Button, MenuItem, Select } from "@mui/material";
import { MdOutlineCloudUpload } from "react-icons/md";
import { useContext, useState } from "react";
import { MyContext } from "../App";
import { postData } from "../utils/api";

function AddAddress() {
  const context = useContext(MyContext);
  const [status, setStatus] = useState(false)
  const [formFields, setFormFields] = useState({
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
    status: "",
  });

  const validateValue = Object.values(formFields).every((element) => element);

  function onChangeInput(e) {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  }

  function handleChangeStatus(event) {
    setStatus(event.target.value)
    setFormFields((prevState) => ({
      ...prevState,
      status: event.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    context.setLoading(true);

    if (formFields.addressLine === "") {
      context.openAlertBox("error", "Please provide address line");
    }
    if (formFields.city === "") {
      context.openAlertBox("error", "Please provide city");
    }
    if (formFields.state === "") {
      context.openAlertBox("error", "Please provide state");
    }
    if (formFields.pincode === "") {
      context.openAlertBox("error", "Please provide pincode");
    }
    if (formFields.country === "") {
      context.openAlertBox("error", "Please provide country");
    }
    if (formFields.phone === "") {
      context.openAlertBox("error", "Please provide phone");
    }

    postData(`/api/address/add`, formFields, { withCredentials: true }).then(
      (res) => {
        console.log(res);
        context.setLoading(false);
        if (res?.error === false) {
          context.openAlertBox("success", "Address added successfully");
          context.setLoading(false);
          context?.setIsOpenFullSCreenPanel({
            open: false,
          });
        } else {
          context.openAlertBox("error", res.message);
          context.setLoading(false);
        }
      }
    );
  }

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8" onSubmit={handleSubmit}>
        <div className="scroll max-h-[72vh] overflow-y-scroll pr-4">
          <div className="grid grid-cols-1 mb-3">
            <div className="col w-[100%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">
                Address Line 1
              </h3>
              <input
                type="text"
                value={formFields.addressLine}
                name="addressLine"
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-3 gap-4">
            <div className="col w-[100%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">City</h3>
              <input
                type="text"
                value={formFields.city}
                onChange={onChangeInput}
                name="city"
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">State</h3>
              <input
                type="text"
                value={formFields.state}
                onChange={onChangeInput}
                name="state"
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mb-3 gap-4">
            <div className="col w-[100%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">
                Pincode
              </h3>
              <input
                type="number"
                value={formFields.pincode}
                onChange={onChangeInput}
                disabled={context.loading === true ? true : false}
                name="pincode"
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">
                Country
              </h3>
              <input
                type="text"
                value={formFields.country}
                onChange={onChangeInput}
                name="country"
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">Phone</h3>
              <input
                type="number"
                value={formFields.phone}
                onChange={onChangeInput}
                name="phone"
                disabled={context.loading === true ? true : false}
                className="w-full h-[40px] border-2 border-black focus:outline-none focus:border-primary rounded-md p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 mb-3 gap-4">
            <div className="col w-[100%]">
              <h3 className="text-[18px] font-[500] mb-1 text-black">status</h3>
                <Select
                  value={status}
                  onChange={handleChangeStatus}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  size="medium"
                  className="w-full"
                >
                  <MenuItem value={true}>true</MenuItem>
                  <MenuItem value={false}>false</MenuItem>
                </Select>
            </div>
          </div>
          <br />
        </div>
        <hr />
        <div className="p-5 flex items-center justify-center">
          <Button
            disabled={!validateValue}
            className="btn-green btn-lg gap-3"
            type="submit"
          >
            <MdOutlineCloudUpload className="text-[25px]" /> Publish and View
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddAddress;
