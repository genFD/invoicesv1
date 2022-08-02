import React from 'react';
import { HeaderTitle, AddNewButton, FilterButton } from '../components';
import FilterItems from './FilterItems';

const Header = () => {
  return (
    <header className="mt-8 tablet:mt-14 desktop:mt-[72px] flex justify-center">
      <div className="w-327 tablet:w-672 desktop:w-730 flex items-center">
        <HeaderTitle />
        <FilterItems />
        <AddNewButton />
      </div>
    </header>
  );
};

export default Header;
