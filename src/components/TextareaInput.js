import React from 'react';

const TextareaInput = ({ text, onTextChange }) => {
  return (
    <div className="w-full max-w-2xl">
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder="Type your text here..."
        className="w-full h-48 p-4 text-lg bg-gray-800 text-white border border-gray-600 rounded-lg resize-none focus:outline-none animation-slideInUp animate__animated animate__bounce"
      />
    </div>
  );
};

export default TextareaInput;
