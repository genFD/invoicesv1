import React from 'react';
import { Loading, NoResults, Card } from '../components';
import { Transition } from '@headlessui/react';
import useInvoices from '../hooks/useInvoices';

const Cards = () => {
  const { invoices, loading } = useInvoices();

  if (loading) {
    return <Loading />;
  }
  if (invoices.length < 1) {
    return <NoResults />;
  }
  return (
    <>
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
        <ul className="min-w-[375px] grid grid-rows-[1fr] gap-y-2 place-content-center pb-16 mt-8 main-content">
          {invoices.map((invoice) => (
            <Card key={invoice.id} {...invoice.content} id={invoice.id} />
          ))}
        </ul>
      </Transition>
    </>
  );
};

export default Cards;
