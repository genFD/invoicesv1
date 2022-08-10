const express = require("express");
const invoicesRouter = require("./invoices/invoices.routes");

const api = express.Router();

api.use("/invoices", invoicesRouter);

module.exports = api;
