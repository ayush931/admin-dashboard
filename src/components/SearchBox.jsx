import { MdOutlineManageSearch } from "react-icons/md";

function SearchBox() {
  return (
    <div className="w-full h-auto relative overflow-hidden">
      <MdOutlineManageSearch className="absolute top-[10px] left-[10px] z-50 pointer-events-none text-[20px]" />
      <input
        type="text"
        placeholder="search here..."
        className="w-full h-[40px] p-2 border-2 border-primary !text-primary focus:outline-none focus:border-primary rounded-md text-[13px] pl-10"
      />
    </div>
  );
}

export default SearchBox;
