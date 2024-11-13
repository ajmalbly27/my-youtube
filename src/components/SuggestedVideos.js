import React, { useEffect, useState } from "react";
import SuggestedVideo from "./SuggestedVideo";

const SuggestedVideos = ({ videoInfo }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  // console.log(videoInfo);

  useEffect(() => {
    fetchRelatedVideos();
    // eslint-disable-next-line
  }, []);

  const fetchRelatedVideos = async () => {
    if (!videoInfo?.id) {
      console.error("Invalid video ID");
      return;
    }

    try {
      const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${encodeURIComponent(
        videoInfo.snippet.title
      )}&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      console.log(data.items);
      setRelatedVideos(data.items);
    } catch (error) {
      console.error("Error fetching related videos:", error);
    }
  };

  return (
    <div className="w-full">
      {relatedVideos.length > 0 &&
        relatedVideos.map((video) => (
          <SuggestedVideo key={video.id.videoId} relatedVideoInfo={video} />
        ))}
    </div>
  );
};

export default SuggestedVideos;
