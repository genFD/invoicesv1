import React from "react";
import { useGlobalContext } from "../context/context";

const NewFormFooter = () => {
  const { closeNewInvoice } = useGlobalContext();

  return (
    <footer className="tablet:mt-12 flex items-center gap-x-2 h-91 tablet:h-fit tablet:pb-8 box-shadow-footer-invoice justify-center tablet:justify-start tablet:gap-x-32 w-full">
      <button
        type="button"
        onClick={closeNewInvoice}
        className="w-84 h-48 bg-F9FAFE dark:bg-252945  rounded-3xl grid place-content-center text-body-1 text-7E88C3 font-bold cursor-pointer"
      >
        Discard
      </button>

      <div className="flex gap-x-2">
        <button className="w-117 h-48 bg-373B53 rounded-3xl grid place-content-center text-body-1 text-DFE3FA font-bold">
          Save As Draft
        </button>
        <button
          type="submit"
          className={`w-112 h-48 bg-7C5DFA rounded-3xl grid place-content-center text-body-1 text-FFFF font-bold `}
        >
          Save &amp; send
        </button>
      </div>
    </footer>
  );
};
// ${
//                           !formInput.clientAddress.street &&
//                           error.clientAddress.street
//                             ? "border border-EC5757 bg-EC5757 ring ring-FFFF "
//                             : "bg-7C5DFA"
//                         }

// {!formInput.clientAddress.street && error.clientAddress.street ? (
//             <span className="flex gap-1 items-center">
//               Error
//               <svg
//                 width="24px"
//                 height="24px"
//                 viewBox="0 0 24 24"
//                 fill="#FFFF"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path d="M11 7h2v7h-2zm0 8h2v2h-2z" />
//                 <path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z" />
//               </svg>
//             </span>
//           )
export default NewFormFooter;
