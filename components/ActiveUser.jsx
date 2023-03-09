import React from "react";
import Image from "next/image";

const ActiveUser = () => {
  const scroll = () => {
    const scrollContainer = document.getElementById("active_users");
    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (e.wheelDelta > 0) {
        scrollContainer.scrollLeft -= 10;
      } else {
        scrollContainer.scrollLeft += 10;
      }
    });
  };

  return (
    <>
      <div className="overflow-hidden p-2">
        <div
          onMouseEnter={scroll}
          id="active_users"
          className="active_users overflow-x-scroll custom_scrollbar flex gap-[10px]"
        >
          <div className="avatar online">
            <div className="w-[50px] rounded-lg">
              <Image
                src={`https://i.ibb.co/MgsTCcv/avater.jpg`}
                width={50}
                height={50}
                alt="active user"
              />
            </div>
          </div>
          <div className="avatar online">
            <div className="w-[50px] rounded-lg">
              <Image
                src={`https://i.ibb.co/MgsTCcv/avater.jpg`}
                width={50}
                height={50}
                alt="active user"
              />
            </div>
          </div>
          <div className="avatar offline">
            <div className="w-[50px] rounded-lg">
              <Image
                src={`https://i.ibb.co/MgsTCcv/avater.jpg`}
                width={50}
                height={50}
                alt="active user"
              />
            </div>
          </div>
          <div className="avatar online">
            <div className="w-[50px] rounded-lg">
              <Image
                src={`https://i.ibb.co/MgsTCcv/avater.jpg`}
                width={50}
                height={50}
                alt="active user"
              />
            </div>
          </div>
          <div className="avatar online">
            <div className="w-[50px] rounded-lg">
              <Image
                src={`https://i.ibb.co/W54XBqJ/tourthum.jpg`}
                width={50}
                height={50}
                alt="active user"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveUser;
