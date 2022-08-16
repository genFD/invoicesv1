import React from "react";
import { useGlobalContext } from "../context/context";

const HeaderTitle = () => {
  const { invoices } = useGlobalContext();

  return (
    <div className={containerStyles}>
      <h3 className={h3Styles}>Invoices</h3>
      <div className="font-medium text-heading-4 text-888EB0 dark:text-DFE3FA">
        <div className=" tablet:hidden">
          {invoices.length < 1
            ? "No invoices"
            : invoices.length === 1
            ? `${invoices.length} invoice`
            : `${invoices.length} invoices`}
        </div>
        <div className="hidden tablet:block">
          {invoices.length < 1
            ? "No invoices"
            : invoices.length === 1
            ? `There is ${invoices.length} total invoice`
            : `There are ${invoices.length} total invoices`}
        </div>
      </div>
    </div>
  );
};

export default HeaderTitle;

const containerStyles =
  "flex flex-col tablet:gap-y-2 tablet:w-155 mr-20 tablet:mr-202";
const h3Styles =
  "font-bold text-heading-2 text-0C0E16 dark:text-FFFF tablet:text-heading-1 ";
