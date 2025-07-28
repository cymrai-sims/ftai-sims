import React, { createContext, useContext } from 'react';

export const ChatContext = createContext({
  toggleChat: () => {},
});

export const useChat = () => useContext(ChatContext);