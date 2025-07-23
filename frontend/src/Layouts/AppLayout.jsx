import React, { useState } from 'react';
import Sidebar from '../Components/Navigation/Sidebar';
import Navbar from '../Components/Navigation/Navbar';
import Chat from '../Components/AI/Chat';
import ChatBox from '../Components/AI/ChatBox';

const AppLayout = ({ children }) => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChatAgent, setSelectedChatAgent] = useState('local_ollama');

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSelectAgent = (agent) => {
    setSelectedChatAgent(agent);
  };

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
          {/* Render children here */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
      {/* Chat components */}
      <Chat onClick={toggleChat} isOpen={isChatOpen} onSelectAgent={handleSelectAgent} />
      <ChatBox isOpen={isChatOpen} selectedAgent={selectedChatAgent} />
    </div>
  );
};

export default AppLayout;