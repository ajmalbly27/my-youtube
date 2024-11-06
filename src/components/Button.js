import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-3 py-1 mr-4 bg-[#eceaea] text-[15px] font-semibold rounded-lg hover:bg-slate-300">
        {name}
      </button>
    </div>
  );
};

export default Button;
