const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const createRouter = require('./routes/createRouter');
const readRouter = require('./routes/readRouter');
const updateRouter = require('./routes/updateRouter');
const app = express();

app.set('port', process.env.PORT || 3008);
app.use(cors());
app.use(express.json());
app.use('/api', createRouter);
app.use('/api', readRouter);
app.use('/api', updateRouter);

module.exports = app;