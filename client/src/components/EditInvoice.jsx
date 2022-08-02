import { Dialog, Transition } from '@headlessui/react';
import React, { useRef } from 'react';
import { useGlobalContext } from '../context/context';
import { EditForm } from '../components';
import useInvoice from '../hooks/useInvoice';

const EditInvoice = () => {
  const { isEditInvoiceOpen, closeEditInvoice } = useGlobalContext();
  const { invoice } = useInvoice();

  const backdrop = useRef(null);
  return (
    <Transition appear show={isEditInvoiceOpen} as="div">
      <Dialog
        initialFocus={backdrop}
        as="div"
        className="relative z-10"
        onClose={closeEditInvoice}
      >
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            onClick={closeEditInvoice}
            className="fixed desktop:z-10 inset-0 top-[72px] desktop:top-0 desktop:left-[calc(103px+715px)] bg-7C5DFA bg-opacity-50 dark:bg-0C0E16 dark:bg-opacity-70 "
          />
        </Transition.Child>

        <div className="fixed inset-0 top-[72px] desktop:top-0 desktop:left-[103px] overflow-y-auto ref={backdrop}">
          <div className=" bg-FFFF dark:bg-141625  min-h-screen tablet:w-[616px] desktop:w-[719px] tablet:rounded-tr-20px tablet:rounded-br-20px items-center justify-center ">
            <Transition.Child
              as="div"
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <EditForm invoice={invoice} />
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default EditInvoice;
