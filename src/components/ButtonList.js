import React from "react";
import Button from "./Button";
const list = [
  "All",
  "Music",
  "Mixes",
  "News",
  "Stocks",
  "Ghazal",
  "Computer PRogramming",
  "Thoughts",
  "Holi",
  "Drones",
  "Live",
  "Gaming",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Button name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
