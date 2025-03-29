import React from 'react';

const Button = ({ text, primary = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-center px-8 py-3 border ${
        primary ? 'border-transparent bg-blue-600 hover:bg-blue-700' : 'border-blue-600 bg-transparent hover:bg-blue-100'
      } text-base font-medium rounded-md ${
        primary ? 'text-white' : 'text-blue-600'
      } md:py-4 md:text-lg md:px-10 transition duration-150 ease-in-out`}
    >
      {text}
    </button>
  );
};

export default Button;