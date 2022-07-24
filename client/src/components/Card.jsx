import React from 'react';
import { convertTime, convertPrice } from '../utils/convert';

const Card = ({ invoiceId, clientName, paymentDue, items, status }) => {
  return (
    <article className="w-327 h-134 rounded-lg text-0C0E16 dark:text-FFFF bg-FFFF dark:bg-1E2139 card-shadow p-6">
      <header className="flex justify-between">
        <div className="invoice-id">
          <span className="text-7E88C3">#</span>
          <span>{invoiceId}</span>
        </div>
        <div className="client">
          <p className="text-858BB2 dark:text-FFFF">{clientName}</p>
        </div>
      </header>
      <div className="flex justify-between mt-6">
        <div>
          <p className="date text-7E88C3 dark:text-DFE3FA">
            Due {convertTime(paymentDue)}
          </p>
          <p className="price">{convertPrice(items[0].price)}</p>
        </div>
        <div
          className={`${
            status === 'paid'
              ? 'bg-33D69F'
              : status === 'pending'
              ? 'bg-FF8F00'
              : 'bg-DFE3FA'
          } flex justify-center items-center rounded-md w-104 h-10 mix-blend-normal bg-opacity-5`}
        >
          <div className="w-fit h-4 flex items-center gap-2">
            <span
              className={`${
                status === 'paid'
                  ? 'bg-33D69F'
                  : status === 'pending'
                  ? 'bg-FF8F00'
                  : 'bg-DFE3FA'
              } rounded-full h-2 w-2`}
            ></span>
            <p className="text-33D69F font-bold text-heading-4">
              {status[0].toUpperCase() + status.substring(1)}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
