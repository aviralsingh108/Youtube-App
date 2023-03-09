import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      getSearchSuggestions();
    }, 200);

    return () => {
      clearTimeout(timer);
      //   console.log("clear time out called");
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 h-12 shadow-lg w-full">
      <div className="flex col-span-1">
        <img
          className="h-6 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          onClick={() => {
            return toggleMenuHandler();
          }}
        />
        {/* <Link to={"/"}> */}
        <img
          className="h-24 -my-9"
          alt="logo"
          src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
        />
        {/* </Link> */}
      </div>
      <div className="col-span-10 mx-40 -my-2">
        <input
          className="w-1/2  p-2 border border-gray-400 ml-5 rounded-l-full"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className=" px-5 py-2 border border-gray-400 rounded-r-full">
          🔍
        </button>
      </div>
      <div className="flex col-span-1 -my-2">
        <img
          className="h-9"
          alt="user-icon"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Header;
