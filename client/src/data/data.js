export const terms = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];
export const formData = [
  {
    client: {
      city: "",
      country: "",
      postCode: "",
      street: "",
      email: "",
      name: "",
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
    paymentTerms: "",
    total: "",
  },
];
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
