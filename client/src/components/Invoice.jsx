import React from "react";
import { GoBack, Status, Info, FooterInvoice } from "../components";

const Invoice = ({ invoice }) => {
  const { status } = invoice.content;

  return (
    <>
      <GoBack />
      <Status status={status} invoice={invoice} />
      <Info invoice={invoice} />
      <FooterInvoice status={status} />
    </>
  );
};

export default Invoice;
