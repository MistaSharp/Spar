import { useState, useEffect } from 'react';

const useSpeechRecognition = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || (window as any).webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = false;

    const handleResult = (event: SpeechRecognitionEvent) => {
      const transcriptChunk = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join('');
      setTranscript(transcriptChunk);
    };

    recognition.onresult = handleResult;

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
      recognition.onresult = null;
    };
  }, [isListening]);

  return { transcript, isListening, setIsListening };
};

export default useSpeechRecognition;
