import PropTypes from "prop-types";

function ProgressBar(props) {
  return (
    <div className="w-[100px] h-auto overflow-hidden rounded-md bg-black">
      <div
        className={`flex items-center h-[8px] ${
          props.type === "success" && "bg-primary"
        } ${props.type === "error" && "bg-red-500"} ${props.type === "warning" && "bg-yellow-500"}`}
        style={{ width: `${props.value}%` }}
      ></div>
    </div>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default ProgressBar;
