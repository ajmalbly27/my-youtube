import React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ icon: Icon, label, to }) => {
  return (
    <li className="flex items-center px-4 py-2 mb-0.5 hover:bg-gray-200 rounded-lg sm:px-1 sm:py-1 sm:text-sm lg:px-2 lg:py-1 xl:py-1.5">
      <Icon className="mr-5 text-2xl sm:mr-2 sm:text-lg lg:mr-3 lg:text-lg xl:text-2xl xl:mr-5" />
      {to ? (
        <Link className="lg:text-sm xl:text-base" to={to}>
          {label}
        </Link>
      ) : (
        <span className="lg:text-sm xl:text-base">{label}</span>
      )}
    </li>
  );
};

export default SidebarItem;
