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

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early Return
  if (!isMenuOpen) return null;

  return (
    <div className="w-[21%] h-[89.5vh] p-5 overflow-y-hidden hover:overflow-y-auto">
      <ul className="pb-4 border-b-[1px]">
        <li className="flex items-center px-4 py-2 bg-gray-200 rounded-lg">
          <IoMdHome className="mr-3 text-2xl" />
          Home
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <SiYoutubeshorts className="mr-3 text-2xl" />
          Shorts
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <MdOutlineSubscriptions className="mr-3 text-2xl" />
          Subscriptions
        </li>
      </ul>
      <h1 className="font-semibold px-4 pt-4 pb-1">Explore</h1>
      <ul className="pb-4 border-b-[1px] text-[15px]">
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <FaFireAlt className="mr-3 text-xl" />
          Trending
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <AiOutlineShopping className="mr-3 text-2xl" />
          Shopping
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <CiMusicNote1 className="mr-3 text-2xl" />
          Music
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <BiMoviePlay className="mr-3 text-2xl" />
          Movies
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <img
            className="w-6 mr-3"
            alt="live-icon"
            src="https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png"
          />
          Live
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <SiYoutubegaming className="mr-3 text-2xl" />
          Gaming
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <FaRegNewspaper className="mr-3 text-2xl" />
          News
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <TfiCup className="mr-3 text-xl" />
          Sports
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <GoLightBulb className="mr-3 text-2xl" />
          Courses
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <img
            className="w-6 mr-3"
            alt="live-icon"
            src="https://cdn-icons-png.flaticon.com/512/1727/1727620.png"
          />
          Fashion & Beauty
        </li>
        <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200">
          <MdOutlinePodcasts className="mr-3 text-2xl" />
          Podcasts
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
