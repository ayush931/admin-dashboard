import { useState } from "react";
import PropTypes from "prop-types";

function OtpBox({ length, onChange }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  function handleChange(element, index) {
    const value = element.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (value && index < length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  }

  function handleKeyDown(event, index) {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  }

  return (
    <div
      style={{ display: "flex", gap: "5px", justifyContent: "center" }}
      className="otpBox"
    >
      {otp.map((data, index) => (
        <input
          key={index}
          id={`otp-input-${index}`}
          type="text"
          maxLength={"1"}
          value={otp[index]}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "45px",
            height: "45px",
            textAlign: "center",
            fontSize: "17px",
          }}
        />
      ))}
    </div>
  );
}
OtpBox.propTypes = {
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OtpBox;