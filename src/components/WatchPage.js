import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <iframe
        width="800"
        height="400"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
