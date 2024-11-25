import React, { useState } from 'react';
import { Mic, MicOff, Play, Upload } from 'lucide-react';

interface Props {
  onStartRecording: () => void;
  onStopRecording: () => void;
  isRecording: boolean;
  onScriptUpload: (file: File) => void;
}

export default function Controls({
  onStartRecording,
  onStopRecording,
  isRecording,
  onScriptUpload,
}: Props) {
  const [scenario, setScenario] = useState('default');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onScriptUpload(file);
    }
  };

  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={isRecording ? onStopRecording : onStartRecording}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600'
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white transition-colors`}
          >
            {isRecording ? (
              <>
                <MicOff className="w-5 h-5" />
                <span>Stop Recording</span>
              </>
            ) : (
              <>
                <Mic className="w-5 h-5" />
                <span>Start Recording</span>
              </>
            )}
          </button>

          <select
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="default">Default Scenario</option>
            <option value="difficult">Difficult Customer</option>
            <option value="technical">Technical Discussion</option>
            <option value="negotiation">Price Negotiation</option>
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <label className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg cursor-pointer transition-colors">
            <Upload className="w-5 h-5" />
            <span>Upload Script</span>
            <input
              type="file"
              accept=".txt,.doc,.docx,.pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
            <Play className="w-5 h-5" />
            <span>Start Practice</span>
          </button>
        </div>
      </div>
    </div>
  );
}