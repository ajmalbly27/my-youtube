import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    setVideos(json?.items);
  };

  return (
    <div className="py-5 flex flex-wrap h-[89.5vh] overflow-y-hidden hover:overflow-y-auto">
      {videos.map((video) => (
        <Link key={video.id} to={"watch?v=" + video?.id} className="mr-5 mb-6">
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
