import React from 'react';

// Icons
import { TbMessageChatbot } from "react-icons/tb";
import { RiChatAiFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Chat = ({ onClick, isOpen, onSelectAgent }) => {
  return (
    <div
      className='fixed bottom-4 right-4 h-12 w-12 bg-white shadow-lg rounded-b-full rounded-l-full flex items-center justify-center cursor-pointer z-50'
      onClick={onClick}
    >
      {isOpen ? (
        <IoClose className="text-red-700 text-xl" />
      ) : (
        <TbMessageChatbot className="text-[var(--blue-main)] text-xl" />
      )}
    </div>
  );
};

export default Chat;