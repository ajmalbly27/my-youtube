import React from "react";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="px-10 flex justify-between items-center shadow-lg">
      <div className="flex items-center justify-center">
        <div className="w-8">
          <img
            className="w-full h-auto cursor-pointer"
            alt="menu"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          />
        </div>
        <a href="/">
          <img
            className="h-16"
            alt="youtube-logo"
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
          />
        </a>
      </div>
      <div className="w-6/12 text-center flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-10/12 px-4 py-1 text-[17px] border border-gray-400 rounded-l-full outline-none"
        />
        <button className="px-5 py-1 text-2xl font-extrabold bg-gray-100 border border-gray-400 rounded-r-full">
          <CiSearch />
        </button>
      </div>
      <div className="flex justify-center">
        <img
          className="w-10 p-1 border border-gray-400 rounded-full"
          alt="profile-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnAV2195eKjdsIWb9qODnuYgxUnwJ0exESA&s"
        />
      </div>
    </div>
  );
};

export default Header;