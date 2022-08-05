import { Transition } from "@headlessui/react";
import {
  Invoice,
  Navbar,
  Loading,
  NoResults,
  EditInvoice,
} from "../components";
import { transitionProps } from "../data/data";
import { useGlobalContext } from "../context/context";

import useInvoice from "../hooks/useInvoice";

function Detail() {
  const { invoice, loading } = useInvoice();

  if (loading) {
    return <Loading />;
  }
  if (Object.keys(invoice).length < 1) {
    return <NoResults />;
  }

  return (
    <div className=" flex flex-col desktop:flex-row">
      <Navbar />
      <EditInvoice />
      <div className="desktop:my-0 desktop:mx-auto tablet:pb-2">
        <Transition show={Object.keys(invoice).length > 0} {...transitionProps}>
          <Invoice invoice={invoice[0]} />
        </Transition>
      </div>
    </div>
  );
}

export default Detail;
