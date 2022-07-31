import React from 'react';
import { Item, DeletePrompt } from '../components';
import { convertPrice, convertTime } from '../utils/convert';
import DeletePromptV2 from './DeletePromptV2';

const Info = ({
  invoiceId,
  items,
  createdAt,
  senderAddress,
  paymentDue,
  clientName,
  clientAddress,
  clientEmail,
  description,
  total,
}) => {
  return (
    <>
      <div className=" flex tablet:hidden justify-center">
        <article className="mt-4 w-327 tablet:w-[688px] p-6 bg-FFFF dark:bg-1E2139 text-7E88C3 font-medium text-body-1">
          <div className="flex justify-start address">
            <div className="p-4 flex flex-col gap-y-7 bg-F9FAFE dark:bg-252945">
              <div className="flex flex-col gap-y-1">
                <div>
                  <span className="text-7E88C3">#</span>
                  <span className="font-bold text-0C0E16 dark:text-FFFF">
                    {invoiceId}
                  </span>
                </div>
                <span className="inline-block dark:text-DFE3FA">
                  {description}
                </span>
              </div>

              {senderAddress && (
                <div className="flex flex-col gap-y-1 address dark:text-DFE3FA">
                  <span className="inline-block">{senderAddress.street}</span>
                  <span className="inline-block">{senderAddress.postCode}</span>
                  <span className="inline-block">{senderAddress.country}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center mt-8 text-7E88C3 bg-F9FAFE dark:bg-252945">
            <div className="w-full p-4">
              <div className="flex justify-between">
                <div>
                  <div className="flex flex-col gap-y-3">
                    <h3>Invoice Date</h3>
                    <p className="text-0C0E16 dark:text-FFFF text-heading-5 font-bold">
                      {convertTime(createdAt)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-3 mt-8">
                    <h3>Payment Due</h3>
                    <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                      {convertTime(paymentDue)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="flex flex-col gap-y-3">
                    <h3>Bill To</h3>
                    <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                      {clientName}
                    </p>
                  </div>

                  <div>
                    {clientAddress && (
                      <div className="flex flex-col gap-y-1 dark:text-DFE3FA ">
                        <span className="inline-block">
                          {clientAddress.street}
                        </span>
                        <span className="inline-block">
                          {clientAddress.city}
                        </span>
                        <span className="inline-block">
                          {clientAddress.postCode}
                        </span>
                        <span className="inline-block">
                          {clientAddress.country}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-3 mt-8">
                <h3>Sent to</h3>
                <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                  {clientEmail}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <div className="w-full">
              <div className="bg-F9FAFE dark:bg-252945 p-4">
                <ul className=" flex flex-col gap-y-3">
                  {items?.map((item, index) => {
                    return <Item key={index} item={item} />;
                  })}
                </ul>
              </div>
              <div className="bg-373B53 dark:bg-0C0E16 rounded-b-lg p-4 flex justify-between items-center">
                <span className="inline-block">Grand Total</span>
                <span className="inline-block text-FFFF text-heading-6">
                  {convertPrice(total)}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className=" hidden tablet:flex justify-center">
        <article className="flex flex-col justify-between mt-4 w-327 tablet:w-[688px] tablet:h-[602px] desktop:w-[730px] desktop:h-[631px]  p-6 bg-FFFF dark:bg-1E2139 text-7E88C3 font-medium text-body-1">
          <div className="flex justify-start address">
            <div className="p-4 flex flex-col tablet:flex-row tablet:w-full tablet:justify-between gap-y-7 bg-F9FAFE dark:bg-252945">
              <div className="flex flex-col gap-y-1">
                <div>
                  <span className="text-7E88C3">#</span>
                  <span className="font-bold text-0C0E16 dark:text-FFFF">
                    {invoiceId}
                  </span>
                </div>
                <span className="inline-block dark:text-DFE3FA">
                  {description}
                </span>
              </div>

              {senderAddress && (
                <div className="flex flex-col gap-y-1 address dark:text-DFE3FA tablet:text-right">
                  <span className="inline-block">{senderAddress.street}</span>
                  <span className="inline-block">{senderAddress.city}</span>
                  <span className="inline-block">{senderAddress.postCode}</span>
                  <span className="inline-block">{senderAddress.country}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center text-7E88C3 bg-F9FAFE dark:bg-252945">
            <div className="w-full p-4  tablet:flex tablet:justify-between">
              <div className="flex justify-between  tablet:w-1/2">
                <div>
                  <div className="flex flex-col gap-y-3">
                    <h3>Invoice Date</h3>
                    <p className="text-0C0E16 dark:text-FFFF text-heading-5 font-bold">
                      {convertTime(createdAt)}
                    </p>
                  </div>

                  <div className="flex flex-col gap-y-3 mt-8">
                    <h3>Payment Due</h3>
                    <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                      {convertTime(paymentDue)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-y-2 ">
                  <div className="flex flex-col gap-y-3">
                    <h3>Bill To</h3>
                    <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                      {clientName}
                    </p>
                  </div>

                  <div>
                    {clientAddress && (
                      <div className="flex flex-col gap-y-1 dark:text-DFE3FA ">
                        <span className="inline-block">
                          {clientAddress.street}
                        </span>
                        <span className="inline-block">
                          {clientAddress.city}
                        </span>
                        <span className="inline-block">
                          {clientAddress.postCode}
                        </span>
                        <span className="inline-block">
                          {clientAddress.country}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-3 mt-8">
                <h3>Sent to</h3>
                <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                  {clientEmail}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full">
              <div className="bg-F9FAFE dark:bg-252945 p-4">
                <ul className="flex flex-col gap-y-3">
                  {items?.map((item, index) => {
                    return <Item key={index} item={item} />;
                  })}
                </ul>
              </div>
              <div className="bg-373B53 dark:bg-0C0E16 rounded-b-lg p-4 flex justify-between items-center">
                <span className="inline-block">Grand Total</span>
                <span className="inline-block text-FFFF text-heading-6 tablet:text-heading-tablet">
                  {convertPrice(total)}
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Info;
