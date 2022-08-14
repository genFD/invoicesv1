import React from "react";
import { HeaderTitle, AddNewButton } from "../components";
import FilterItems from "./FilterItems";

const Header = () => {
  return (
    <header className={headerStyles}>
      <div className={containerStyles}>
        <HeaderTitle />
        <FilterItems />
        <AddNewButton />
      </div>
    </header>
  );
};

export default Header;

/*----------------- styles ----------------*/

const headerStyles = "mt-8 tablet:mt-14 desktop:mt-[72px] flex justify-center";
const containerStyles = "w-327 tablet:w-672 desktop:w-730 flex items-center";
