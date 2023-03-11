import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { MESSAGE_FETCH_TIME_MSEC } from "../utils/Constants";
import { generate, randomText } from "../utils/helper";
import store from "../utils/store";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({ name: generate(), message: randomText(25) }));
    }, MESSAGE_FETCH_TIME_MSEC);
    return () => clearTimeout(i);
  }, []);
  return (
    <>
      <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="flex ml-2 w-full rounded-sm border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(liveMessage);
          dispatch(addMessage({ name: "randomSingh", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="w-full px-2 ml-2 "
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="p-2 m-2 bg-green-100 rounded-lg">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
