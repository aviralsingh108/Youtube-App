import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg">
      <ChatMessage name={"Aviral"} message={"This is my first comment"} />
      <ChatMessage name={"Aviral"} message={"This is my first comment"} />
      <ChatMessage name={"Aviral"} message={"This is my first comment"} />
      <ChatMessage name={"Aviral"} message={"This is my first comment"} />
    </div>
  );
};

export default LiveChat;
