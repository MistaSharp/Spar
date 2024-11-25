import React, { useState } from 'react';
import { callOpenAI } from '../utils/openaiClient';

const ConversationArea: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const apiKey = 'your-openai-api-key'; // Replace with a secure method for storing your key

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages([...messages, { user: userMessage, bot: '...' }]);

    try {
      const botResponse = await callOpenAI(userMessage, apiKey);
      setMessages((prev) => [...prev.slice(0, -1), { user: userMessage, bot: botResponse }]);
    } catch (error) {
      console.error('Error fetching response:', error);
      setMessages((prev) => [...prev.slice(0, -1), { user: userMessage, bot: 'Error fetching response.' }]);
    }

    setInput('');
  };

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <div className="mb-4 h-64 overflow-y-auto bg-gray-100 p-2 rounded-md">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <p className="text-blue-600 font-bold">You: {msg.user}</p>
            <p className="text-gray-800">Bot: {msg.bot}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={handleSend} className="ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ConversationArea;
