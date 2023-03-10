import React, { useState } from "react";
import { FiUpload, FiImage, FiEdit, FiGift } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import Emojis from "@/snippets/Emojis";

const MessageSend = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-2 bg-secondary-dark-bg relative flex justify-between items-center">
      <div className="icons flex gap-[10px]">
        <div className="icon bg-secondary-dark-bg p-2 rounded-lg text-custom_color hover:bg-custom_bg hover:text-[#fff] duration-300 ">
          <FiUpload title="File Upload" className="cursor-pointer" size={20} />
        </div>
        <div className="icon bg-secondary-dark-bg p-2 rounded-lg text-custom_color hover:bg-custom_bg hover:text-[#fff] duration-300 ">
          <input type="file" className="hidden" name="pic" id="pic" />
          <label htmlFor="pic">
            <FiImage
              title="Image Upload"
              className="cursor-pointer"
              size={20}
            />
          </label>
        </div>
        <div className="icon bg-secondary-dark-bg p-2 rounded-lg text-custom_color hover:bg-custom_bg hover:text-[#fff] duration-300 ">
          <FiEdit title="Edit Message" className="cursor-pointer" size={20} />
        </div>
        <div className="icon bg-secondary-dark-bg p-2 rounded-lg text-custom_color hover:bg-custom_bg hover:text-[#fff] duration-300 ">
          <FiGift title="Send Gift" className="cursor-pointer" size={20} />
        </div>
      </div>
      <div className="message_box flex items-center">
        <input
          type="text"
          placeholder="Aa"
          className="input rounded-md w-[36em] pr-[30px] focus:outline-none"
        />
        <label
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="relative right-[25px] cursor-pointer "
          htmlFor="emoji"
        >
          🙂
        </label>
        {isOpen && <Emojis />}
      </div>
      <div className="send relative right-2">
        <span>❤️</span>
        <AiOutlineSend className="text-custom_color" size={20} />
      </div>
    </div>
  );
};

export default MessageSend;
