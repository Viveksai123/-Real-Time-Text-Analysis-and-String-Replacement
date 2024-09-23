import React, { useEffect, useState } from 'react';

const WordStats = ({ text }) => {
  const [uniqueWordsCount, setUniqueWordsCount] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const wordArray = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(wordArray);
    setUniqueWordsCount(uniqueWords.size);

    const characters = text.replace(/[^a-zA-Z0-9]/g, '');
    setCharCount(characters.length);
  }, [text]);

  return (
    <div className="mt-6 p-4 bg-gray-800 box rounded-lg animate__animated animate__fadeInRightBig">
      <p className="text-xl">Unique Words: <span>{uniqueWordsCount}</span></p>
      <p className="text-xl mt-2">Character Count (Excluding spaces & punctuation): <span>{charCount}</span></p>
    </div>
  );
};

export default WordStats;
