import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="flex flex-col w-44 shadow-lg">
      <div className="border-b-2 mx-2 my-2">
        <ul>
          <li className="p-2">🏠 Home</li>
          <li className="p-2">🩳 Shorts</li>
          <li className="p-2">📰 Subscriptions</li>
        </ul>
      </div>
      <div className="border-b-2  my-5 mx-2 my-2">
        <ul className="">
          <li className="p-2">⏯ Library</li>
          <li className="p-2">⏲ History</li>
          <li className="p-2">▶ Your Videos</li>
          <li className="p-2">⌚ Watch Later</li>
          <li className="p-2">👍 Liked Videos</li>
        </ul>
      </div>
      <div className=" mx-2 my-2">
        <h1>Subscriptions</h1>
        <ul>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
