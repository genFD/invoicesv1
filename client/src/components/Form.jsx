import React, { useEffect } from "react";

import {
  Divider,
  FooterNewInvoice,
  BillFrom,
  BillTo,
  InvoiceInfo,
  ItemsList,
} from "../components";
import { useGlobalContext } from "../context/context";

const Form = () => {
  const { resetForm, resetItems } = useGlobalContext();

  useEffect(() => {
    resetForm();
    resetItems();
  }, []);

  return (
    <div className="mt-6">
      <form action="" className="w-full flex flex-col items-center">
        <BillFrom />
        <BillTo />
        <InvoiceInfo />
        <ItemsList />
        <Divider />
        <FooterNewInvoice />
      </form>
    </div>
  );
};

export default Form;
