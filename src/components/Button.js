import React from "react";

const Button = ({ item, selectedButtonId, handleButtonClick }) => {
  return (
    <button
      onClick={() => handleButtonClick(item.id)}
      className={`px-3 py-1.5 mr-2.5 text-nowrap  text-sm font-semibold rounded-lg  ${
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
