import React from "react";
import { convertPrice, convertTime } from "../utils/utils";
import { Item } from "../components";
const Info = (props) => {
  const { id } = props.invoice;
  const {
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientName,
    clientAddress,
    clientEmail,
    items,
    total,
  } = props.invoice.content;

  return (
    <div className={containerStyles}>
      <article className={articleStyles}>
        {/* Id and sender */}
        <div className={descriptionContainerStyles}>
          {/* Id */}
          <div className="flex flex-col gap-y-1">
            <div className={idStyles}>
              <span className="text-7E88C3">#</span>
              {id}
            </div>
            <span className="inline-block dark:text-DFE3FA">{description}</span>
          </div>

          {/* Sender Address */}
          <div className="flex flex-col gap-y-1 address">
            {Object.values(senderAddress).map((item, i) => {
              return (
                <span key={i} className="inline-block tablet:text-right">
                  {item}
                </span>
              );
            })}
          </div>
        </div>

        {/* main */}
        <div className={mainContentStyles}>
          <div className="w-full p-4 tablet:flex tablet:justify-between">
            <div className={dateAndBilltoStyles}>
              {/* date */}
              <div>
                <div className="flex flex-col gap-y-3">
                  <h3>Invoice Date</h3>
                  <p className="text-0C0E16 dark:text-FFFF text-heading-5 font-bold">
                    {convertTime(createdAt)}
                  </p>
                </div>

                {/* payment due */}
                <div className="flex flex-col gap-y-3 mt-8">
                  <h3>Payment Due</h3>
                  <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                    {convertTime(paymentDue)}
                  </p>
                </div>
              </div>

              {/* Bill to */}
              <div className="flex flex-col gap-y-2">
                {/* client name */}
                <div className="flex flex-col gap-y-3">
                  <h3>Bill To</h3>
                  <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                    {clientName}
                  </p>
                </div>

                {/* client Address */}
                <div className="flex flex-col gap-y-1 dark:text-DFE3FA">
                  {Object.values(clientAddress).map((item, i) => {
                    return (
                      <span key={i} className="inline-block">
                        {item}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* sent to */}
            <div className="flex flex-col gap-y-3 mt-8">
              <h3>Sent to</h3>
              <p className="text-0C0E16 dark:text-FFFF text-heading-5">
                {clientEmail}
              </p>
            </div>
          </div>
        </div>

        {/* items */}
        <div className="flex justify-center mt-4">
          <div className="w-full">
            <div className="bg-DFE3FA dark:bg-252945 p-4">
              <ul className=" flex flex-col gap-y-3">
                {items.map((item, index) => {
                  return <Item key={index} item={item} />;
                })}
              </ul>
            </div>

            {/* total */}
            <div className="bg-373B53 dark:bg-0C0E16 rounded-b-lg p-4 flex justify-between items-center">
              <span className="inline-block">Amount Due</span>
              <span className="inline-block text-FFFF text-heading-6 tablet:text-heading-tablet">
                {convertPrice(total)}
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Info;

/**-----------------Styles-----**/

const containerStyles = "flex justify-center";

const articleStyles =
  "flex flex-col justify-between mt-4 w-327 tablet:w-[688px] tablet:h-[602px] desktop:w-[730px] desktop:h-[631px] p-6 bg-FFFF dark:bg-1E2139 text-7E88C3 font-medium text-body-1";

const descriptionContainerStyles =
  "p-4 w-1/2 flex flex-col tablet:flex-row tablet:w-full tablet:justify-between gap-y-7 bg-F9FAFE dark:bg-252945";

const mainContentStyles =
  "flex items-center justify-center mt-8 text-7E88C3 dark:bg-252945";

const idStyles = "font-bold text-0C0E16 dark:text-FFFF";

const dateAndBilltoStyles = "flex justify-between tablet:w-1/2";
