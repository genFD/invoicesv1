import React, { useEffect } from "react";
import {
  BillTo,
  BillFrom,
  InvoiceInfo,
  ItemsList,
  EditFormFooter,
  CloseIcon,
} from "../components";

import { useGlobalContext } from "../context/context";
import { useModalContext } from "../context/modalcontext";

const EditForm = ({ invoice }) => {
  const { populateForm, populateItems } = useGlobalContext();
  const { close } = useModalContext();

  useEffect(() => {
    populateForm(invoice);
    populateItems(invoice);
  }, [invoice]);

  return (
    <div className="h-full flex flex-col items-center">
      <header className={headerStyles}>
        <h2 className="text-0C0E16 dark:text-FFFF text-heading-2">
          Edit Invoice
        </h2>
        <button onClick={() => close("editInvoiceForm")}>
          <CloseIcon />
        </button>
      </header>

      {/* form */}
      <form className="tablet:w-[504px]">
        <BillFrom />
        <BillTo />
        <InvoiceInfo />
        <ItemsList />
        <EditFormFooter />
      </form>
    </div>
  );
};

export default EditForm;

/* ------styles -----*/
const headerStyles =
  "NewTitle mt-6 tablet:w-[504px] tablet:mt-14 tablet:mb-12 flex items-center justify-between";
