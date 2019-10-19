const express = require('express')
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const path = require('path');

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', '..', '..', 'uploads')));
app.use(require('./routes'));

module.exports = http;