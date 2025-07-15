import React, { useState, useCallback } from "react";

// Components
import Sidebar from "../Components/Navigation/Sidebar";
import Navbar from "../Components/Navigation/Navbar";
import AiInsights from "../Components/AI/AiInsights";
import Chat from "../Components/AI/Chat";
import ChatBox from "../Components/AI/ChatBox";
import AgentSelector from "../Components/AI/AgentSelector"; // Import the new AgentSelector component

const AppLayout = ({ children }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null); // New state to hold the selected agent ID

  // Toggles the initial chat button state (open/close)
  const toggleChat = useCallback(() => {
    if (isChatOpen) {
      // If closing the chat entirely, reset the selected agent
      setSelectedAgent(null);
    }
    setIsChatOpen((prev) => !prev);
  }, [isChatOpen]);

  // Handles the selection of an AI agent from the AgentSelector
  const handleAgentSelection = useCallback((agentId) => {
    setSelectedAgent(agentId);
  }, []);

  // Handles closing the entire chat interface (both selector and chatbox)
  const handleCloseChat = useCallback(() => {
    setIsChatOpen(false);
    setSelectedAgent(null); // Ensure agent is reset when chat is closed
  }, []);

  return (
    <div className="flex-1 pl-[21rem] pt-[8rem] bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <Navbar />
        <AiInsights />
        {children}

        {/* The main chat toggle button */}
        <Chat onClick={toggleChat} isOpen={isChatOpen} />

        {/* Conditionally render AgentSelector or ChatBox */}
        {isChatOpen && !selectedAgent && (
          // Show AgentSelector if chat is open but no agent has been selected yet
          <AgentSelector
            isOpen={isChatOpen && !selectedAgent}
            onSelectAgent={handleAgentSelection}
            onClose={handleCloseChat}
          />
        )}

        {isChatOpen && selectedAgent && (
          // Show ChatBox if chat is open AND an agent has been selected
          <ChatBox
            isOpen={isChatOpen && selectedAgent}
            selectedAgent={selectedAgent} // Pass the selected agent to ChatBox
          />
        )}
      </div>
    </div>
  );
};

export default AppLayout;