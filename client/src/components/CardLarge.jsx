import React from "react";
import { convertTime, convertPrice } from "../utils/utils";

const CardLarge = ({ id, clientName, paymentDue, status, total }) => {
  return (
    <div className={containerStyles}>
      {/* id */}
      <div className="invoice-id">
        <span className="text-7E88C3">#</span>
        <span className="font-bold">{id}</span>
      </div>

      {/* due date / client name / total */}
      <p className={pTimeStyles}>Due {convertTime(paymentDue)}</p>
      <p className={pNameStyles}>{clientName}</p>
      <p className={pTotalStyles}>{convertPrice(total)}</p>

      {/* status */}
      <div
        className={`${
          status === "paid"
            ? "bg-33D69F"
            : status === "pending"
            ? "bg-FF8F00"
            : "bg-373B53"
        } ${statusStyles}`}
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
  );
};

export default CardLarge;

/* <styles-----------*></styles-----------*/

const containerStyles =
  "hidden tablet:grid tablet:grid-cols-5 tablet:grid-rows-1 h-full place-items-center";
const pTimeStyles = "text-7E88C3 font-medium dark:text-DFE3FA";
const pNameStyles = "text-858BB2 dark:text-FFFF font-medium";
const pTotalStyles = "font-bold tablet:text-heading-2";
const statusStyles =
  "flex justify-center items-center rounded-md w-104 h-10 mix-blend-normal bg-opacity-5";
