import React from "react";
import { useSelector } from "react-redux";
import MinimizedSidebar from "./MinimizedSidebar";
import FullSidebar from "./FullSidebar";

const SideBar = () => {
  // Access the current menu state from the Redux store
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Render a minimized sidebar when the menu is closed or Render the full sidebar when the menu is open
  return isMenuOpen ? <FullSidebar /> : <MinimizedSidebar />;
};

export default SideBar;
