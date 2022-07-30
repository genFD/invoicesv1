import React from 'react';

const Logo = () => {
  return (
    <div className="bg-7C5DFA relative w-72 h-72 desktop:w-full desktop:h-[103px] rounded-tr-20px rounded-br-20px grid place-content-center before:block before:absolute before:w-72 before:h-8 before:-inset-1 before:bg-9277FF before:bg-opacity-20 before:top-9 logo">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
        <path
          fill="#FFF"
          fillRule="evenodd"
          d="M20.513 0C24.965 2.309 28 6.91 28 12.21 28 19.826 21.732 26 14 26S0 19.826 0 12.21C0 6.91 3.035 2.309 7.487 0L14 12.9z"
        />
      </svg>
    </div>
  );
};

export default Logo;
