import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarSection = ({ title, items }) => {
  return (
    <div>
      {title && <h1 className="font-semibold px-3 pt-4 pb-1">{title}</h1>}
      <ul>
        {items.map((item) => (
          <SidebarItem icon={item.icon} label={item.label} to={item.to} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
