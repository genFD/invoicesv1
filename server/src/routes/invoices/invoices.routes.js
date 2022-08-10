const express = require("express");

const {
  getAllInvoices,
  getInvoiceById,
  createInvoice,
  editInvoices,
  deleteInvoices,
} = require("./invoices.controller");

const invoicesRouter = express.Router();

invoicesRouter.get("/", getAllInvoices);
invoicesRouter.get("/:id", getInvoiceById);
invoicesRouter.post("/", createInvoice);

module.exports = invoicesRouter;
