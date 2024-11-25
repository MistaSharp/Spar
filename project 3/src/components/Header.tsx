import React from 'react';
import { Mic, Upload, Brain, MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="w-8 h-8" />
            <h1 className="text-2xl font-bold">AI Sales Trainer</h1>
          </div>
          <nav className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Mic className="w-5 h-5" />
              <span>Practice</span>
            </div>
            <div className="flex items-center space-x-1">
              <Upload className="w-5 h-5" />
              <span>Scripts</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageSquare className="w-5 h-5" />
              <span>Scenarios</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}