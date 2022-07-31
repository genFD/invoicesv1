import React, { useState, useContext, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { httpGetInvoices, httpGetInvoice } from '../api/requests';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isNewInvoiceOpen, setIsNewInvoiceOpen] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isEditInvoiceOpen, setIsEditInvoiceOpen] = useState(false);
  const [invoices, updateInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [invoice, updateInvoice] = useState([]);

  // const { id } = useParams();

  // const getInvoices = useCallback(async () => {
  //   setLoading(true);
  //   const fetchedInvoices = await httpGetInvoices();
  //   if (fetchedInvoices) {
  //     updateInvoices(fetchedInvoices);
  //   } else {
  //     updateInvoices([]);
  //   }
  //   setLoading(false);
  // }, []);

  // const getInvoice = useCallback(async (id) => {
  //   setLoading(true);
  //   const fetchedInvoice = await httpGetInvoice(id);
  //   if (fetchedInvoice) {
  //     const { content } = fetchedInvoice[0];
  //     updateInvoice(content);
  //   } else {
  //     updateInvoice([]);
  //   }
  //   setLoading(false);
  // }, []);

  // useEffect(() => {
  //   getInvoices();
  // }, [getInvoices]);

  // useEffect(() => {
  //   getInvoice(id);
  // }, [getInvoice, id]);

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
        invoices,
        invoice,
        loading,
        isModalOpen,
        setIsModalOpen,
        closeModal,
        openModal,
        closeNewInvoice,
        openNewInvoice,
        isNewInvoiceOpen,
        openEditInvoice,
        closeEditInvoice,
        isEditInvoiceOpen,
        isList,
        setIsList,
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
