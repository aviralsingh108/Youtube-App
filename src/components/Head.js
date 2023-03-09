import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
      <div className="col-span-10 ml-40 -my-2">
        <div>
          <input
            className="w-1/2 px-7 py-2 border border-gray-400 ml-5 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" px-5 py-2 border border-gray-400 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white my-1 py-2 px-4 ml-6 rounded-lg w-[29.8rem] shadow-lg border border-gray-100">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="hover:bg-gray-100">
                  🔍 {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
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
