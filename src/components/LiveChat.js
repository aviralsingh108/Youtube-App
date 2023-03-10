import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generate, randomText } from "../utils/helper";
import store from "../utils/store";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({ name: generate(), message: randomText(25) }));
    }, 2000);
    return () => clearTimeout(i);
  }, []);
  return (
    <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
      {chatMessages.map((c, i) => (
        <ChatMessage key={i} name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
