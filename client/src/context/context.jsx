import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [isEditInvoiceOpen, setIsEditInvoiceOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeNewInvoice() {
    setIsNewInvoiceOpen(false);
  }
  function openNewInvoice() {
    setIsNewInvoiceOpen(true);
  }
  function openEditInvoice() {
    setIsEditInvoiceOpen(true);
  }
  function closeEditInvoice() {
    setIsEditInvoiceOpen(false);
  }
  const sideFixer = () => {
    if (window.innerWidth <= 768) {
      closeNewInvoice();
      closeEditInvoice();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      sideFixer();
    });
    return () =>
      window.removeEventListener('resize', () => {
        sideFixer();
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        closeModal,
        openModal,
        closeNewInvoice,
        openNewInvoice,
        isNewInvoiceOpen,
        openEditInvoice,
        closeEditInvoice,
        isEditInvoiceOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
