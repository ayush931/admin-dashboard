import PropTypes from "prop-types";

function Badge(props) {
  return (
    <span
      className={`inline-block text-center py-1 px-4 rounded-full text-[11px] capitalize ${
        props.status === "pending" && "bg-red-500 text-white"
      } ${props.status === "confirm" && "bg-[#306f16] text-white"} ${props.status === "delivered" && "bg-green-700 text-white"}`}
    >
      {props.status}
    </span>
  );
}

Badge.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Badge;
