import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="w-72  m-2 p-2 mb-10 shadow-md">
      <div>
        <img
          className="rounded-2xl p-1"
          alt="thumbnail"
          src={info.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="flex ">
        {/* <img alt="channel-logo" src="" /> */}
        <h4 className="font-bold">{info.snippet.title}</h4>
      </div>
      <div>
        <div className="flex">
          <h6 className="text-gray-500">{info.snippet.channelTitle}</h6>
        </div>
        <div className="flex ">
          <h6 className="text-gray-500">
            {info.statistics.viewCount / 100000}lakh views &#8226;
          </h6>
          {/* <h6 className="text-gray-500">{info.snippet.publishedAt}</h6> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
