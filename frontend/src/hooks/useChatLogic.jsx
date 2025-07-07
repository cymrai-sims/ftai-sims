// src/hooks/useChatLogic.js
import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { getSessionId, resetSessionId } from '../utils/session';

const apiMap = {
  '/': 'http://localhost:5000/api/v1/chat/dashboard',
  '/accounts': 'http://localhost:5000/api/v1/chat/accounts',
  '/inventory': 'http://localhost:5000/api/v1/chat/inventory',
  '/procurement': 'http://localhost:5000/api/v1/chat/procurement',
  '/maintenance': 'http://localhost:5000/api/v1/chat/maintenance',
  '/requisitions': 'http://localhost:5000/api/v1/chat/requisitions',
  '/support': 'http://localhost:5000/api/v1/chat/support',
};

const useChatLogic = (isOpen) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const contextRef = useRef(null);
  const messagesCache = useRef({});

  // Initialize session and cache
  useEffect(() => {
    if (isOpen) {
      const id = getSessionId(currentPath);
      setSessionId(id);

      const cached = messagesCache.current[currentPath];
      if (cached?.length) {
        setMessages(cached);
      } else {
        const initialMessage = [{ type: 'bot', text: "Hello! How can I assist you today?" }];
        setMessages(initialMessage);
        messagesCache.current[currentPath] = initialMessage;
      }
    } else {
       // URI I NEED a seprate button for a new chat. right now when they user close the chat it refresh the chat
       resetSessionId(currentPath);
       messagesCache.current[currentPath] = []; 
       setMessages([]);
       setSessionId(null);
     }
  }, [isOpen, currentPath]);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (contextRef.current) {
      contextRef.current.scrollTop = contextRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const endpoint = apiMap[currentPath];

    const updatedUser = [...messages, { type: 'user', text: input }];
    setMessages(updatedUser);
    messagesCache.current[currentPath] = updatedUser;

    if (!endpoint) {
      const errorMsg = { type: 'bot', text: "No API endpoint mapped for this page." };
      const fallbackMessages = [...updatedUser, errorMsg];
      setMessages(fallbackMessages);
      messagesCache.current[currentPath] = fallbackMessages;
      setInput('');
      return;
    }

    try {
      
      const res = await axios.post(endpoint, {
        message: input,
        page: currentPath,
        session_id: sessionId,
      });

      const reply = res.data.reply || "I'm not sure how to respond to that.";
      const updated = [...updatedUser, { type: 'bot', text: reply }];
      setMessages(updated);
      messagesCache.current[currentPath] = updated;
    } catch (err) {
      console.error(err);
      const fallback = [...updatedUser, { type: 'bot', text: "Sorry, something went wrong." }];
      setMessages(fallback);
      messagesCache.current[currentPath] = fallback;
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return {
    input,
    setInput,
    messages,
    contextRef,
    handleKeyDown,
    sendMessage,
  };
};

export default useChatLogic;
