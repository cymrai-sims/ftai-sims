import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiRobot3Line } from 'react-icons/ri';
import useChatLogic from '../../hooks/useChatLogic';

const ChatBox = ({ isOpen, selectedAgent }) => {
  const {
    input,
    setInput,
    messages,
    contextRef,
    handleKeyDown,
    sendMessage,
  } = useChatLogic(isOpen, selectedAgent);

  const agentNames = {
    'sims-ai': 'SIMS-AI',
    'gemini': 'Gemini',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 18 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-36 right-4 w-160 h-180 bg-white shadow-lg rounded-lg flex flex-col flex-1 z-50"
        >
          <div className="top flex flex-row items-center gap-5 px-6 py-6 bg-[var(--dark-main)] text-white border-b">
            <div className="icon bg-[var(--orange-main)] rounded-full p-3">
              <RiRobot3Line className="text-white text-3xl" />
            </div>
            <div>
              <h5 className="font-bold">Chat with {agentNames[selectedAgent]}</h5>
              <h6 className="text-sm text-gray-100">
                {selectedAgent === 'sims-ai'
                  ? 'Get insights and make decisions with SIMS data.'
                  : 'Ask Gemini for analytics and trends.'}
              </h6>
            </div>
          </div>

          <div
            ref={contextRef}
            className="context-window p-4 overflow-y-auto flex-1 flex flex-col gap-2"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`message p-3 rounded-lg mb-2 max-w-[80%] ${
                  msg.type === 'bot'
                    ? 'bg-gray-100 text-gray-900 text-2xl self-start'
                    : 'bg-[var(--dark-main)] text-white text-2xl self-end text-right'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input flex items-center p-4 border-t">
            <input
              type="text"
              placeholder="Type your message."
              className="flex-1 border p-4 rounded-l-lg text-gray-900 text-2xl outline-solid outline-[var(--dark-main)]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-[var(--dark-main)] text-white px-[4.2rem] py-5 ml-2 rounded-r-lg text-2xl"
              onClick={sendMessage}
              disabled={!input.trim()}
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBox;