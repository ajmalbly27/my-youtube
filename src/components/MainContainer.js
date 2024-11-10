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
    <div className={"w-full px-8 " + (isMenuOpen ? "ml-[17%]" : "")}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
