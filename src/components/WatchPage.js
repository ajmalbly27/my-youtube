import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [videoInfo, setVideoInfo] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);

  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const videoId = searchParams.get("v");

  // const VIDEO_URL =
  //   "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +
  //   videoId +
  //   "&key=" +
  //   process.env.REACT_APP_YOUTUBE_API_KEY;

  const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  const CHANNEL_URL = (channelId) =>
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

  // Fetch video and channel data when component mounts
  useEffect(() => {
    dispatch(closeMenu());
    fetchVideoInfo();
    // eslint-disable-next-line
  }, []);

  // const fetchVideoInfo = async () => {
  //   const data = await fetch(VIDEO_URL);
  //   const json = await data.json();
  //   console.log(json.items[0]);
  //   setVideoInfo(json.items[0]);
  //   getChannelInfo(json.items[0].snippet.channelId);
  // };

  const fetchVideoInfo = async () => {
    try {
      const data = await fetch(VIDEO_URL);
      const json = await data.json();
      // console.log(json.items[0]);
      const video = json.items[0];
      setVideoInfo(video);
      fetchChannelInfo(video.snippet.channelId);
    } catch (error) {
      console.error("Error fetching video info:", error);
    }
  };

  const fetchChannelInfo = async (channelId) => {
    try {
      const data = await fetch(CHANNEL_URL(channelId));
      const json = await data.json();
      // console.log(json.items[0]);
      setChannelInfo(json.items[0]);
    } catch (error) {
      console.error("Error fetching channel info:", error);
    }
  };

  return (
    <div className="w-[850px] mx-9 my-4">
      {/* Video Player */}
      <iframe
        title="YouTube video player"
        className=" rounded-xl"
        width="850"
        height="470"
        src={"https://www.youtube.com/embed/" + videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-label="Video player"
      ></iframe>

      <article>
        {/* Video Title */}
        <h1 className="my-2 text-xl font-bold">{videoInfo?.snippet?.title}</h1>

        {/* Channel Info */}
        {channelInfo && (
          <section className="flex">
            <div className="w-11">
              <img
                className="w-full h-auto rounded-full"
                alt={`${channelInfo.snippet.title} channel logo`}
                src={channelInfo.snippet.thumbnails.default.url}
              />
            </div>
            <div className="ml-4">
              <h2 className="text-[17px] font-semibold">
                {channelInfo.snippet.localized.title}
              </h2>
              <p className="text-sm font-semibold text-gray-700">
                {channelInfo.statistics.subscriberCount} subscribers
              </p>
            </div>
          </section>
        )}

        {/* Video Description */}
        <div className="my-5 p-2 text-[15px] font-[450] rounded-xl bg-gray-200">
          {videoInfo?.snippet?.description
            .split("\n\n")
            .map((paragraph, index) => (
              <p key={index} className="mb-2">
                {paragraph.split("\n").map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line
                      .split(/(https?:\/\/[^\s]+|#[\w]+)/g)
                      .map((segment, segmentIndex) => {
                        if (segment.match(/^https?:\/\//)) {
                          return (
                            <a
                              key={segmentIndex}
                              href={segment}
                              className="text-blue-500"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {segment}
                            </a>
                          );
                        } else if (segment.match(/^#/)) {
                          return (
                            <span key={segmentIndex} className="text-blue-500">
                              {segment}
                            </span>
                          );
                        } else {
                          return segment;
                        }
                      })}
                    <br />
                  </React.Fragment>
                ))}
                <br />
              </p>
            ))}
        </div>
      </article>
    </div>
  );
};

export default WatchPage;
