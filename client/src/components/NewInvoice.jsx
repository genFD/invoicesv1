import { Dialog, Transition, Listbox } from "@headlessui/react";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { useGlobalContext } from "../context/context";
import { AddForm } from "../components";
import { terms, formData, errorData } from "../data/data";

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

const NewInvoice = () => {
  const [selected, setSelected] = useState(terms[0]);
  const [error, updateError] = useState(errorData);

  const { isNewInvoiceOpen, closeNewInvoice, resetForm, resetItems } =
    useGlobalContext();
  const backdrop = useRef(null);

  useEffect(() => {
    resetForm();
    resetItems();
  }, []);
  return (
    <Transition appear show={isNewInvoiceOpen} as="div">
      <Dialog
        initialFocus={backdrop}
        as="div"
        className="relative z-10"
        onClose={closeNewInvoice}
      >
        <Transition.Child {...backdroptransitionChildProps}>
          <div onClick={closeNewInvoice} className={backdropstyles} />
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
