import React from 'react';
import { Discard, SaveAsDraft, SaveAndSend } from '../components';

const FooterNewInvoice = () => {
  return (
    <footer className="bg-FFFF dark:bg-1E2139 flex items-center gap-x-2 h-91 box-shadow-footer-invoice justify-center w-full">
      <Discard />
      <SaveAsDraft />
      <SaveAndSend />
    </footer>
  );
};

export default FooterNewInvoice;
