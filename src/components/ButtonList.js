import React, { useRef, useState } from "react";
import Button from "./Button";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const ButtonList = () => {
  const containerRef = useRef(null);
  const [selectedButtonId, setSelectedButtonId] = useState(1);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(true);

  const list = [
    {
      name: "All",
      id: 1,
    },
    {
      name: "Music",
      id: 2,
    },
    {
      name: "Live",
      id: 3,
    },
    {
      name: "News",
      id: 4,
    },
    {
      name: "Gaming",
      id: 5,
    },
    {
      name: "Watched",
      id: 6,
    },
    {
      name: "New to you",
      id: 7,
    },
    {
      name: "Javascript",
      id: 8,
    },
    {
      name: "Public Speaking",
      id: 9,
    },
    {
      name: "Mixes",
      id: 10,
    },
    {
      name: "Systems design",
      id: 11,
    },
    {
      name: "Podcast",
      id: 12,
    },
    {
      name: "Website",
      id: 13,
    },
    {
      name: "Algorithms",
      id: 14,
    },
    {
      name: "Source code",
      id: 15,
    },
    {
      name: "Resumes",
      id: 16,
    },
    {
      name: "Recently Uploaded",
      id: 17,
    },
    {
      name: "Colleges",
      id: 18,
    },
    {
      name: "Cameras",
      id: 19,
    },
    {
      name: "User interface design",
      id: 20,
    },
  ];

  const handleButtonClick = (id) => {
    setSelectedButtonId(id);
  };

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;

    setIsLeftVisible(scrollLeft > 0);
    setIsRightVisible(scrollLeft < scrollWidth - clientWidth);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-4 mb-6 py-2 flex items-center">
      {/* Left Scroll Button */}
      {isLeftVisible && (
        <button
          className="absolute -left-4 z-10 p-3 rounded-full bg-white text-gray-600 hover:bg-gray-200"
          onClick={scrollLeft}
        >
          <FaAngleLeft />
        </button>
      )}

      {/* Scrollable Button List */}
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className={`absolute w-full flex overflow-x-scroll scrollbar-hide ${
          isLeftVisible && "pl-8"
        } ${isRightVisible && "pr-6"} py-1 scroll-smooth`}
      >
        {list.map((item) => (
          <Button
            key={item.id}
            item={item}
            selectedButtonId={selectedButtonId}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>

      {/* Right Scroll Button */}
      {isRightVisible && (
        <button
          className="absolute -right-4 z-10 p-3 rounded-full bg-white text-gray-600 hover:bg-gray-200"
          onClick={scrollRight}
        >
          <FaAngleRight />
        </button>
      )}
    </div>
  );
};

export default ButtonList;
