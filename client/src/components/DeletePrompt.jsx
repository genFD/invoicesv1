import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { useGlobalContext } from '../context/context';
import { Cancel, Delete } from '../components';

const DeletePrompt = () => {
  const { isOpen, closeModal } = useGlobalContext();

  return (
    <>
      <Transition appear show={isOpen} as="div">
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as="div"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-7C5DFA bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-FFFF dark:bg-1E2139 p-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-heading-2 leading-6  dark:text-FFFF text-0C0E16"
                  >
                    Confirm Deletion
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-body-1 mb-6 text-888EB0 max-w-[275px]">
                      Are you sure you want to delete invoice #XM9141? This
                      action cannot be undone.
                    </p>
                  </div>

                  <div className="mt-4 flex gap-x-2 justify-end">
                    <Cancel />
                    <Delete />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DeletePrompt;
