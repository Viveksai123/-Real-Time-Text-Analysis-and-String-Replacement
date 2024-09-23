import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TextareaInput from './components/TextareaInput';
import WordStats from './components/WordStats';
import StringReplacement from './components/StringReplacement';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';
import 'animate.css';

function App() {
  const [text, setText] = useState('');
  const [replacedText, setReplacedText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleReplacement = (newText) => {
    setReplacedText(newText);
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-8 animate__animated animate__backInDown">Real-Time Text Analysis & String Replacement</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={
            <>
              <TextareaInput text={text} onTextChange={handleTextChange} />
              <WordStats text={text} />
              <StringReplacement text={text} onReplacement={handleReplacement} />
              {replacedText && (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                  <h3 className="text-2xl">Replaced Text:</h3>
                  <p className="mt-2 bg-gray-700 p-2 rounded-md">{replacedText}</p>
                </div>
              )}
            </>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
