import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu, openMenu } from "../utils/appSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Function to check screen size and set isMenuOpen state
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1024) {
        // Mobile and Tablet
        dispatch(closeMenu());
      } else {
        // Laptop and Desktop
        dispatch(openMenu());
      }
    }

    // Run on initial load
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    }
    // eslint-disable-next-line
  }, [])

  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
