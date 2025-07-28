import React, { useState, useCallback } from 'react';
import Sidebar from '../Components/Navigation/Sidebar';
import Navbar from '../Components/Navigation/Navbar';
import Chat from '../Components/AI/Chat';
import ChatBox from '../Components/AI/ChatBox';
import AgentSelector from '../Components/AI/AgentSelector';

import { ChatContext } from '../Components/contexts/ChatContext';

const AppLayout = ({ children }) => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChatAgent, setSelectedChatAgent] = useState(null); 

  const toggleChat = useCallback(() => {
    if (isChatOpen) {
      setSelectedChatAgent(null); // reset agent when closing
    }
    setIsChatOpen(prev => !prev);
  }, [isChatOpen]);

  const handleSelectAgent = useCallback((agentId) => {
    setSelectedChatAgent(agentId);
  }, []);

  const handleCloseChat = useCallback(() => {
    setIsChatOpen(false);
    setSelectedChatAgent(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar
            sidebarCollapsed={sideBarCollapsed}
            onToggleSidebar={() => setSideBarCollapsed(!sideBarCollapsed)}
          />
          <main className="flex-1 overflow-y-auto p-6">
            {typeof children === "function"
              ? children({ toggleChat })
              : children}
          </main>
        </div>
      </div>

      {/* Chat Button */}
      <Chat onClick={toggleChat} isOpen={isChatOpen} />

      {/* Conditional Chat UI */}
      {isChatOpen && !selectedChatAgent && (
        <AgentSelector
          isOpen={true}
          onSelectAgent={handleSelectAgent}
          onClose={handleCloseChat}
        />
      )}

      {isChatOpen && selectedChatAgent && (
        <ChatBox
          isOpen={true}
          selectedAgent={selectedChatAgent}
        />
      )}
    </div>
  );
};

export default AppLayout;
