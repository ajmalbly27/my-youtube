import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return (
    <div
      className={`${
        isMenuOpen ? "w-[24.1vw]" : "w-[28vw]"
      } min-h-72 mr-7 mb-3 rounded-xl lg:mr-5 lg:min-h-48 xl:min-h-72`}
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
          <li className="w-full text-base font-semibold line-clamp-2 lg:text-sm xl:text-base ">
            {title}
          </li>
          <li className="text-sm font-semibold text-gray-600 lg:text-xs xl:text-sm">
            {channelTitle}
          </li>
          <li className="text-sm font-semibold text-gray-600 lg:text-xs xl:text-sm">
            {statistics.viewCount} views
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default VideoCard;
