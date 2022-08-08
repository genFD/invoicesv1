import { Dialog, Transition } from "@headlessui/react";
import React, { useRef } from "react";
import { useGlobalContext } from "../context/context";
import { EditForm } from "../components";
import useInvoice from "../hooks/useInvoice";
import { getId } from "../utils/utils";

const backdroptransitionChildProps = {
  as: "div",
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};
const drawerTransitionProps = {
  as: "div",
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
};
const backdropClasses = [
  "fixed",
  "desktop:z-10",
  "inset-0",
  "top-[72px]",
  "desktop:top-0",
  "desktop:left-[calc(103px+715px)]",
  "bg-7C5DFA",
  "bg-opacity-50",
  "dark:bg-0C0E16",
  "dark:bg-opacity-70",
];

const drawerContainerClasses = [
  "fixed",
  "inset-0",
  "top-[72px]",
  "desktop:top-0",
  "desktop:left-[103px]",
  "overflow-y-auto",
];
const titleClasses = [
  "NewTitle",
  "mt-6",
  "tablet:w-[504px]",
  "tablet:mt-14",
  "tablet:mb-12",
  "flex",
  "items-center",
  "justify-between",
];
const drawerClasses = [
  "bg-FFFF",
  "dark:bg-141625",
  "min-h-screen",
  "tablet:w-[616px]",
  "desktop:w-[719px]",
  "tablet:rounded-tr-20px",
  "tablet:rounded-br-20px",
  "items-center justify-center",
  "formContainer",
];

let backdropstyles = backdropClasses.join(" ");
let drawerContainerStyles = drawerContainerClasses.join(" ");
let drawerStyles = drawerClasses.join(" ");
let titleStyles = titleClasses.join(" ");

const EditInvoice = () => {
  const { isEditInvoiceOpen, closeEditInvoice } = useGlobalContext();
  const { invoice, id } = useInvoice();

  const backdrop = useRef(null);

  return (
    <Transition appear show={isEditInvoiceOpen} as="div">
      <Dialog
        initialFocus={backdrop}
        as="div"
        className="relative z-10"
        onClose={closeEditInvoice}
      >
        <Transition.Child {...backdroptransitionChildProps}>
          <div onClick={closeEditInvoice} className={backdropstyles} />
        </Transition.Child>

        <div className={drawerContainerStyles}>
          <div className={drawerStyles}>
            <Transition.Child {...drawerTransitionProps}>
              <EditForm invoice={invoice} id={id} />
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditInvoice;
