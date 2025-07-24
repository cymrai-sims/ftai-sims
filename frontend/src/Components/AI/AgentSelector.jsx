// components/AgentSelector.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AgentSelector = ({ isOpen, onSelectAgent, onClose }) => {
  const agents = [
    { id: 'local_ollama', name: 'SIMS-AI', description: 'Get insights and make decisions with SIMS data.' },
    { id: 'gemini', name: 'Gemini AI', description: 'Analyze complex datasets and generate reports.' },
  ];
  

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 18 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-36 right-4 w-160 h-auto bg-white shadow-lg rounded-lg flex flex-col z-50 p-6"
        >
          <h4 className="font-semibold mb-4 text-[var(--dark-main)]">Choose an AI Agent</h4>
          <p className="text-gray-600 mb-6">Select the AI agent that best suits your current needs.</p>

          <div className="grid grid-cols-1 gap-4">
            {agents.map((agent) => (
              <button
                key={agent.id}
                className="flex flex-col items-start p-4 border border-gray-200 rounded-lg text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => onSelectAgent(agent.id)}
              >
                <h5 className="font-semibold text-[var(--dark-main)]">{agent.name}</h5>
                <p className="text-gray-700 text-sm">{agent.description}</p>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgentSelector;