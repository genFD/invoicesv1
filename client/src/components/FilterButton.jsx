import React from 'react';
import { ArrowDown } from '../components';
const FilterButton = () => {
  return (
    <button className="flex items-center text-0C0E16 dark:text-FFFF w-14 h-3 justify-between">
      Filter
      <ArrowDown />
    </button>
  );
};

export default FilterButton;
