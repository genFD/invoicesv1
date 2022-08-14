import { Dialog, Transition } from "@headlessui/react";
import React, { useEffect, useRef } from "react";
import { EditForm } from "../components";
import useInvoice from "../hooks/useInvoice";
import { useModalContext } from "../context/modalcontext";
import {
  backdroptransitionChildProps,
  drawerTransitionProps,
} from "../data/data";
import { useGlobalContext } from "../context/context";

const EditInvoice = () => {
  const { editInvoiceForm, close } = useModalContext();
  const { invoice } = useGlobalContext();
  // const { invoice } = useInvoice();

  const backdrop = useRef(null);

  return (
    <Transition appear show={editInvoiceForm} as="div">
      <Dialog
        initialFocus={backdrop}
        as="div"
        className="relative z-10"
        onClose={() => close("editInvoiceForm")}
      >
        <Transition.Child {...backdroptransitionChildProps}>
          <div className={backdropstyles} />
        </Transition.Child>

        <div className={drawerContainerStyles}>
          <div className={drawerStyles}>
            <Transition.Child {...drawerTransitionProps}>
              <EditForm invoice={invoice} />
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditInvoice;

/* ------styles -----*/

const backdropstyles =
  "fixed desktop:z-10 inset-0 top-[72px] desktop:top-0 desktop:left-[calc(103px+715px)] bg-7C5DFA bg-opacity-50 dark:bg-0C0E16 dark:bg-opacity-70 ";

const drawerContainerStyles =
  "fixed inset-0 top-[72px] desktop:top-0 desktop:left-[103px] overflow-y-auto";

const drawerStyles =
  "bg-FFFF dark:bg-141625 min-h-screen tablet:w-[616px] desktop:w-[719px]tablet:rounded-tr-20px tablet:rounded-br-20px items-center justify-center formContainer";
