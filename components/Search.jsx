import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = () => {
  return (
    <div className="serach p-2">
      <div className="form-control ">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered rounded-md border-custom_color w-full focus:outline-none"
          />
          <button className="btn rounded-md bg-custom_color text-[#000] hover:text-[#ddd] border-custom_color hover:border-custom_color btn-square">
            <BiSearchAlt2 size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
