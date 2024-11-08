import React from "react";

import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="h-[10.5vh] min-h-[50px] pl-7 pr-10 flex justify-between items-center bg-white shadow-lg sticky top-0">
      <div className="flex items-center justify-center">
        <div className="w-8 mr-2">
          <IoIosMenu
            className="p-1 text-[34px] rounded-full cursor-pointer hover:bg-gray-200"
            onClick={toggleMenuHandler}
          />
        </div>
        <a href="/">
          <div className="w-28">
            <img
              className="w-full h-[9.5vh] min-h-12"
              alt="youtube-logo"
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            />
          </div>
        </a>
      </div>
      <div className="w-6/12 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-10/12 px-4 py-1 text-[17px] border border-gray-400 rounded-l-full outline-none"
        />
        <button className="px-5 py-1 text-2xl font-extrabold bg-gray-100 border border-gray-400 rounded-r-full hover:bg-gray-200">
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
