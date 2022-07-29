import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

// const API_URL = 'https://invoicev1.herokuapp.com/v1/invoices';

const AppProvider = ({ children }) => {
  /* APP STATE VARIABLES */
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <AppContext.Provider value={{ isOpen, closeModal, openModal }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
