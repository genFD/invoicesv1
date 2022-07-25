import React from 'react';
import { Edit, Delete, MarkAsPaid } from '../components';

const FooterInvoice = () => {
  return (
    <footer className="bg-FFFF dark:bg-1E2139 mt-14 flex justify-center items-center gap-x-2 h-91">
      <Edit />
      <Delete />
      <MarkAsPaid />
    </footer>
  );
};

export default FooterInvoice;