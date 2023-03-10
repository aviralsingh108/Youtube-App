import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(addMessage({ name: "Aviral", message: "Adding some message" }));
    }, 2000);
    return () => clearTimeout(i);
  }, []);
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
