import { Transition } from '@headlessui/react';
import { InvoiceInfo, Navbar, Loading, NoResults } from '../components';
import useInvoice from '../hooks/useInvoice';

function Detail() {
  const { invoice, loading } = useInvoice();

  if (loading) {
    <Loading />;
  }
  if (!invoice) {
    <NoResults />;
  }
  return (
    <>
      <Navbar />
      <Transition
        appear
        show={!loading}
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
    </>
  );
}

export default Detail;
