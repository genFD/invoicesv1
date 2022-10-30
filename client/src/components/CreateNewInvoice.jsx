import React from "react";
import { Link } from "react-router-dom";
import { useModalContext } from "../context/modalcontext";

const AddNewButton = () => {
  const { open } = useModalContext();
  return (
    <>
      <button onClick={() => open("newInvoiceForm")} className={buttonStyles}>
        <span>
          <span className="flex justify-center items-center rounded-full bg-FFFF h-8 w-8">
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                fill="#7C5DFA"
                fillRule="nonzero"
              />
            </svg>
          </span>
        </span>

        <span className="tablet:hidden">Neww</span>
        <span className="hidden tablet:block">New Invoice</span>
      </button>

      {/* small screen */}
      <Link to="/newinvoice">
        <button className={buttonStylesSm}>
          <span>
            <span className="flex justify-center items-center rounded-full bg-FFFF h-8 w-8">
              <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
                  fill="#7C5DFA"
                  fillRule="nonzero"
                />
              </svg>
            </span>
          </span>
          <span className="tablet:hidden">New</span>
          <span className="hidden tablet:block">New Invoice</span>
        </button>
      </Link>
    </>
  );
};

export default AddNewButton;

/*-------------------Styles----------------*/

const buttonStyles =
  "hidden w-90 tablet:w-150 h-11 tablet:h-12 rounded-3xl tablet:flex gap-x-2 tablet:gap-x-4 items-center bg-7C5DFA hover:bg-9277FF transition-all duration-300 pl-6px tablet:pl-2 shadow-lg";
const buttonStylesSm =
  "w-90 tablet:w-150 h-11 tablet:h-12 rounded-3xl flex tablet:hidden gap-x-2 tablet:gap-x-4 items-center bg-7C5DFA pl-6px tablet:pl-2 focus:ring-1";
