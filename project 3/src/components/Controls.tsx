import React, { useState } from 'react';

interface ControlsProps {
  onChange: (value: string) => void;
}

const Controls: React.FC<ControlsProps> = ({ onChange }) => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    onChange(value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md shadow-sm">
      <label htmlFor="input-field" className="block text-gray-700 font-medium">
        Enter Value:
      </label>
      <input
        id="input-field"
        type="text"
        value={input}
        onChange={handleInputChange}
        className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-primary"
        placeholder="Type something..."
      />
    </div>
  );
};

export default Controls;
