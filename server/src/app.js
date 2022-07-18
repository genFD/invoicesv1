const express = require('express');
const invoicesRouter = require('./routes/invoices.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(invoicesRouter);

module.exports = app;
