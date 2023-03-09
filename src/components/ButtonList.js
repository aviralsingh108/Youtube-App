import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Music",
  "Mixes",
  "News",
  "Stocks",
  "Ghazal",
  "Programming",
  "Thoughts",
  "Holi",
  "Drones",
  "Live",
  "Gaming",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
