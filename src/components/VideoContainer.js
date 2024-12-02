import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]); // state for storing videos data
  const [error, setError] = useState(null); // State for storing any fetch error

  // Fetch videos when the component mounts
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_VIDEOS_API);

      // Check if the response is successful (status in the range 200-299)
      if (!response.ok) {
        throw new Error(`Error ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      // console.log(json);

      // Set the videos state; default to empty array if items are missing
      setVideos(data?.items || []);
    } catch (error) {
      console.log("Error fetching related videos:", error);
      // Store error message for display, and reset videos to an empty array if it previously had data
      setError(error.message);
      setVideos([]);
    }
  };

  // Display an error message if there's an error fetching videos
  if (error) {
    return (
      <div className="m-10 text-3xl font-bold text-center text-[#f85353]">
        Failed to load videos: {error}
      </div>
    );
  }

  return (
    <div className="py-5 flex flex-wrap sm:py-4">
      {videos.length > 0 ? (
        videos.map((video) => <VideoCard key={video.id} info={video} />)
      ) : (
        <p className="font-semibold text-3xl">No videos available</p>
      )}
    </div>
  );
};

export default VideoContainer;
