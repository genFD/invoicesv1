import React, { useEffect } from "react";
import {
  Divider,
  FooterEditInvoice,
  BillFrom,
  BillTo,
  InvoiceInfo,
  ItemsList,
} from "../components";
import { useGlobalContext } from "../context/context";

const EditFormSmall = ({ invoice }) => {
  const { populateForm, populateItems } = useGlobalContext();

  useEffect(() => {
    populateForm(invoice);
    populateItems(invoice);
  }, [invoice]);

  return (
    <div className="mt-6">
      <form className="w-full flex flex-col items-center">
        <BillFrom />
        <BillTo />
        <InvoiceInfo />
        <ItemsList />
        <Divider />
        <FooterEditInvoice />
      </form>
    </div>
  );
};

export default EditFormSmall;
