import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const VIDEO_URL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
    id +
    "&key=" +
    process.env.REACT_APP_YOUTUBE_API_KEY;

  const dispatch = useDispatch();

  useEffect(() => {
    getVideo();

    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);

  const getVideo = async () => {
    const data = await fetch(VIDEO_URL);
    const json = await data.json();
    console.log(json.items[0]);
    setVideoInfo(json.items[0]);
    getChannelInfo(json.items[0].snippet.channelId);
  };

  const getChannelInfo = async (channelId) => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        channelId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_API_KEY
    );
    const json = await data.json();
    console.log(json.items[0]);
    setChannelInfo(json.items[0]);
  };

  return (
    <div className="w-[850px] mx-9 my-4">
      <iframe
        className=" rounded-xl"
        width="850"
        height="470"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div>
        <p className="my-2 text-xl font-bold">{videoInfo?.snippet?.title}</p>
        {channelInfo && (
          <div className="flex">
            <div className="w-11">
              <img
                className="w-full h-auto rounded-full"
                alt="channel-logo"
                src={channelInfo.snippet.thumbnails.default.url}
              />
            </div>
            <ul className="ml-4">
              <li className="text-[17px] font-semibold">
                {channelInfo.snippet.localized.title}
              </li>
              <li className="text-sm font-semibold text-gray-700">
                {channelInfo.statistics.subscriberCount} subscribers
              </li>
            </ul>
          </div>
        )}

        <div className="my-5 p-2 rounded-xl bg-gray-200">
          {videoInfo?.snippet?.description}
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
