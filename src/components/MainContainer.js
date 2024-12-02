import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utils/appSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    dispatch(openMenu());
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={
        "w-full px-8 sm:px-1 md:px-5 " +
        (isMenuOpen
          ? "sm:ml-0 sm:px-5 xl:ml-[17%] 3xl:ml-[12%] 4xl:ml-[10%]"
          : "ml-[11%] md:ml-[6%]")
      }
    >
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
