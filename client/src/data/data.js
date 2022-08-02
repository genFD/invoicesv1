export const terms = ['Net 1 Day', 'Net 7 Days', 'Net 14 Days', 'Net 30 Days'];
export const formData = {
  clientAddress: {
    city: '',
    country: '',
    postCode: '',
    street: '',
  },
  emptyFieldErrorMessage: "can't be empty",

  senderAddress: {
    city: '',
    country: '',
    postCode: '',
    street: '',
  },
  clientEmail: '',
  clientName: '',
  createdAt: '',
  description: '',
  invoiceId: '',
  items: [
    {
      name: '',
      price: '',
      quantity: '',
      total: '',
      errorMessage: 'An item must be added',
    },
  ],
  paymentDue: '',
  paymentTerms: '',
  total: '',
};
