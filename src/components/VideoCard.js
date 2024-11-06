import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="w-[320px] mr-5">
      <img
        src={thumbnails.medium.url}
        alt="thumbnail"
        className="mr-3 mt-3 cursor-pointer rounded-xl"
      />
      <ul>
        <li className="text-base font-semibold">{title}</li>
        <li className="text-sm font-semibold text-gray-600">{channelTitle}</li>
        <li className="text-sm font-semibold text-gray-600">
          {statistics.viewCount}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
