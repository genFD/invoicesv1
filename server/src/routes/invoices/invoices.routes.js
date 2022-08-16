const express = require("express");

const {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  editInvoice,
  deleteInvoice,
  filterInvoices,
  markAsPaid,
} = require("./invoices.controller");

const invoicesRouter = express.Router();

invoicesRouter.get("/", getAllInvoices);
invoicesRouter.get("/:id", getInvoiceById);
invoicesRouter.get("/search/status", filterInvoices);
invoicesRouter.post("/", createInvoice);
invoicesRouter.put("/:id", editInvoice);
invoicesRouter.put("/masp/:id", markAsPaid);
invoicesRouter.delete("/:id", deleteInvoice);

module.exports = invoicesRouter;
