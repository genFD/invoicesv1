import React from "react";

const LoadingPost = () => {
  return (
    <div className="flex flex-col items-center">
      <svg
        width="20"
        height="20"
        viewBox="0 0 48 48"
        fill="none"
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="4" height="4" fill="white" fillOpacity="0.01" />
        <path
          d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"
          stroke="rgb(227, 224, 247)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36"
          stroke="rgb(227, 224, 247)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>Processing...</span>
    </div>
  );
};

export default LoadingPost;
