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

const titleClasses = [
  "NewTitle",
  "mt-6",
  "tablet:w-[504px]",
  "tablet:mt-14",
  "tablet:mb-12",
  "flex",
  "items-center",
  "justify-between",
];

let titleStyles = titleClasses.join(" ");

const AddForm = () => {
  const { closeNewInvoice, handleSubmit, handleSaveAndSend } =
    useGlobalContext();

  return (
    <div className="h-full flex flex-col items-center">
      <div className={titleStyles}>
        <h2 className="text-0C0E16 dark:text-FFFF text-heading-2">
          New Invoice
        </h2>
        <button onClick={closeNewInvoice}>
          <CloseIcon />
        </button>
      </div>

      <form
        action=""
        // noValidate
        onSubmit={handleSaveAndSend}
        className="tablet:w-[504px]"
      >
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
