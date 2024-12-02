import React from "react";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaFireAlt, FaRegNewspaper } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { CiMusicNote1 } from "react-icons/ci";
import { BiMoviePlay } from "react-icons/bi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { TfiCup } from "react-icons/tfi";
import { GoLightBulb } from "react-icons/go";
import { TbHanger2 } from "react-icons/tb";
import { MdOutlinePodcasts } from "react-icons/md";
import SidebarSection from "./SidebarSection";

const FullSidebar = () => {
  const mainItems = [
    { icon: IoMdHome, label: "Home", to: "/" },
    { icon: SiYoutubeshorts, label: "Shorts" },
    { icon: MdOutlineSubscriptions, label: "Subscriptions" },
  ];

  const exploreItems = [
    { icon: FaFireAlt, label: "Trending" },
    { icon: AiOutlineShopping, label: "Shopping" },
    { icon: CiMusicNote1, label: "Music" },
    { icon: BiMoviePlay, label: "Movies" },
    { icon: CiStreamOn, label: "Live" },
    { icon: SiYoutubegaming, label: "Gaming" },
    { icon: FaRegNewspaper, label: "News" },
    { icon: TfiCup, label: "Sports" },
    { icon: GoLightBulb, label: "Courses" },
    { icon: TbHanger2, label: "Fashion & Beauty" },
    { icon: MdOutlinePodcasts, label: "Podcast" },
  ];

  return (
    <div className="h-[89.5vh] px-5 py-0.5 overflow-y-hidden hover:overflow-y-auto fixed left-0 bg-white sm:z-10 2xl:h-[89.5vh]">
      <SidebarSection items={mainItems} />
      <SidebarSection title="Explore" items={exploreItems} />
    </div>
    // <div className="w-1/6 h-[89.5vh] px-5 py-0.5 overflow-y-hidden hover:overflow-y-auto fixed left-0 sm:w-1/4 sm:z-10 md:w-1/6 2xl:h-[89.5vh]">
    //   Ajmal
    // </div>
  );

  //   return (
  //     <div className="w-1/6 h-[89.5vh] px-5 py-0.5 overflow-y-hidden hover:overflow-y-auto fixed left-0 bg-white 2xl:h-[89.5vh]">
  //       {/* Main navigation section */}
  //       <ul className="pb-4 border-b-[1px]">
  //         {/* Home */}
  //         <Link to="/">
  //           <li className="flex items-center px-4 py-2 bg-gray-200 rounded-lg lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //             <IoMdHome className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //             Home
  //           </li>
  //         </Link>
  //         {/* Shorts */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <SiYoutubeshorts className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           Shorts
  //         </li>
  //         {/* Subscriptions */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <MdOutlineSubscriptions className="mr-3 text-2xl xl:mr-3 lg:text-lg xl:text-2xl" />
  //           Subscriptions
  //         </li>
  //       </ul>
  //       {/* Explore section  */}
  //       <h1 className="font-semibold px-4 pt-4 pb-1">Explore</h1>
  //       <ul className="pb-4 border-b-[1px] text-[15px]">
  //         {/* Trending */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <FaFireAlt className="mr-3 text-xl lg:text-lg xl:text-2xl" />
  //           Trending
  //         </li>
  //         {/* Shopping */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <AiOutlineShopping className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           Shopping
  //         </li>
  //         {/* Music */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <CiMusicNote1 className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           Music
  //         </li>
  //         {/* Movies */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <BiMoviePlay className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           Movies
  //         </li>
  //         {/* Live */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <img
  //             className="w-6 mr-3 lg:w-5 xl:w-6"
  //             alt="live-icon"
  //             src="https://static-00.iconduck.com/assets.00/live-icon-512x376-swbqg3p5.png"
  //           />
  //           Live
  //         </li>
  //         {/* Additional Explore items */}
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <SiYoutubegaming className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           Gaming
  //         </li>
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <FaRegNewspaper className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           News
  //         </li>
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <TfiCup className="mr-3 text-xl lg:text-lg xl:text-2xl" />
  //           Sports
  //         </li>
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <GoLightBulb className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           Courses
  //         </li>
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-xs  xl:py-2 xl:text-base">
  //           <img
  //             className="w-6 mr-3 lg:w-5 xl:w-6"
  //             alt="live-icon"
  //             src="https://cdn-icons-png.flaticon.com/512/1727/1727620.png"
  //           />
  //           Fashion & Beauty
  //         </li>
  //         <li className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-200 cursor-pointer lg:px-2 lg:py-1 lg:text-sm  xl:py-2 xl:text-base">
  //           <MdOutlinePodcasts className="mr-3 text-2xl lg:text-lg xl:text-2xl" />
  //           Podcasts
  //         </li>
  //       </ul>
  //     </div>
  //   );
};

export default FullSidebar;
