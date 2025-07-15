import { useState, useEffect, useRef, useCallback } from 'react'; // Import useCallback
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

// Accept a 'newChatTrigger' prop to explicitly request a new chat session
const useChatLogic = (isOpen, selectedAgent, newChatTrigger) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const contextRef = useRef(null);
  // Cache messages per path AND per agent to support multiple agents per page
  const messagesCache = useRef({});

  // Function to initialize or reset chat
  const initializeChat = useCallback(() => {
    const id = getSessionId(currentPath, selectedAgent); // Pass selectedAgent to getSessionId
    setSessionId(id);

    const cacheKey = `${currentPath}-${selectedAgent}`; // Create a unique cache key
    const cached = messagesCache.current[cacheKey];

    if (cached?.length) {
      setMessages(cached);
    } else {
      const initialMessage = [{ type: 'bot', text: `Hello! How can I assist you with ${selectedAgent} today?` }];
      setMessages(initialMessage);
      messagesCache.current[cacheKey] = initialMessage;
    }
  }, [currentPath, selectedAgent]);

  // Effect to handle opening/closing and new chat triggers
  useEffect(() => {
    if (isOpen) {
      initializeChat(); // Initialize when chat opens
    } else {
      // When chat closes, we no longer reset the session here.
      // The reset will only happen explicitly via newChatTrigger or agent change.
    }
  }, [isOpen, initializeChat]);

  // Effect to handle new chat requests or agent changes
  useEffect(() => {
    if (isOpen && (newChatTrigger || selectedAgent)) { // Trigger new chat if button pressed OR agent changes
      const cacheKey = `${currentPath}-${selectedAgent}`;
      resetSessionId(currentPath, selectedAgent); // Reset session explicitly
      messagesCache.current[cacheKey] = []; // Clear cache for this specific chat
      initializeChat(); // Re-initialize chat with a fresh session
    }
  }, [newChatTrigger, selectedAgent, isOpen, currentPath, initializeChat]);


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
    messagesCache.current[`${currentPath}-${selectedAgent}`] = updatedUser; // Update specific cache

    if (!endpoint) {
      const errorMsg = { type: 'bot', text: "No API endpoint mapped for this page." };
      const fallbackMessages = [...updatedUser, errorMsg];
      setMessages(fallbackMessages);
      messagesCache.current[`${currentPath}-${selectedAgent}`] = fallbackMessages;
      setInput('');
      return;
    }

    try {
      const res = await axios.post(endpoint, {
        message: input,
        page: currentPath,
        session_id: sessionId,
        agent: selectedAgent, // Send selected agent to backend
      });

      const reply = res.data.reply || "I'm not sure how to respond to that.";
      const updated = [...updatedUser, { type: 'bot', text: reply }];
      setMessages(updated);
      messagesCache.current[`${currentPath}-${selectedAgent}`] = updated;
    } catch (err) {
      console.error(err);
      const fallback = [...updatedUser, { type: 'bot', text: "Sorry, something went wrong." }];
      setMessages(fallback);
      messagesCache.current[`${currentPath}-${selectedAgent}`] = fallback;
    }

    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  const startNewChat = useCallback(() => {
    const cacheKey = `${currentPath}-${selectedAgent}`;
    resetSessionId(currentPath, selectedAgent); // Ensure session is cleared for this specific chat
    messagesCache.current[cacheKey] = []; // Clear messages from cache
    initializeChat(); // Re-initialize chat
  }, [currentPath, selectedAgent, initializeChat]);

  return {
    input,
    setInput,
    messages,
    contextRef,
    handleKeyDown,
    sendMessage,
    startNewChat, // Expose new function to trigger a new chat
  };
};

export default useChatLogic;