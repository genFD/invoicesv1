import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";

const GoBack = () => {
  const { getInvoices } = useGlobalContext();
  return (
    <Link to="/">
      <div
        onClick={() => getInvoices()}
        className="flex mt-8 tablet:mt-12 desktop:mt-16 justify-center"
      >
        <div className="flex cursor-pointer w-327 tablet:w-[688px] desktop:w-[730px]">
          <button className={buttonStyles}>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.342.886L2.114 5.114l4.228 4.228"
                stroke="#9277FF"
                strokeWidth="2"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
            Go back
          </button>
        </div>
      </div>
    </Link>
  );
};

export default GoBack;

/*----------------- styles ----------------*/
const buttonStyles =
  "flex hover:text-7E88C3 dark:hover:hover:text-7E88C3 items-center justify-between w-20  text-0C0E16 dark:text-FFFF font-bold text-heading-4";
