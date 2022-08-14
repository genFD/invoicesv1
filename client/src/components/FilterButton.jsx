import React from "react";
import { ArrowDown } from "../components";

const FilterButton = () => {
  return (
    <button className={buttonStyles}>
      <span className="tablet:hidden">Filter</span>
      <span className="hidden tablet:block">Filter by status</span>
      <ArrowDown />
    </button>
  );
};

export default FilterButton;

const buttonStyles =
  "flex items-center gap-x-3 tablet:gap-x-2 mr-18px tablet:mr-10 desktop:mr-24 text-0C0E16 dark:text-FFFF";
