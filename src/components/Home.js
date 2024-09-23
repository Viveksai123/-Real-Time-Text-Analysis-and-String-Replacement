import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/home');
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold typewriter">Welcome to the Text Analysis App!</h2>
      <br></br>
      <button 
        onClick={handleNavigate} 
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 animate__animated animate__backInUp"
      >
        Go to Text Analysis
      </button>
    </div>
  );
};

export default Home;
