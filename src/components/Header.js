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
    <div className="h-[10.5vh] min-h-12 pl-7 pr-10 flex justify-between items-center bg-white sticky top-0 z-20 ts:px-1 xs:px-4 sm:px-5 md:px-5 xl:pl-5 2xl:h-[10.5vh] 2xl:min-h-14">
      <div className="flex items-center justify-center">
        <div className="w-8 sm:mr-2">
          <IoIosMenu
            className="p-1 text-3xl rounded-full cursor-pointer hover:bg-gray-200 sm:text-3xl md:text-[32px] lg:text-4xl xl:text-[36px] 2xl:text-[40px]"
            onClick={toggleMenuHandler}
          />
        </div>
        <a href="/">
          <div className="w-20 sm:w-[90px] md:w-28 2xl:w-40">
            <img
              className="w-full h-[9.3vh] min-h-12 lg:h-[11vh] xl:h-[9vh] 2xl:h-[9.3vh]"
              alt="youtube-logo"
              src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            />
          </div>
        </a>
      </div>
      <div className="w-6/12 flex justify-center ts:w-7/12 sm:w-8/12 md:w-7/12 lg:w-6/12">
        <input
          type="text"
          placeholder="Search"
          className="w-10/12 px-4 py-1 text-[17px] border border-gray-400 rounded-l-full outline-none ts:px-2 ts:py-0 ts:text-xs sm:text-sm md:px-3 md:py-0.5 md:text-base lg:px-4 lg:py-1"
        />
        <button className="px-5 py-1 text-2xl font-extrabold bg-gray-100 border border-gray-400 rounded-r-full hover:bg-gray-200 ts:px-1.5 ts:py-0.5 ts:text-lg sm:py-0.5 sm:px-2 sm:text-lg md:px-3 lg:py-1">
          <CiSearch />
        </button>
      </div>
      <div className="flex justify-center ts:hidden sm:block">
        <img
          className="w-10 p-1 border border-gray-400 rounded-full sm:w-7 lg:w-10"
          alt="profile-img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnAV2195eKjdsIWb9qODnuYgxUnwJ0exESA&s"
        />
      </div>
    </div>
  );
};

export default Header;
