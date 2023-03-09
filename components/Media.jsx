import React from "react";

const Media = () => {
  return (
    <div>
      <div className="media p-2">
        <div className="collapse collapse-arrow border border-[#00ebe7] rounded-lg">
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-xl text-[#00ebe7] font-medium">
            Media
          </div>
          <div className="collapse-content border-t border-[#00ebe7] h-[200px] overflow-auto ">
            <div className="p-2">
              <div className="h-[100px] border"></div>
              <div className="h-[100px] border"></div>
              <div className="h-[100px] border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
