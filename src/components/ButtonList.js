import React from "react";
import Button from "./Button";

const ButtonList = () => {
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
      name: "Recently Uploaded",
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
  ];
  return (
    <div className="flex mt-5">
      {list.map((item) => (
        <Button key={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default ButtonList;
