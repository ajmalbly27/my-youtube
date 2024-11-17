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
    <div className="ml-1">
      <ul>
        {/* Home button */}
        <Link to="/">
          <li className="flex flex-col items-center  px-0.5 py-4 hover:bg-gray-200 rounded-lg">
            <div>
              <IoMdHome className="text-[27px]" />
            </div>
            <div className="text-xs">Home</div>
          </li>
        </Link>
        {/* Shorts button */}
        <li className="flex flex-col items-center  px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <SiYoutubeshorts className="text-xl" />
          </div>
          <div className="text-xs">Shorts</div>
        </li>
        {/* Subscriptions button */}
        <li className="flex flex-col items-center px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <MdOutlineSubscriptions className="text-xl" />
          </div>
          <div className="text-[11px]">Subscriptions</div>
        </li>
        {/* Profile button */}
        <li className="flex flex-col items-center px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <CgProfile className="text-2xl" />
          </div>
          <div className="text-[11px]">You</div>
        </li>
        {/* Downloads button */}
        <li className="flex flex-col items-center px-0.5 py-4 hover:bg-gray-200 rounded-lg">
          <div>
            <HiDownload className="text-2xl" />
          </div>
          <div className="text-[11px]">Downloads</div>
        </li>
      </ul>
    </div>
  );
};

export default MinimizedSidebar;
