const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const api = require('./routes/api');
const invoiceRouter = require('./routes/invoices/invoices.routes');
const { getAllInvoices } = require('./services/queries');

const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use('/v1/invoices', api);
app.use('/v1', invoiceRouter);
// app.get('/v1/invoices', getAllInvoices);
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
