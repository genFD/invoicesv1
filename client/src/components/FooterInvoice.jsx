import React from "react";
import { EditButton, DeleteButton, MarkAsPaid } from "../components";

const FooterInvoice = ({ status }) => {
  return (
    <footer className={footerStyles}>
      <EditButton />
      <DeleteButton />
      {status !== "paid" && <MarkAsPaid />}
    </footer>
  );
};

export default FooterInvoice;

const footerStyles =
  "bg-FFFF tablet:hidden dark:bg-1E2139 mt-14 flex justify-center items-center gap-x-2 h-91 box-shadow-footer-invoice";
