import React from 'react';
import { useGlobalContext } from '../context/context';
import { Header, Cards, NewInvoice } from '../components';

const Content = () => {
  const { isNewInvoiceOpen } = useGlobalContext();
  return (
    <div className="desktop:my-0 desktop:mx-auto">
      <Header />
      {isNewInvoiceOpen && <NewInvoice />}
      <Cards />
    </div>
  );
};

export default Content;
