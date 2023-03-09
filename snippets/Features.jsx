import React from 'react'
import { BiPhoneCall, BiVideo } from "react-icons/bi";

const Features = () => {
  return (
    <div>
        <div className="features flex gap-[10px] px-2">
          <div className="call_audio border border-[#00ebe7] hover:bg-secondary-dark-bg duration-300 w-full rounded-lg p-1">
            <BiPhoneCall className="mx-auto text-[#00ebe7]" size={40} />
          </div>
          <div className="call_video border border-[#00ebe7] hover:bg-secondary-dark-bg duration-300 w-full rounded-lg p-1">
            <BiVideo className="mx-auto text-[#00ebe7]" size={40} />
          </div>
        </div>
    </div>
  )
}

export default Features