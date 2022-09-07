import React from 'react'
import {qoutes, quotes} from '../assets'

const FeedbackCard = ({content, name, img,title}) => {
  return (
    <div className="flex flex-col px-10 py-12 justify-between md:mr-10 rounded-[20px] max-w-[370px] mr-0 my-5 sm:mr-5 feedback-card">
      <img src={quotes} className="w-[42px] object-contain h-[27px]" alt="" />
      <p className="font-poppins text-white my-10 font-normal text-[18px] leading-[32px]">
        {content}
      </p>
      <div className="flex flex-row">
        <img src={img} className="rounded-full w-[48px] h-[48px]" alt="" />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins text-white font-semibold text-[20px] leading-[32px]">
            {name}{" "}
          </h4>
          <p className="font-poppins text-dimWhite font-normal text-[14px] leading-[24px]">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard