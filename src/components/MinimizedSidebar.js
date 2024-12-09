import React from "react";
import { CgProfile } from "react-icons/cg";
import { HiDownload } from "react-icons/hi";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { Link } from "react-router-dom";

const MinimizedSidebar = () => {
  //   const items = [
  //     { icon: IoMdHome, label: "Home", to: "/" },
  //     { icon: SiYoutubeshorts, label: "Shorts" },
  //   ];

  //   return (
  //     <div className="ml-1">
  //       <ul>
  //         {items.map((item) => (
  //           <SidebarItem icon={item.icon} label={item.label} to={item.to} />
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return (
    <div className="ml-1 bg-white fixed ts:hidden xs:hidden sm:block">
      <ul>
        {/* Home button */}
        <Link to="/">
          <li className="flex flex-col items-center px-0.5 py-4 hover:bg-gray-200 rounded-lg">
            <div>
              <IoMdHome className="text-[27px] xs:text-lg sm:text-xl lg:text-2xl" />
            </div>
            <div className="text-xs xs:text-[10px] sm:text-[11px] lg:text-sm">Home</div>
          </li>
        </Link>
        {/* Shorts button */}
        <li className="flex flex-col items-center  px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <SiYoutubeshorts className="text-xl xs:text-lg sm:text-lg lg:text-xl" />
          </div>
          <div className="text-xs  xs:text-[10px] sm:text-[11px] lg:text-sm">Shorts</div>
        </li>
        {/* Subscriptions button */}
        <li className="flex flex-col items-center px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <MdOutlineSubscriptions className="text-xl xs:text-lg sm:text-lg lg:text-xl" />
          </div>
          <div className="text-[11px] xs:text-[9px] sm:text-[10px] lg:text-xs">
            Subscriptions
          </div>
        </li>
        {/* Profile button */}
        <li className="flex flex-col items-center px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <CgProfile className="text-2xl xs:text-lg sm:text-xl lg:text-2xl" />
          </div>
          <div className="text-[12px] sm:text-[11px] lg:text-sm">You</div>
        </li>
        {/* Downloads button */}
        <li className="flex flex-col items-center px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <HiDownload className="text-2xl xs:text-lg sm:text-xl lg:text-2xl" />
          </div>
          <div className="text-[11px] xs:text-[10px] sm:text-[10px] lg:text-sm">Downloads</div>
        </li>
      </ul>
    </div>
  );
};

export default MinimizedSidebar;
