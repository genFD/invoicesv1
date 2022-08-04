import React from 'react';
import { GoBack, Status, Info, FooterInvoice } from '.';

const Detail = ({
  status,
  invoiceId,
  description,
  items,
  createdAt,
  senderAddress,
  paymentDue,
  clientName,
  clientAddress,
  clientEmail,
  total,
}) => {
  return (
    <>
      <GoBack />
      <Status status={status} />
      <Info
        status={status}
        invoiceId={invoiceId}
        items={items}
        createdAt={createdAt}
        senderAddress={senderAddress}
        paymentDue={paymentDue}
        clientName={clientName}
        clientAddress={clientAddress}
        clientEmail={clientEmail}
        total={total}
        description={description}
      />
      <FooterInvoice />
    </>
  );
};

export default Detail;
