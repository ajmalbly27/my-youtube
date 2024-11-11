import React from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-[23.4vw] min-h-72 h-[49vh] mr-7 mb-1 rounded-xl">
      <Link to={"watch?v=" + info?.id}>
        <div className="w-full">
          <img
            src={thumbnails.medium.url}
            alt="thumbnail"
            className="w-full h-auto cursor-pointer rounded-xl hover:rounded-none"
          />
        </div>
        <ul className="mt-2">
          <li className="w-full text-base font-semibold line-clamp-2">
            {title}
          </li>
          <li className="text-sm font-semibold text-gray-600">
            {channelTitle}
          </li>
          <li className="text-sm font-semibold text-gray-600">
            {statistics.viewCount} views
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default VideoCard;
