import React, { useEffect } from "react";
import {
  BillTo,
  BillFrom,
  InvoiceInfo,
  ItemsList,
  NewFormFooter,
} from "../components";
import { getId } from "../utils/utils";

import { useGlobalContext } from "../context/context";

const EditForm = ({ invoice }) => {
  const {
    closeEditInvoice,
    updateForm,
    updateItems,
    items,
    handleSaveAndSend,
  } = useGlobalContext();

  const populateForm = () => {
    updateForm({
      // ...form,
      clientAddress: {
        ...invoice[0].content.clientAddress,
      },
      clientInfo: {
        email: invoice[0].content.clientEmail,
        name: invoice[0].content.clientName,
      },
      senderAddress: {
        ...invoice[0].content.senderAddress,
      },
      invoiceInfo: {
        createdAt: invoice[0].content.createdAt,
        description: invoice[0].content.description,
        // paymentTerms: invoice[0].content.paymentTerms,
      },
    });
  };
  //  addIdToItems();

  const populateItems = () => {
    invoice[0].content.items.map((item) => {
      return {
        ...item,
        id: getId(),
      };
    });
    updateItems([...invoice[0].content.items]);
  };

  // console.log(invoice);

  useEffect(() => {
    populateForm();
    populateItems();
  }, [invoice]);

  return (
    <div className="h-full flex flex-col items-center">
      <div className="NewTitle mt-6 tablet:w-[504px] tablet:mt-14 tablet:mb-12 flex items-center justify-between">
        <h2 className="text-0C0E16 dark:text-FFFF text-heading-2">
          Edit Invoice
        </h2>
        <button onClick={closeEditInvoice}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 cursor-pointer"
            viewBox="0 0 20 20"
            fill="#7C5DFA"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <form action="" className="tablet:w-[504px]" onSubmit={handleSaveAndSend}>
        <BillFrom />
        <BillTo />
        <InvoiceInfo />
        <ItemsList />
        <NewFormFooter />
      </form>
    </div>
  );
};

export default EditForm;
