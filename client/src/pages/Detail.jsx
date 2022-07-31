import { Transition } from '@headlessui/react';
import {
  InvoiceInfo,
  Navbar,
  Loading,
  NoResults,
  EditInvoice,
} from '../components';
import { useGlobalContext } from '../context/context';
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
      <div className=" flex flex-col desktop:flex-row">
        <Navbar />
        <EditInvoice />
        <div className="desktop:my-0 desktop:mx-auto tablet:pb-10">
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
    </>
  );
}

export default Detail;
