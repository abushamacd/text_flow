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
          <div className="collapse-content h-[200px] overflow-auto px-2 ">
            <div className="py-2">
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
