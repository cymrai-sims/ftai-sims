import React, { useState } from "react";

// Components
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import AiInsights from "../Components/AiInsights";
import Chat from "../Components/Chat";
import ChatBox from "../Components/ChatBox";

const AppLayout = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  return (
    <div className="flex-1 pl-[21rem] pt-[8rem] bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <Navbar />
        <AiInsights />
        {children}
        <Chat onClick={toggleChat} isOpen={isChatOpen} />
        <ChatBox isOpen={isChatOpen} />
      </div>
    </div>
  );
};

export default AppLayout;