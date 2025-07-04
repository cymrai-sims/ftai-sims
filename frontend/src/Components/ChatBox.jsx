import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icons
import { RiRobot3Line } from "react-icons/ri";

const ChatBox = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 24 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-36 right-4 w-160 h-180 bg-white shadow-lg rounded-lg flex flex-col flex-1 z-50"
        >
          <div className="top flex flex-row items-center gap-5 px-6 py-6 bg-[var(--dark-main)] text-white border-b">
            <div className="icon bg-[var(--orange-main)] rounded-full p-3">
              <RiRobot3Line className="text-white text-3xl" />
            </div>
            <div>
              <h5 className="font-bold">Chat with AI</h5>
              <h6 className="text-sm text-gray-100">Ask your questions and get instant help</h6>
            </div>
          </div>
          <div className="context-window p-4 overflow-y-auto h-64">
            <div className="message bg-gray-100 p-3 rounded-lg mb-2">Hello! How can I assist you today?</div>
            <div className="message bg-[var(--dark-main)] text-white p-3 rounded-lg mb-2 text-right">I have a question about my order.</div>
            <div className="message bg-gray-100 p-3 rounded-lg mb-2">Sure! What would you like to know?</div>
          </div>
          <div className="input flex items-center p-4 border-t">
            <input
              type="text"
              placeholder="Type your message."
              className="flex-1 border p-2 rounded-lg text-gray-900"
            />
            <button className="bg-[var(--dark-main)] text-white px-4 py-2 ml-2 rounded-lg">Send</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBox;
