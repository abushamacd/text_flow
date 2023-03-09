import Features from "@/snippets/Features";
import Image from "next/image";
import React from "react";

const UserDetails = () => {
  return (
    <div>
      <div className="">
        <div className="user_section text-center border border-[#00ebe7] p-2 mx-2 mb-2 rounded-lg">
          <div className="avatar">
            <div className="w-[100px] rounded-lg">
              <Image
                src={`https://i.ibb.co/MgsTCcv/avater.jpg`}
                width={100}
                height={100}
                alt="active user"
              />
            </div>
          </div>
          <h1 className="user_name text-custom_color text-lg whitespace-nowrap">
            Abu Shama
          </h1>
          <p className="role text-sm whitespace-nowrap">Active</p>
        </div>
        <Features />
      </div>
    </div>
  );
};

export default UserDetails;
