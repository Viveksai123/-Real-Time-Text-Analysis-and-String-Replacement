import React, { useState } from 'react';

const StringReplacement = ({ text, onReplacement }) => {
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  const handleReplace = () => {
    const regex = new RegExp(`(${searchString})`, 'gi'); // Create a regex to match the search string
    const replacedText = text.split(regex).map((part, index) => {
      // Check if the part matches the search string and style it
      if (part.toLowerCase() === searchString.toLowerCase()) {
        return <span key={index} style={{ color: '#4caf50' }}>{replaceString}</span>;
      }
      return part; // Return the original text part if it doesn't match
    });

    onReplacement(replacedText); // Pass the replaced text to the parent component
  };

  return (
    <div className="mt-6 w-full max-w-2xl flex flex-col items-center space-y-4">
      {/* Search String Input */}
      <div className="relative w-full animate__animated animate__fadeInLeftBig">
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder=" "
          className="w-full p-3 pt-5 text-lg bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none peer"
        />
        <label
          className={`absolute left-3 text-gray-400 bg-gray-800 px-1 transition-all
            ${searchString ? 'top-[-12px] text-sm text-green-400' : 'top-3 text-lg'}
            peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-green-400 peer-focus:px-1`}
        >
          String to search for
        </label>
      </div>

      {/* Replace String Input */}
      <div className="relative w-full animate__animated animate__fadeInRightBig">
        <input
          type="text"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
          placeholder=" "
          className="w-full p-3 pt-5 text-lg bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none peer"
        />
        <label
          className={`absolute left-3 text-gray-400 bg-gray-800 px-1 transition-all
            ${replaceString ? 'top-[-12px] text-sm text-green-400' : 'top-3 text-lg'}
            peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-green-400 peer-focus:px-1`}
        >
          String to replace with
        </label>
      </div>

      {/* Replace Button */}
      <button
        onClick={handleReplace}
        className="w-full p-3 text-lg bg-green-600 text-white rounded-lg hover:bg-green-700 animate__animated animate__backInUp"
      >
        Replace All
      </button>

      {/* Display Replaced Text */}
      {/* <div className="mt-4 text-white">
        {Array.isArray(onReplacement) ? (
          <span>{onReplacement}</span>
        ) : (
          <span dangerouslySetInnerHTML={{ __html: onReplacement }} />
        )}
      </div> */}
    </div>
  );
};

export default StringReplacement;
