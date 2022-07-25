import React from 'react';
import useInvoices from '../hooks/useInvoices';

const HeaderTitle = () => {
  const { invoices } = useInvoices();

  return (
    <div className="flex flex-col">
      <h3 className=" font-bold text-heading-2 text-0C0E16 dark:text-FFFF ">
        Invoices
      </h3>
      <span className="font-medium text-heading-4 text-888EB0 dark:text-DFE3FA">
        {invoices.length > 1 ? `${invoices.length} invoices` : 'No invoices'}
      </span>
    </div>
  );
};

export default HeaderTitle;
