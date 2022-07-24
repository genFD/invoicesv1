import React from 'react';
import { Logo, Toggle, Avatar } from '../components';

const Navbar = () => {
  return (
    <nav id="nav" className="h-72 bg-373B53 dark:bg-1E2139 flex">
      <div className="flex items-center justify-between basis-3/4 border-r border-r-494E6E pr-6">
        <Logo />
        <Toggle />
      </div>
      <Avatar />
    </nav>
  );
};

export default Navbar;
