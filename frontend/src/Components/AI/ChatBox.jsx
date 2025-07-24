import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RiRobot3Line } from "react-icons/ri";
import useChatLogic from "../../hooks/useChatLogic";

const ChatBox = ({ isOpen, selectedAgent }) => {
  const { input, setInput, messages, contextRef, handleKeyDown, sendMessage } =
    useChatLogic(isOpen, selectedAgent);

  const agentNames = {
    local_ollama: "SIMS-AI",
    gpt: "GPT-4.1",
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 180 }}
          animate={{ opacity: 1, y: 80 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-37 right-4 w-100 h-120 bg-white shadow-lg rounded-lg flex flex-col flex-1 z-50"
        >
          <div className="top flex flex-row items-center gap-2 px-3 py-3 bg-[var(--dark-main)] text-white border-b">
            <div className="icon bg-[var(--orange-main)] rounded-full p-3">
              <RiRobot3Line className="text-white text-3xl" />
            </div>
            <div>
              <h5 className="font-bold">
                Chat with {agentNames[selectedAgent]}
              </h5>
              <h6 className="text-sm text-gray-100">
                {selectedAgent === "SIMS-AI"
                  ? "Get insights and make decisions with SIMS data."
                  : "Ask GPT-4.1 for analytics and trends."}
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
                className={`message p-2 rounded-lg mb-2 max-w-[80%] ${
                  msg.type === "bot"
                    ? "bg-gray-100 text-gray-900 self-start"
                    : "bg-[var(--dark-main)] text-white self-end text-right"
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
              className="flex-1 border py-3 px-3 rounded-l-lg text-gray-900 outline-solid outline-[var(--dark-main)]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-[var(--dark-main)] text-white px-8 py-3 ml-2 rounded-r-lg outline-solid outline-[var(--dark-main)]"
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
