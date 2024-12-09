import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${isMenuOpen ? "w-[24.1vw] md:w-[46%] lg:w-[30%]" : "w-[28vw] md:w-[45%] md:mb-2 lg:w-[31%] lg:min-h-48"
        } min-h-72 mr-7 mb-3 rounded-xl ts:w-full ts:min-h-64 ts:mx-auto xs:w-[48%] xs:min-h-56 xs:m-0 xs:mr-1.5 xs:mb-1 sm:m-0 sm:mr-4 sm:w-[45%] sm:min-h-56 lg:mr-5 lg:mb-2 xl:min-h-72`}
    >
      <Link to={"watch?v=" + info?.id}>
        <div className="w-full">
          <img
            src={thumbnails.medium.url}
            alt="thumbnail"
            className="w-full h-auto cursor-pointer rounded-xl hover:rounded-none"
          />
        </div>
        <ul className="mt-2">
          <li className="w-full text-base font-semibold line-clamp-2 ts:text-xs sm:text-sm lg:text-sm xl:text-base ">
            {title}
          </li>
          <li className="text-sm font-semibold text-gray-600 ts:text-[11px] sm:text-xs lg:text-xs xl:text-sm">
            {channelTitle}
          </li>
          <li className="text-sm font-semibold text-gray-600 ts:text-[11px] sm:text-xs lg:text-xs xl:text-sm">
            {statistics.viewCount} views
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default VideoCard;
