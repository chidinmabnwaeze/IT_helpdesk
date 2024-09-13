import React from "react";
import ChatBot from "react-simple-chatbot";
import aiBot from "../assets/icons/bx_bot.svg";
import { FaCamera, FaMicrophone, FaRegSmile, FaSmile } from "react-icons/fa";
import send from "../assets/icons/send.svg";
import mic from "../assets/icons/mic-01.svg";
import { TiCameraOutline } from "react-icons/ti";

const Chatbot = () => {
  const steps = [
    {
      id: "Greet",
      message: "Hello, welcome to IT helpdesk Support",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Hi, {previousValue},Please what's your complaint",
      trigger: "waiting",
    },
    {
      id: "waiting",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message: "Please select your issue",
      trigger: "Issues",
    },
    {
      id: "Issues",
      options: [
        { value: "Hardware Issues ", label: "Hardware Issues", trigger: "Hardware Issues" },
        { value: "Software Issues", label: "Software Issues", trigger: "Software Issues" },
        { value: "Network Issues", label: "Network Issues", trigger: "Network Issues" },
        {
          value: "Request Live Conversation",
          label: "Request Live Conversation",
          trigger: "Request Live Conversation",
        },
      ],
    },
    {
        id: "Hardware Issues",
        message: "Thanks for sharing your hardware issue",
        end: true
      },
      {
        id: "Software Issues",
        message: "Thanks for sharing your software issue",
        end: true
      },
      {
        id: "Network Issues",
        message: "Thanks for sharing your network issue",
        end: true
      },
    {
      id: "Request Live Conversation",
      message: "Hold on while we connect you to a live agent",
      end: true
    },
  ];

  return (
    <div className="chatbot w-3/5 flex flex-col justify-between h-screen bg-white border m-auto ">
      <div className="header">
        <div className="left flex m-2">
          <img src={aiBot} alt="" />
          <div className="ml-2">
            <h1>IT SUPPORT</h1>
            <p className="text-gray-400">Chatbot</p>
          </div>
        </div>
        <hr />
      </div>
      {/* <ChatBot className="chatarea" steps={steps}></ChatBot> */}
      <div className="textSpace flex items-center m-3">
        <TiCameraOutline size={28} color="grey" className="m-2" />
        <FaRegSmile size={22} color="#9E9E9E" className="m-2" />
        <input
          type="text"
          placeholder="Type your message here"
          className="w-full h-10"
        />
        <img src={mic} alt="" className="m-2" />
        <img src={send} alt="" />
      </div>
    </div>
  );
};

export default Chatbot;
