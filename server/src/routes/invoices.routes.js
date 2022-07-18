const express = require('express');
const { getAllInvoices } = require('./invoices.controller');
const invoicesRouter = express.Router();

invoicesRouter.get('/', getAllInvoices);

module.exports = invoicesRouter;
