// const http = require('http');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const server = express();
const { getAllInvoices } = require('./services/queries');
const invoicesRouter = require('./routes/invoices/invoices.routes');
// const app = require('./app');

// const server = http.createServer(app);

server.use(morgan('combined'));

server.use(express.json());
server.use(
  cors({
    origin: '*',
  })
);
server.use(express.static(path.join(__dirname, '..', 'public')));

const PORT = process.env.PORT || 8000;

server.use('/v1/invoices', invoicesRouter);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
