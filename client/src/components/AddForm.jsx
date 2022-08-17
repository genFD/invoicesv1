import React from "react";
import {
  CloseIcon,
  BillFrom,
  BillTo,
  InvoiceInfo,
  ItemsList,
  NewFormFooter,
} from "../components";
import { useGlobalContext } from "../context/context";
import { useModalContext } from "../context/modalcontext";

const AddForm = () => {
  const { getInvoices } = useGlobalContext();
  const { close } = useModalContext();
  const closeForm = () => {
    close("newInvoiceForm");
    getInvoices();
  };
  return (
    <div className={containerStyles}>
      <div className={headerStyles}>
        <h2 className={h2Styles}>New Invoice</h2>
        <span onClick={closeForm}>
          <CloseIcon />
        </span>
      </div>
      <form className="tablet:w-[504px]">
        <BillFrom />
        <BillTo />
        <InvoiceInfo />
        <ItemsList />
        <NewFormFooter />
      </form>
    </div>
  );
};

export default AddForm;

/* ------styles-----*/

const containerStyles = "h-full flex flex-col items-center";
const headerStyles =
  "mt-6 tablet:w-[504px] tablet:mt-14 tablet:mb-12 flex items-center  justify-between";

const h2Styles = "text-0C0E16 dark:text-FFFF text-heading-2";
