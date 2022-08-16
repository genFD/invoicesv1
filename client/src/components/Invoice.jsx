import React from "react";
import { GoBack, Status, Info, InfoSmall, FooterInvoice } from "../components";

const Invoice = ({ invoice }) => {
  const { status } = invoice.content;

  return (
    <>
      <GoBack />
      <Status status={status} invoice={invoice} />
      <Info invoice={invoice} />
      <FooterInvoice />
    </>
  );
};

export default Invoice;
