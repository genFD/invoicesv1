import React from 'react';
import { HeaderTitle, AddNewButton, FilterButton } from '../components';

const Header = () => {
  return (
    <header className="h-11 mt-8 flex justify-center px-6">
      <div className="flex items-center justify-between basis-3/4 pr-4">
        <HeaderTitle />
        <FilterButton />
      </div>
      <AddNewButton />
    </header>
  );
};

export default Header;
