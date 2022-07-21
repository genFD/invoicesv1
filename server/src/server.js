// const http = require('http');
require('dotenv').config();
const express = require('express');
const server = express();
const { getAllInvoices } = require('./services/queries');
// const app = require('./app');

// const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
server.get('/v1/invoices', getAllInvoices);
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
