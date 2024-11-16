import React from "react";

import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaFireAlt, FaRegNewspaper } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { CiMusicNote1 } from "react-icons/ci";
import { BiMoviePlay } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { GoLightBulb } from "react-icons/go";
import { MdOutlinePodcasts } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="w-1/6 h-[89.5vh] px-5 py-0.5 overflow-y-hidden hover:overflow-y-auto fixed left-0 2xl:h-[89.5vh]">
      <ul className="pb-4 border-b-[1px]">
        <Link to="/">
          <li className="flex items-center px-4 py-2 bg-gray-200 rounded-lg lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
            <IoMdHome className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
            Home
          </li>
        </Link>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <SiYoutubeshorts className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          Shorts
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <MdOutlineSubscriptions className="mr-3 text-2xl xl:mr-3 lg:text-lg xl:text-2xl" />
          Subscriptions
        </li>
      </ul>
      <h1 className="font-semibold px-4 pt-4 pb-1">Explore</h1>
      <ul className="pb-4 border-b-[1px] text-[15px]">
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <FaFireAlt className="mr-3 text-xl lg:text-lg xl:text-2xl" />
          Trending
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <AiOutlineShopping className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          Shopping
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <CiMusicNote1 className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          Music
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <BiMoviePlay className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          Movies
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <img
            className="w-6 mr-3 lg:w-5 xl:w-6"
            alt="live-icon"
            src="https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png"
          />
          Live
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <SiYoutubegaming className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          Gaming
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <FaRegNewspaper className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          News
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <TfiCup className="mr-3 text-xl lg:text-lg xl:text-2xl" />
          Sports
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <GoLightBulb className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          Courses
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-xs  xl:py-2 xl:text-base">
          <img
            className="w-6 mr-3 lg:w-5 xl:w-6"
            alt="live-icon"
            src="https://cdn-icons-png.flaticon.com/512/1727/1727620.png"
          />
          Fashion & Beauty
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
          <MdOutlinePodcasts className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
          Podcasts
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
