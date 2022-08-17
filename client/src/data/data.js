import { getId } from "../utils/utils";

export const loadingState = {
  loadingCards: false,
  loadingCard: false,
  loadingPost: false,
  loadingDelete: false,
  loadingPaid: false,
  loadingUpdate: false,
  loadingDraft: false,
};
export const terms = ["Net 1 Day", "Net 7 Days", "Net 14 Days", "Net 30 Days"];

export const formData = {
  clientAddress: {
    city: "",
    country: "",
    postCode: "",
    street: "",
  },
  clientInfo: {
    email: "",
    name: "",
  },

  senderAddress: {
    city: "",
    country: "",
    postCode: "",
    street: "",
  },

  invoiceInfo: {
    createdAt: "",
    description: "",
    paymentTerms: "Net 1 day",
  },
  paymentDue: "",
  total: "",
  status: "pending",
};

export const itemsData = [
  {
    id: getId(),
    name: "",
    price: "",
    quantity: "",
    total: "",
  },
];
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

export const modalState = {
  deleteModal: false,
  newInvoiceForm: false,
  editInvoiceForm: false,
  deleteConfirmation: false,
  createConfirmation: false,
};
export const checkBoxState = {
  paid: false,
  pending: false,
  draft: false,
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

export const backdroptransitionChildProps = {
  as: "div",
  enter: "ease-out duration-300",
  enterFrom: "opacity-0",
  enterTo: "opacity-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100",
  leaveTo: "opacity-0",
};
export const drawerTransitionProps = {
  as: "div",
  enter: "ease-out duration-300",
  enterFrom: "opacity-0 scale-95",
  enterTo: "opacity-100 scale-100",
  leave: "ease-in duration-200",
  leaveFrom: "opacity-100 scale-100",
  leaveTo: "opacity-0 scale-95",
};
