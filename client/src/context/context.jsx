import React, { useState, useEffect, useContext, useCallback } from 'react';

import axios from 'axios';
const AppContext = React.createContext();

// const API_URL = 'https://invoicev1.herokuapp.com/v1/invoices';

const AppProvider = ({ children }) => {
  /* APP STATE VARIABLES */
  const [loading, setLoading] = useState(false);

  // const [invoices, updateInvoices] = useState([]);

  /* CORE FILTER FUNCTIONNALITIES */
  // async function httpGetInvoices() {
  //   try {
  //     const { data } = await axios.get(`${API_URL}`);
  //     updateInvoices(data);
  //     console.log(data);
  //     // return data;
  //   } catch (error) {
  //     console.log(error);
  //     return {
  //       ok: false,
  //     };
  //   }
  // }

  useEffect(() => {
    // httpGetInvoices();
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider value={{ loading }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
