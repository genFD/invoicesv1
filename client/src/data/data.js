export const terms = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];
export const formData = {
  client: {
    where: {
      city: "",
      country: "",
      postCode: "",
      street: "",
    },
    who: {
      email: "",
      name: "",
    },
  },

  sender: {
    city: "",
    country: "",
    postCode: "",
    street: "",
  },
  items: [
    {
      name: "",
      price: "",
      quantity: "",
      total: "",
    },
  ],
  invoiceInfo: {
    createdAt: "",
    description: "",
  },
  paymentTerms: 1,
  paymentDue: "",
  total: "",
};
export const formValues = {
  createdAt: "",
  paymentDue: "",
  description: "",
  paymentTerms: "",
  clientName: "",
  clientEmail: "",
  status: "",
  senderAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  clientAddress: {
    street: "",
    city: "",
    postCode: "",
    country: "",
  },
  items: [
    {
      name: "",
      quantity: "",
      price: "",
      total: "",
    },
  ],
  total: "",
};

export const alertData = {
  show: false,
  message: "",
  type: "",
};
export const errorData = {
  error: false,
  clientAddress: {
    city: false,
    country: false,
    postCode: false,
    street: false,
  },
};

export const transitionProps = {
  appear: true,
  as: "div",
  enter: "ease-out duration-500",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-500",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
};
