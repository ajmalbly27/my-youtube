import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuggestedVideo = ({ relatedVideoInfo }) => {
  return (
    <div className="min-h-28 mb-2 flex cursor-pointer 2xl:mb-5 ">
      <div className="w-[45%] ">
        <img
          className="w-full rounded-lg hover:rounded-none"
          alt={relatedVideoInfo.snippet.title}
          src={relatedVideoInfo.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="ml-1 w-[55%]">
        <h2 className="text-[15px] font-semibold line-clamp-3 2xl:text-xl 2xl:line-clamp-3 4xl:text-2xl 4xl:line-clamp-4">
          {relatedVideoInfo.snippet.title}
        </h2>
        <div className="text-sm flex items-center text-gray-600 2xl:text-xl 4xl:text-2xl">
          <p>{relatedVideoInfo.snippet.channelTitle}</p>
          <FaCheckCircle className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideo;
