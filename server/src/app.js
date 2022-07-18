const express = require('express');
const path = require('path');
const invoicesRouter = require('./routes/invoices.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(invoicesRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
module.exports = app;
