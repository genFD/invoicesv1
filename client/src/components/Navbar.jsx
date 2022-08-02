import React from 'react';
import { useParams } from 'react-router-dom';
import { Logo, Toggle, Avatar } from '../components';

const Navbar = () => {
  return (
    <nav
      id="nav"
      className="h-72 desktop:fixed z-30 desktop:h-full desktop:w-103 desktop:justify-between bg-373B53 dark:bg-1E2139 flex desktop:flex-col desktop:rounded-tr-20px desktop:rounded-br-20px "
    >
      <div className="flex items-center w-[95%] desktop:w-full justify-between border-r border-r-494E6E pr-6 desktop:pr-0 desktop:pb-8 desktop:flex-col desktop:h-[90%] desktop:border-none ">
        <Logo />
        <Toggle />
      </div>
      <Avatar />
    </nav>
  );
};

export default Navbar;
