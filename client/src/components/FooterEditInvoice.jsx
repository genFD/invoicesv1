import React from 'react';
import { Cancel, SaveChanges } from '../components';

const FooterEditInvoice = () => {
  return (
    <footer className=" flex items-center gap-x-2 h-91 box-shadow-footer-invoice justify-center w-full">
      <Cancel />
      <SaveChanges />
    </footer>
  );
};

export default FooterEditInvoice;
