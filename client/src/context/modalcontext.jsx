import { createContext, useContext, useEffect, useState } from "react";
import { modalState } from "../data/data";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(modalState);
  const [filter, setFilter] = useState(false);
  const close = (state) => {
    setModal({ ...modal, [state]: false });
  };
  const open = (state) => {
    setModal({ ...modal, [state]: true });
  };
  const openFilter = () => setFilter(!filter);

  const onSmallScreen = () => {
    if (window.innerWidth <= 768) {
      close("newInvoiceForm");
      // closeEditInvoice();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      onSmallScreen();
    });
    return () =>
      window.removeEventListener("resize", () => {
        onSmallScreen();
      });
  }, []);

  return (
    <ModalContext.Provider
      value={{ ...modal, close, open, openFilter, filter }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export { ModalContext, ModalProvider };
