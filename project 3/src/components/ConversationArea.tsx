import React from 'react';
import { User, Bot } from 'lucide-react';

interface Message {
  text: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

interface Props {
  messages: Message[];
}

export default function ConversationArea({ messages }: Props) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.type === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div
            className={`flex items-start space-x-2 max-w-[70%] ${
              message.type === 'user'
                ? 'flex-row-reverse space-x-reverse'
                : 'flex-row'
            }`}
          >
            <div
              className={`p-2 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.type === 'user' ? (
                  <User className="w-4 h-4" />
                ) : (
                  <Bot className="w-4 h-4" />
                )}
                <span className="text-xs opacity-75">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}