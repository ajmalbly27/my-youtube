import React from "react";

const Button = ({ item, selectedButtonId, handleButtonClick }) => {
  return (
    <button
      onClick={() => handleButtonClick(item.id)}
      className={`px-3 py-1.5 mr-2.5 text-nowrap  text-sm font-semibold rounded-lg sm:text-xs sm:py-1 sm:mr-2 xl:text-sm xl:py-1.5 ${
        selectedButtonId === item.id
          ? " bg-black text-white"
          : " bg-[#eceaea] hover:bg-slate-300"
      }`}
    >
      {item.name}
    </button>
  );
};

export default Button;
