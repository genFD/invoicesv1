import React from "react";
import { convertTime, convertPrice } from "../utils/utils";

const CardSmall = ({ id, clientName, paymentDue, items, status }) => {
  return (
    <div className="tablet:hidden p-6">
      <header className="flex justify-between">
        <div className="invoice-id tablet:mr-7">
          <span className="text-7E88C3">#</span>
          <span className="font-bold">{id}</span>
        </div>
        <div>
          <p className="text-858BB2 dark:text-FFFF font-medium">{clientName}</p>
        </div>
      </header>

      <div className="flex justify-between mt-6">
        <div className="tablet:flex tablet:gap-x-32">
          <p className="text-7E88C3 font-medium dark:text-DFE3FA">
            Due {convertTime(paymentDue)}
          </p>
          <p className="font-bold tablet:text-heading-2">
            {convertPrice(items[0].price)}
          </p>
        </div>
        <div
          className={`${
            status === "paid"
              ? "bg-33D69F"
              : status === "pending"
              ? "bg-FF8F00"
              : "bg-373B53"
          } flex justify-center items-center rounded-md w-104 h-10 mix-blend-normal bg-opacity-5`}
        >
          <div className="w-fit h-4 flex items-center gap-2">
            <span
              className={`${
                status === "paid"
                  ? "bg-33D69F"
                  : status === "pending"
                  ? "bg-FF8F00"
                  : "bg-373B53 dark:bg-DFE3FA"
              } rounded-full h-2 w-2`}
            ></span>
            <p
              className={`${
                status === "paid"
                  ? "text-33D69F"
                  : status === "pending"
                  ? "text-FF8F00"
                  : "text-373B53 dark:text-DFE3FA"
              } font-bold text-heading-4`}
            >
              {status ? status.toUpperCase() : "status"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSmall;
