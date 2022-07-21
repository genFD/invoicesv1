const express = require('express');
const invoicesRouter = require('./invoices/invoices.routes');

const api = express.Router();

api.use('/', invoicesRouter);

module.exports = api;
