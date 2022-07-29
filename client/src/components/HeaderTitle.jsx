import React from 'react';
import useInvoices from '../hooks/useInvoices';

const HeaderTitle = () => {
  const { invoices } = useInvoices();

  return (
    <div
      className="flex flex-col tablet:gap-y-2 tablet:w-155 mr-20
     tablet:mr-202"
    >
      <h3 className=" font-bold text-heading-2 text-0C0E16 dark:text-FFFF tablet:text-heading-1 ">
        Invoices
      </h3>
      <div className="font-medium text-heading-4 text-888EB0 dark:text-DFE3FA">
        <div className=" tablet:hidden">
          {invoices.length > 1 ? `${invoices.length} invoices` : 'No invoices'}
        </div>
        <div className="hidden tablet:block">
          {invoices.length > 1
            ? `There are ${invoices.length} total invoices`
            : 'No invoices'}
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;
