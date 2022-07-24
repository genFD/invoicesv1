import React, { useState } from 'react';
import { Loading, NoResults, Card } from '../components';
import { Transition } from '@headlessui/react';
import { useGlobalContext } from '../context/context';
import useInvoices from '../hooks/useInvoices';
const Cards = () => {
  const { results, loading } = useGlobalContext();
  const invoices = useInvoices();
  console.log(invoices);

  if (loading) {
    return <Loading />;
  }
  if (invoices.length < 1) {
    return <NoResults />;
  }
  return (
    <div className="mt-8">
      <Transition
        appear
        show={invoices.length > 0}
        as="div"
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <ul className="min-w-[375px] h-full grid grid-rows-[1fr] gap-y-2 place-content-center pb-16">
          {invoices.map((invoice) => (
            <Card key={invoice.id} {...invoice.content} />
          ))}
        </ul>
      </Transition>
    </div>
  );
};

export default Cards;
