import React from 'react';
import { RiOpenaiFill } from "react-icons/ri";

const ChatButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="p-2 transition-all duration-200 hover:text-[var(--blue-main)] text-3xl"
    aria-label="Open Chat"
    type="button"
  >
    <RiOpenaiFill className="inline-block mr-2" />
  </button>
);

export default ChatButton;