import React from 'react';

// Icons
import { TbMessageChatbot } from "react-icons/tb";
import { RiChatAiFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Chat = ({ onClick, isOpen }) => {
  return (
    <div
      className='fixed bottom-4 right-4 h-24 w-24 bg-white shadow-lg rounded-full flex items-center justify-center cursor-pointer z-50'
      onClick={onClick}
    >
      {isOpen ? (
        <IoClose className="text-[var(--dark-main)] text-5xl" />
      ) : (
        <TbMessageChatbot className="text-[var(--dark-main)] text-5xl" />
      )}
    </div>
  );
};

export default Chat;