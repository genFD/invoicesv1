const express = require('express');
const { httpGetAllInvoices } = require('./invoices.controller');
const { getAllInvoices } = require('../../services/queries');
const invoicesRouter = express.Router();

invoicesRouter.get('/', getAllInvoices);

module.exports = invoicesRouter;
