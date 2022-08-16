import { Dialog, Transition } from "@headlessui/react";
import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../context/context";
import { AddForm } from "../components";
import { useModalContext } from "../context/modalcontext";

import {
  backdroptransitionChildProps,
  drawerTransitionProps,
} from "../data/data";

const NewInvoice = () => {
  const { resetForm, resetItems } = useGlobalContext();
  const { newInvoiceForm, close } = useModalContext();

  const backdrop = useRef(null);

  useEffect(() => {
    resetForm();
    resetItems();
  }, []);

  return (
    <Transition appear show={newInvoiceForm} as="div">
      <Dialog
        initialFocus={backdrop}
        as="div"
        className="relative z-10"
        onClose={() => close("newInvoiceForm")}
      >
        <Transition.Child {...backdroptransitionChildProps}>
          <div className={backdropstyles} />
        </Transition.Child>

        <div className={drawerContainerStyles}>
          <div className={drawerStyles}>
            <Transition.Child {...drawerTransitionProps}>
              <AddForm />
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default NewInvoice;

/* ------Styles -----*/

let backdropstyles =
  "fixed desktop:z-10 inset-0 top-[72px] desktop:top-0 desktop:left-[calc(103px+715px)] bg-7C5DFA bg-opacity-50 dark:bg-0C0E16 dark:bg-opacity-70";

let drawerContainerStyles =
  "fixed inset-0 top-[72px] desktop:top-0 desktop:left-[103px]  overflow-y-auto ";

let drawerStyles =
  "bg-FFFF dark:bg-141625 min-h-screen tablet:w-[616px] desktop:w-[719px] tablet:rounded-tr-20px tablet:rounded-br-20px items-center justify-center formContainer ";
