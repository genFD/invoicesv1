import React from 'react';
import { Link } from 'react-router-dom';
import { convertTime, convertPrice } from '../utils/convert';

const CardTablet = ({
  id,
  invoiceId,
  clientName,
  paymentDue,
  items,
  status,
}) => {
  return (
    <Link to={`/detail/${id}`}>
      <article className="w-327 tablet:w-672 h-134 rounded-lg text-0C0E16 dark:text-FFFF bg-FFFF dark:bg-1E2139 card-shadow">
        <div className="hidden tablet:grid tablet:grid-cols-5 tablet:grid-rows-1 h-full place-items-center">
          {/* invoice id */}
          <div className="invoice-id">
            <span className="text-7E88C3">#</span>
            <span className="font-bold">{invoiceId}</span>
          </div>
          {/* due date */}
          <p className="date text-7E88C3 font-medium dark:text-DFE3FA">
            Due {convertTime(paymentDue)}
          </p>
          {/* name */}
          <p className="text-858BB2 dark:text-FFFF font-medium">{clientName}</p>
          {/* price */}
          <p className="price font-bold tablet:text-heading-2">
            {convertPrice(items[0].price)}
          </p>
          {/* paid */}
          <div
            className={`${
              status === 'paid'
                ? 'bg-33D69F'
                : status === 'pending'
                ? 'bg-FF8F00'
                : 'bg-373B53'
            } flex justify-center items-center rounded-md w-104 h-10 mix-blend-normal bg-opacity-5`}
          >
            <div className="w-fit h-4 flex items-center gap-2">
              <span
                className={`${
                  status === 'paid'
                    ? 'bg-33D69F'
                    : status === 'pending'
                    ? 'bg-FF8F00'
                    : 'bg-373B53 dark:bg-DFE3FA'
                } rounded-full h-2 w-2`}
              ></span>
              <p
                className={`${
                  status === 'paid'
                    ? 'text-33D69F'
                    : status === 'pending'
                    ? 'text-FF8F00'
                    : 'text-373B53 dark:text-DFE3FA'
                } font-bold text-heading-4`}
              >
                {status ? status.toUpperCase() : 'status'}
              </p>
            </div>
          </div>
        </div>

        <div className="tablet:hidden p-6">
          <header className="flex justify-between">
            <div className="invoice-id tablet:mr-7">
              <span className="text-7E88C3">#</span>
              <span className="font-bold">{invoiceId}</span>
            </div>
            <div className="client">
              <p className="text-858BB2 dark:text-FFFF font-medium">
                {clientName}
              </p>
            </div>
          </header>

          <div className="flex justify-between mt-6">
            <div className="tablet:flex tablet:gap-x-32">
              <p className="date text-7E88C3 font-medium dark:text-DFE3FA">
                Due {convertTime(paymentDue)}
              </p>
              <p className="price font-bold tablet:text-heading-2">
                {convertPrice(items[0].price)}
              </p>
            </div>
            <div
              className={`${
                status === 'paid'
                  ? 'bg-33D69F'
                  : status === 'pending'
                  ? 'bg-FF8F00'
                  : 'bg-373B53'
              } flex justify-center items-center rounded-md w-104 h-10 mix-blend-normal bg-opacity-5`}
            >
              <div className="w-fit h-4 flex items-center gap-2">
                <span
                  className={`${
                    status === 'paid'
                      ? 'bg-33D69F'
                      : status === 'pending'
                      ? 'bg-FF8F00'
                      : 'bg-373B53 dark:bg-DFE3FA'
                  } rounded-full h-2 w-2`}
                ></span>
                <p
                  className={`${
                    status === 'paid'
                      ? 'text-33D69F'
                      : status === 'pending'
                      ? 'text-FF8F00'
                      : 'text-373B53 dark:text-DFE3FA'
                  } font-bold text-heading-4`}
                >
                  {status ? status.toUpperCase() : 'status'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardTablet;
