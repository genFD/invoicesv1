import React, { Fragment, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useGlobalContext } from '../context/context';
import ReactDOM from 'react-dom';
import { Cancel } from '../components';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Delete = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="w-89 h-48 bg-EC5757 hover:bg-FF9797 dark:hover:bg-FF9797 rounded-3xl grid place-content-center text-heading-4 text-FFFF font-bold duration-300 transition-all"
      >
        Delete
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="bg-FFFF dark:bg-141625 w-327 h-[220px] tablet:w-[480px] tablet:h-[249px] shadow-lg rounded-md flex flex-col p-8 tablet:p-12">
          <h3 className="text-heading-2 leading-6  dark:text-FFFF text-0C0E16">
            Confirm Deletion
          </h3>
          <p className="mt-2 text-body-1 text-888EB0  max-w-[275px]">
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
          </p>
          <div className="mt-6 flex gap-x-2 justify-end">
            <button
              onClick={closeModal}
              className="w-96 h-48 bg-opacity-30 text-7E88C3 bg-252945 rounded-3xl grid place-content-center text-body-1 text-FFFF font-bold"
            >
              Cancel
            </button>
            <button className="w-96 h-48 text-7E88C3 bg-EC5757 rounded-3xl grid place-content-center text-body-1 text-FFFF font-bold">
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'transparent',
    backgroundColor: 'transparent',
  },
};

export default Delete;
