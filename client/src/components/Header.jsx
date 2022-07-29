import React from 'react';
import { HeaderTitle, AddNewButton, FilterButton } from '../components';

const Header = () => {
  return (
    <header className="mt-8 flex justify-center">
      <div className="w-327 tablet:w-672 desktop:w-730 border-7C5DFA flex items-center">
        <HeaderTitle />
        <FilterButton />
        <AddNewButton />
      </div>
    </header>
  );
};

export default Header;
