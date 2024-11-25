import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import ConversationArea from './components/ConversationArea';
import Controls from './components/Controls';
import { useSpeechRecognition } from './hooks/useSpeechRecognition';
import { useSpeechSynthesis } from './hooks/useSpeechSynthesis';

interface Message {
  text: string;
  type: 'user' | 'ai';
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { isRecording, transcript, startRecording, stopRecording } = useSpeechRecognition();
  const { speak } = useSpeechSynthesis();

  const handleStopRecording = useCallback(() => {
    stopRecording();
    if (transcript) {
      setMessages((prev) => [
        ...prev,
        { text: transcript, type: 'user', timestamp: new Date() },
      ]);

      // Simulate AI response (replace with actual API call)
      setTimeout(() => {
        const response = "I understand your point. Let me address your concerns...";
        setMessages((prev) => [
          ...prev,
          { text: response, type: 'ai', timestamp: new Date() },
        ]);
        speak(response);
      }, 1000);
    }
  }, [transcript, stopRecording, speak]);

  const handleScriptUpload = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      setMessages((prev) => [
        ...prev,
        {
          text: `Script uploaded: ${file.name}\n${text.slice(0, 100)}...`,
          type: 'ai',
          timestamp: new Date(),
        },
      ]);
    };
    reader.readAsText(file);
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto max-w-7xl flex flex-col">
        <div className="flex-1 bg-white shadow-lg rounded-lg my-4 flex flex-col">
          <ConversationArea messages={messages} />
          <Controls
            isRecording={isRecording}
            onStartRecording={startRecording}
            onStopRecording={handleStopRecording}
            onScriptUpload={handleScriptUpload}
          />
        </div>
      </main>
    </div>
  );
}

export default App;