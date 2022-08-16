import React from "react";
import { Cancel, SaveChanges } from "../components";

const FooterEditInvoice = () => {
  return (
    <footer className={footerStyles}>
      <Cancel />
      <SaveChanges />
    </footer>
  );
};

export default FooterEditInvoice;

const footerStyles =
  "flex items-center justify-end gap-x-2 h-91 box-shadow-footer-invoice tablet:justify-center w-full dark:bg-1E2139";
