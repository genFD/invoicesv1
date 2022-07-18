import React, { useState, useEffect, useContext, useCallback } from "react";

import axios from "axios";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  /* APP STATE VARIABLES */

  /* CORE FILTER FUNCTIONNALITIES */

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
