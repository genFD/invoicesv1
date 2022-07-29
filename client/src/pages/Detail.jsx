import { Transition } from '@headlessui/react';
import {
  InvoiceInfo,
  Navbar,
  Loading,
  NoResults,
  EditInvoice,
} from '../components';
import useInvoice from '../hooks/useInvoice';

function Detail() {
  const { invoice, loading } = useInvoice();

  if (loading) {
    return <Loading />;
  }
  if (Object.keys(invoice).length < 1) {
    return <NoResults />;
  }
  return (
    <>
      <div className="hidden desktop:flex">
        <div className="h-full w-[103px] flex flex-col justify-between fixed z-10 bg-373B53">
          <Navbar />
          <EditInvoice />
        </div>
        <div className="w-[100%]">
          <Transition
            appear
            show={Object.keys(invoice).length > 0}
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <InvoiceInfo {...invoice} />
          </Transition>
        </div>
      </div>
      <div className="desktop:hidden">
        <Navbar />
        <Transition
          appear
          show={Object.keys(invoice).length > 0}
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <InvoiceInfo {...invoice} />
        </Transition>
      </div>
    </>
  );
}

export default Detail;
