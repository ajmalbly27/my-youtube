import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, to }) => {
  return (
    <li className="flex items-center px-4 py-2 hover:bg-gray-200 rounded-lg lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-[15px]">
      <Icon className="mr-3 text-2xl lg:text-lg xl:text-[22px]" />
      {to ? <Link to={to}>{label}</Link> : <span>{label}</span>}
    </li>
  );
};

export default SidebarItem;
