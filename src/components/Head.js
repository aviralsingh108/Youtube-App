import React from "react";
const Header = () => {
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-10"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
        />
        <img
          className="h-10"
          alt="logo"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
        />
      </div>
      <div className="col-span-10">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-12"
          alt="user-icon"
          src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
